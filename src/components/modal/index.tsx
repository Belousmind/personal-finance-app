"use client";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { m, AnimatePresence } from "framer-motion";

import styles from "./style.module.scss";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const modalVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      delay: 0.2,
    },
  },
  exit: { scale: 0 },
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onClose={onClose}>
          <m.div
            className={styles["dialog-overlay"]}
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <m.div
              className={styles["dialog-container"]}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <DialogPanel className={styles["dialog-panel"]}>
                <DialogTitle className={styles["dialog-title"]}>
                  {title}
                  <button onClick={onClose} className={styles["close-button"]}>
                    <CloseIcon />
                  </button>
                </DialogTitle>
                {children}
              </DialogPanel>
            </m.div>
          </m.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M20.53 12.53L17.06 16L20.53 19.47C20.6037 19.5387 20.6628 19.6215 20.7038 19.7135C20.7448 19.8055 20.7668 19.9048 20.7686 20.0055C20.7704 20.1062 20.7518 20.2062 20.7141 20.2996C20.6764 20.393 20.6203 20.4778 20.549 20.549C20.4778 20.6203 20.393 20.6764 20.2996 20.7141C20.2062 20.7518 20.1062 20.7704 20.0055 20.7686C19.9048 20.7668 19.8055 20.7448 19.7135 20.7038C19.6215 20.6628 19.5387 20.6037 19.47 20.53L16 17.06L12.53 20.53C12.3878 20.6625 12.1998 20.7346 12.0055 20.7312C11.8112 20.7277 11.6258 20.649 11.4884 20.5116C11.351 20.3742 11.2723 20.1888 11.2688 19.9945C11.2654 19.8002 11.3375 19.6122 11.47 19.47L14.94 16L11.47 12.53C11.3375 12.3878 11.2654 12.1998 11.2688 12.0055C11.2723 11.8112 11.351 11.6258 11.4884 11.4884C11.6258 11.351 11.8112 11.2723 12.0055 11.2688C12.1998 11.2654 12.3878 11.3375 12.53 11.47L16 14.94L19.47 11.47C19.6122 11.3375 19.8002 11.2654 19.9945 11.2688C20.1888 11.2723 20.3742 11.351 20.5116 11.4884C20.649 11.6258 20.7278 11.8112 20.7312 12.0055C20.7346 12.1998 20.6625 12.3878 20.53 12.53ZM28.75 16C28.75 18.5217 28.0022 20.9868 26.6012 23.0835C25.2003 25.1802 23.209 26.8144 20.8792 27.7795C18.5495 28.7445 15.9859 28.997 13.5126 28.505C11.0393 28.0131 8.76751 26.7987 6.98439 25.0156C5.20127 23.2325 3.98695 20.9607 3.49499 18.4874C3.00303 16.0141 3.25552 13.4505 4.22054 11.1208C5.18556 8.79103 6.81976 6.79975 8.91648 5.39876C11.0132 3.99777 13.4783 3.25 16 3.25C19.3803 3.25397 22.621 4.59854 25.0112 6.98877C27.4015 9.379 28.746 12.6197 28.75 16ZM27.25 16C27.25 13.775 26.5902 11.5999 25.354 9.74983C24.1179 7.89978 22.3609 6.45784 20.3052 5.60635C18.2495 4.75487 15.9875 4.53208 13.8052 4.96617C11.623 5.40025 9.61839 6.47171 8.04505 8.04505C6.47171 9.61839 5.40025 11.6229 4.96617 13.8052C4.53209 15.9875 4.75487 18.2495 5.60636 20.3052C6.45785 22.3609 7.89979 24.1179 9.74984 25.354C11.5999 26.5902 13.775 27.25 16 27.25C18.9827 27.2467 21.8422 26.0604 23.9513 23.9513C26.0604 21.8422 27.2467 18.9827 27.25 16Z"
        fill="currentColor"
      />
    </svg>
  );
}
