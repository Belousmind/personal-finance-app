import { AnimatePresence, m } from "framer-motion";
import { buttonTextVariants } from "@/constants";
import styles from "../style.module.scss";

type MenuButtonProps = {
  onToggle: () => void;
  isClosed: boolean;
};

export function MenuButton({ onToggle, isClosed }: MenuButtonProps) {
  return (
    <m.button
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      className={styles.button}
    >
      <m.svg
        variants={{
          open: { rotate: 0 },
          closed: { rotate: 180 },
        }}
        initial={false}
        animate={isClosed ? "closed" : "open"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M15 7.49998L15 16.5C15 16.6989 14.921 16.8897 14.7803 17.0303C14.6397 17.171 14.4489 17.25 14.25 17.25H12L12 21C12.0001 21.1484 11.9562 21.2935 11.8738 21.417C11.7914 21.5404 11.6742 21.6366 11.5371 21.6934C11.4 21.7503 11.2491 21.7651 11.1035 21.7361C10.9579 21.7071 10.8242 21.6356 10.7194 21.5306L1.71935 12.5306C1.64962 12.461 1.5943 12.3782 1.55656 12.2872C1.51882 12.1961 1.49939 12.0985 1.49939 12C1.49939 11.9014 1.51882 11.8038 1.55656 11.7128C1.5943 11.6217 1.64962 11.539 1.71935 11.4694L10.7194 2.46936C10.8242 2.36435 10.9579 2.29282 11.1035 2.26383C11.2491 2.23485 11.4 2.2497 11.5371 2.30651C11.6742 2.36333 11.7914 2.45955 11.8738 2.58299C11.9562 2.70644 12.0001 2.85156 12 2.99998V6.74998H14.25C14.4489 6.74998 14.6397 6.829 14.7803 6.96965C14.921 7.1103 15 7.30107 15 7.49998ZM17.25 6.74998C17.0511 6.74998 16.8603 6.829 16.7196 6.96965C16.579 7.1103 16.5 7.30107 16.5 7.49998V16.5C16.5 16.6989 16.579 16.8897 16.7196 17.0303C16.8603 17.171 17.0511 17.25 17.25 17.25C17.4489 17.25 17.6397 17.171 17.7803 17.0303C17.921 16.8897 18 16.6989 18 16.5L18 7.49998C18 7.30107 17.921 7.1103 17.7803 6.96965C17.6397 6.829 17.4489 6.74998 17.25 6.74998ZM20.25 6.74998C20.0511 6.74998 19.8603 6.829 19.7196 6.96965C19.579 7.1103 19.5 7.30107 19.5 7.49998L19.5 16.5C19.5 16.6989 19.579 16.8897 19.7196 17.0303C19.8603 17.171 20.0511 17.25 20.25 17.25C20.4489 17.25 20.6397 17.171 20.7803 17.0303C20.921 16.8897 21 16.6989 21 16.5L21 7.49998C21 7.30107 20.921 7.1103 20.7803 6.96965C20.6397 6.829 20.4489 6.74998 20.25 6.74998Z"
          fill="currentColor"
        />
      </m.svg>
      <AnimatePresence initial={false}>
        {!isClosed && (
          <m.span
            key="text"
            variants={buttonTextVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={styles.buttonText}
          >
            Minimize Menu
          </m.span>
        )}
      </AnimatePresence>
    </m.button>
  );
}
