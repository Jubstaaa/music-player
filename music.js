class Music {
  constructor(title, singer, img, file) {
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.file = file;
  }

  getName() {
    return this.title + " - " + this.singer;
  }
}

const musicList = [
  new Music("Uyan", "Mor ve Ötesi", "1.jpg", "1.mp3"),
  new Music("Deli", "Mor ve Ötesi", "2.jpg", "2.mp3"),
  new Music("Daha Mutlu Olamam", "Mor ve Ötesi", "3.jpg", "3.mp3"),
  new Music("Everything Black", "Unlike Pluto", "4.jpg", "4.mp3"),
];
