import { useEffect, useState } from "react";

const useSwipe = (onSwipe) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    const handleTouchStart = (e) => {
      setTouchStart({ x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY });
    };

    const handleTouchMove = (e) => {
      setTouchEnd({ x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY });
    };

    const handleTouchEnd = () => {
      if (!touchStart || !touchEnd) return;

      const dx = touchEnd.x - touchStart.x;
      const dy = touchEnd.y - touchStart.y;

      if (Math.abs(dx) > Math.abs(dy)) {
        if (dx > 50) onSwipe("right");
        else if (dx < -50) onSwipe("left");
      } else {
        if (dy > 50) onSwipe("down");
        else if (dy < -50) onSwipe("up");
      }

      setTouchStart(null);
      setTouchEnd(null);
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [touchStart, touchEnd, onSwipe]);
};

export default useSwipe;
