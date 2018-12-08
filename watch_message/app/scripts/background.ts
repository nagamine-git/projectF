// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

chrome.runtime.onInstalled.addListener(details => {
  console.log("previousVersion", details.previousVersion);
});

chrome.webRequest.onBeforeRequest.addListener(
  function(detail) {
    console.dir(detail.requestBody);
  },
  {
    urls: ["*://*.slack.com/*", "*://chat.google.com/*"]
  },
  ["requestBody"]
);

console.log(`'Allo 'Allo! Event Page`);
