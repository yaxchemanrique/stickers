const STICKERS = [
  {
    src: './src/assets/sticker-1.png'
  },
  {
    src: './src/assets/sticker-2.png'
  },
  {
    src: './src/assets/sticker-3.png'
  },
  {
    src: './src/assets/sticker-4.png'
  },
  {
    src: './src/assets/sticker-5.png'
  }
]

export function getSticker() {
  return sample(STICKERS);
}

function sample(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}