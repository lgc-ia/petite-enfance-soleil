import { rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const projectRoot = join(dirname(__filename), "..");

const RETRYABLE_CODES = new Set(["EPERM", "EBUSY", "ENOTEMPTY"]);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function removeWithRetries(target, attempts = 4) {
  for (let i = 0; i < attempts; i += 1) {
    try {
      await rm(target, { recursive: true, force: true });
      return;
    } catch (err) {
      const code = err && typeof err === "object" && "code" in err ? err.code : "";
      const isLastAttempt = i === attempts - 1;

      if (!RETRYABLE_CODES.has(code) || isLastAttempt) {
        throw err;
      }

      await sleep(150 * (i + 1));
    }
  }
}

async function main() {
  const target = join(projectRoot, ".next");
  try {
    await removeWithRetries(target);
    console.log("Removed .next cache");
  } catch (err) {
    console.warn("Could not fully clean .next cache, build will continue:", err);
  }
}

await main();

