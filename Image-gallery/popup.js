document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "getImages"}, function(response) {
        const images = response.images;
        const container = document.getElementById('imageContainer');
        images.forEach(function(imageUrl) {
          const link = document.createElement('a');
          link.href = imageUrl;
          link.target = "_blank"; 
          const img = document.createElement('img');
          img.src = imageUrl;
          link.appendChild(img);
          container.appendChild(link);
        });
      });
    });
  });
  