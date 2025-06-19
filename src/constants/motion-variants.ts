import { logoPaths } from "./logo-paths";
import { Variants } from "framer-motion";

export const textVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.02 + 0.1,
      duration: 0.2,
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    x: -10,
    transition: {
      delay: i * 0.01,
      duration: 0.15,
    },
  }),
};

export const linkVariants = {
  hidden: { width: 80 },
  visible: {
    width: 212,
    transition: {
      delay: 0.1,
      duration: 0.2,
    },
  },
  exit: {
    width: 80,
    transition: {
      delay: 0.01,
      duration: 0.2,
    },
  },
};

export const buttonTextVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, delay: 0.25 },
  },
  exit: { opacity: 0, x: -10 },
};

export const pathVariants = {
  hidden: { opacity: 0, x: -5 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.2,
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    x: -5,
    transition: {
      delay: (logoPaths.length - 1 - i) * 0.05,
      duration: 0.2,
    },
  }),
};

export  const menuAnimation: Variants = {
    open: {
      width: 300,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
    closed: {
      width: 88,
      transition: {
        delay: 0.15,
        duration: 0.2,
      },
    },
  };