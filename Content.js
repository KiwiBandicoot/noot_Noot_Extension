let pinguImages = [
  chrome.runtime.getURL("assets/pingu_01.jpg"),
  chrome.runtime.getURL("assets/pingu_02.jpg"),
  chrome.runtime.getURL("assets/pingu_03.jpg"),
  chrome.runtime.getURL("assets/pingu_04.webp"),
];

function replaceImages() {
  const imgs = document.getElementsByTagName("img");
  for (let image of imgs) {
    const index = Math.floor(Math.random() * pinguImages.length);
    image.src = pinguImages[index];
  }
}

replaceImages();

const observer = new MutationObserver(replaceImages);
observer.observe(document.body, { childList: true, subtree: true });
