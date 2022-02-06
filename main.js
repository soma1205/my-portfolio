let picture = ["IBZEE2046.JPG", "IMG_1685.JPG", "QQYBE5872.JPG"];
let num = -1;

const Slideshow = function () {
  if (num == 2) {
    num = 0;
  } else {
    num++;
  }
  document.getElementById("mypicture").src = picture[num];
};
setInterval(Slideshow, 2000);
