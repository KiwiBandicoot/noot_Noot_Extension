let pinguImages = [
  "https://images.contentstack.io/v3/assets/bltc12136c3b9f23503/blt5f81916810015b49/67167cf1e43e4371989a0fcf/PIN01_07.jpg",
  "https://images.contentstack.io/v3/assets/bltc12136c3b9f23503/blt5f81916810015b49/67167cf1e43e4371989a0fcf/PIN01_07.jpg",
  "https://images.contentstack.io/v3/assets/bltc12136c3b9f23503/blt5f81916810015b49/67167cf1e43e4371989a0fcf/PIN01_07.jpg",
  "https://images.contentstack.io/v3/assets/bltc12136c3b9f23503/blt5f81916810015b49/67167cf1e43e4371989a0fcf/PIN01_07.jpg",
  "https://images.contentstack.io/v3/assets/bltc12136c3b9f23503/blt5f81916810015b49/67167cf1e43e4371989a0fcf/PIN01_07.jpg",
  "https://images.contentstack.io/v3/assets/bltc12136c3b9f23503/blt5f81916810015b49/67167cf1e43e4371989a0fcf/PIN01_07.jpg",
  "https://images.contentstack.io/v3/assets/bltc12136c3b9f23503/blt5f81916810015b49/67167cf1e43e4371989a0fcf/PIN01_07.jpg",
  "https://images.contentstack.io/v3/assets/bltc12136c3b9f23503/blt5f81916810015b49/67167cf1e43e4371989a0fcf/PIN01_07.jpg",
  "https://images.contentstack.io/v3/assets/bltc12136c3b9f23503/blt5f81916810015b49/67167cf1e43e4371989a0fcf/PIN01_07.jpg",
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
