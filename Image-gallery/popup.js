document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "getImages"}, function(response) {
      const images = response ? response.images : [];
      const container = document.getElementById('imageContainer');

      if (images.length === 0) {
        const noImagesMessage = document.createElement('p');
        noImagesMessage.textContent = "No images found.";
        container.appendChild(noImagesMessage);
      } else {
        images.forEach(function(imageUrl) {
          const link = document.createElement('a');
          link.href = imageUrl;
          link.target = "_blank"; // Abre la imagen en una nueva pestaña
          const img = document.createElement('img');
          img.src = imageUrl;
          link.appendChild(img);
          container.appendChild(link);
        });
      }
    });
  });
});
