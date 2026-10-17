/* PDF 智能切割 Service Worker
 * 仅用于满足 PWA 安装条件；不劫持任何请求，避免缓存旧版本页面。
 */
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
