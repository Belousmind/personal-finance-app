import { Variants } from "framer-motion";

export const dropdownVariants: Variants = {
  hidden: {
    opacity: 0,
    scaleY: 0,
    transformOrigin: "top",
  },
  visible: {
    opacity: 1,
    scaleY: 1,
    transformOrigin: "top",
    transition: {
      duration: 0.2,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.04,
    },
  },
  exit: {
    opacity: 0,
    scaleY: 0,
    transformOrigin: "top",
    transition: {
      duration: 0.1,
      ease: "easeIn",
    },
  },
};

export const optionVariants: Variants = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};
