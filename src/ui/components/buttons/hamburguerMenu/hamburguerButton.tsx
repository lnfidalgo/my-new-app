import { motion } from "framer-motion";

export default function HamburguerButtonAnimation() {
  return (
    <motion.button className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20">
      <motion.span
        style={{
          left: "50%",
          top: "35%",
          x: "-50%",
          y: "-50%",
        }}
        className="absolute h-1 w-6 bg-white"
      ></motion.span>
      <motion.span
        style={{
          left: "50%",
          top: "50%",
          x: "-50%",
          y: "-50%",
        }}
        className="absolute h-1 w-6 bg-white"
      ></motion.span>
      <motion.span
        style={{
          left: "calc(50% + 6px)",
          bottom: "35%",
          x: "-50%",
          y: "50%",
        }}
        className="absolute h-1 w-3 bg-white"
      ></motion.span>
    </motion.button>
  );
}
