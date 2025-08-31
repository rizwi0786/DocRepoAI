import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Main cursor (same size as before) */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-blue-500 mix-blend-difference pointer-events-none z-[9999]"
        animate={{ x: mousePos.x - 12, y: mousePos.y - 12 }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.25 }}
      />

      {/* Bigger & brighter halo */}
      <motion.div
        className="fixed top-0 left-0 w-28 h-28 rounded-full bg-blue-500/30 blur-2xl pointer-events-none z-[9998]"
        animate={{ x: mousePos.x - 56, y: mousePos.y - 56 }}
        transition={{ type: "spring", stiffness: 50, damping: 40 }}
      />
    </>
  );
}
