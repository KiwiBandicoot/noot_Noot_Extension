let pinguImages = [
  "https://images.contentstack.io/v3/assets/bltc12136c3b9f23503/blt5f81916810015b49/67167cf1e43e4371989a0fcf/PIN01_07.jpg",
  "https://tinybop.com/img/loves/pingu/pingu-hero.jpg",
  "https://www.easyspot.co.nz/cdn/shop/files/89faff6708f40d94adad0d91f8ee598a.jpg?v=1747882499&width=823",
  "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABQoLuJydqligrJrjHoaI1IuiaVv5BOQ7Ed6Y5ADLEsyzXqwDPW12H7Ramu9ljp5xFcgAxUJw60gSpAyIjCt9PH7cq_NEGh5QsdUC.jpg?r=6ff",
  "https://images.timesnownews.com/thumb/msid-114447996,thumbsize-21060,width-1280,height-720,resizemode-75/114447996.jpg",
  "https://images.contentstack.io/v3/assets/bltc12136c3b9f23503/blt5f81916810015b49/67167cf1e43e4371989a0fcf/PIN01_07.jpg",
  "https://tinybop.com/img/loves/pingu/pingu-hero.jpg",
  "https://www.easyspot.co.nz/cdn/shop/files/89faff6708f40d94adad0d91f8ee598a.jpg?v=1747882499&width=823",
  "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABQoLuJydqligrJrjHoaI1IuiaVv5BOQ7Ed6Y5ADLEsyzXqwDPW12H7Ramu9ljp5xFcgAxUJw60gSpAyIjCt9PH7cq_NEGh5QsdUC.jpg?r=6ff",
  "https://images.timesnownews.com/thumb/msid-114447996,thumbsize-21060,width-1280,height-720,resizemode-75/114447996.jpg",
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
