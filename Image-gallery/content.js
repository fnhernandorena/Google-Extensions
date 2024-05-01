chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "getImages") {
      const images = Array.from(document.getElementsByTagName('img')).map(img => img.src);
      sendResponse({images: images});
    }
  });
  