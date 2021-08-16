import { useEffect, useState } from "react";

const Animated = (props) => {
  const { className, src, ratioX, ratioY } = props;
  const [movX, setMoveX] = useState(0);
  const [movY, setMoveY] = useState(0);

  useEffect(() => {
    const setNewPosition = (event) => {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const posX = clientX - centerX;
      const posY = clientY - centerY;

      setMoveX(posX * -ratioX);
      setMoveY(posY * -ratioY);
    };

    document.addEventListener("mousemove", setNewPosition);
    return () => {
      document.removeEventListener("mousemove", setNewPosition);
    };
  }, [ratioX, ratioY]);

  return (
    <img
      className={className}
      src={src}
      style={{ transform: `translate(${movX}px, ${movY}px)` }}
      alt=""
    />
  );
};

export default Animated;
