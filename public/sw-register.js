if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.info("Service worker registered:", registration.scope);
      })
      .catch((error) => {
        console.warn("Service worker registration failed:", error);
      });
  });
} else {
  console.info("Service worker not supported in this browser.");
}
