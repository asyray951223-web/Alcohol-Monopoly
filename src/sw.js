const CACHE_NAME = "alcohol-monopoly-v1";
const ASSETS = [
  "./Untitled-1.html",
  "./style.css",
  "./script.js",
  "./data.js",
  "./manifest.json",
  "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
  "https://html2canvas.hertzen.com/dist/html2canvas.min.js",
  "https://cdn-icons-png.flaticon.com/512/931/931949.png", // 快取 PWA 圖示
  // 如果有本地音效檔，建議也加進來，例如：
  // './sounds/dice.mp3',
  // './sounds/step.mp3',
  // './sounds/popup.mp3',
  // './sounds/bgm.mp3'
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
