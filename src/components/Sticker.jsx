function Sticker({ src, position }) {
  return (
    <img
      src={src}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
        filter: "drop-shadow(4px 8px 0px hsl(300deg 26% 56% / 0.34))",
      }}
    />
  );
}

export default Sticker;
