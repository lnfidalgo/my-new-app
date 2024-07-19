import { motion } from "framer-motion";
import HamburguerLinks from "./hamburguerLinks";

export default function HamburguerContent() {
  return (
    <motion.div
      variants={{
        open: {
          x: "0%",
          transition: {
            duration: 0.5,
            ease: "easeInOut",
            when: "beforeChildren",
          },
        },
        close: {
          x: "100%",
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        },
      }}
      animate="open"
      initial="close"
      exit="close"
      className="fixed inset-0 bg-[#192965] space-y-10 p-6 container mx-auto flex justify-center items-center"
    >
      <motion.div
        variants={{
          open: {
            y: "0%",
            opacity: 1,
          },
          close: {
            y: "30%",
            opacity: 0,
          },
        }}
      >
        <HamburguerLinks />
      </motion.div>
    </motion.div>
  );
}
