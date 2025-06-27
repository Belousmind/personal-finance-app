import { Variants } from "framer-motion";

export const menuVariants: Variants = {
  hidden: { scale: 0, transformOrigin: "top right" },
  visible: {
    scale: 1,
    transition: {
      duration: 0.15,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
  exit: { scale: 0, transition: { duration: 0.1 } },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, x: 5 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.15 } },
};