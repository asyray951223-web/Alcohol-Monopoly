const CACHE_NAME = "alcohol-monopoly-v2"; // 更新版本號以套用新快取
const ASSETS = [
  "./",
  "./index.html",
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
  self.skipWaiting(); // 強制跳過等待，立即安裝
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          // 刪除舊版本的快取 (這會清除之前快取的 HTML, JS, CSS)
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim(); // 立即控制所有頁面
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
