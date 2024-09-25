import { useState } from "react";
import { getSticker } from "./stickers.data.js";
import Sticker from "./Sticker.jsx";
import style from "./StickerPad.module.css";

function StickerPad() {
  const [stickers, setStickers] = useState([]);

  function addSticker(e) {
    const stickerData = getSticker()
    const newSticker = {
      ...stickerData,
      x: e.clientX,
      y: e.clientY,
    };
    const nextStickers = [...stickers, newSticker];
    setStickers(nextStickers);
  }

  return (
    <button onClick={(e) => addSticker(e)} className={style.container}>
      {stickers.map((sticker) => (
        <Sticker src={sticker.src} position={{x: sticker.x, y: sticker.y}} />
      ))}
    </button>
  );
}

export default StickerPad;
