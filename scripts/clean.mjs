import { rm } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = /** @type {string} */ (join(__filename, "..", ".."));

async function main() {
  const target = join(__dirname, ".next");
  try {
    await rm(target, { recursive: true, force: true });
    console.log("Removed .next cache");
  } catch (err) {
    console.error("Failed to remove .next:", err);
    process.exitCode = 1;
  }
}

await main();

