import { motion } from "framer-motion";

interface HamburguerButtonProps {
  animate: string;
  onClick: () => void;
}

export default function HamburguerButton({
  animate,
  onClick,
}: HamburguerButtonProps) {
  return (
    <div className="container mx-auto h-full px-4 flex items-center">
      <div className="relative z-10">
        <motion.button
          animate={animate}
          onClick={onClick}
          className="md:hidden flex flex-col justify-center items-center space-y-1 z-10"
        >
          <motion.span
            variants={{
              close: {
                rotate: 0,
                y: 0,
              },
              open: {
                rotate: 45,
                y: 5,
              },
            }}
            className="w-5 h-px bg-white block"
          ></motion.span>
          <motion.span
            variants={{
              close: {
                rotate: 0,
                y: 0,
                opacity: 1,
              },
              open: {
                opacity: 0,
              },
            }}
            className="w-5 h-px bg-white block"
          ></motion.span>
          <motion.span
            variants={{
              close: {
                rotate: 0,
                y: 0,
              },
              open: {
                rotate: -45,
                y: -5,
              },
            }}
            className="w-5 h-px bg-white block"
          ></motion.span>
        </motion.button>
      </div>
    </div>
  );
}
