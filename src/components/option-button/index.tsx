"use client";

import styles from "./style.module.scss";
import { useState } from "react";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ModalDeleteConfirmation, ModalBudget, ModalPot } from "@/components";
import { menuVariants, itemVariants } from "@/constants";
import { m, AnimatePresence } from "framer-motion";

type Props = {
  label: string;
  category: string;
};

export default function OptionButton({ label, category }: Props) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <>
      <Menu>
        {({ open }) => (
          <div className={styles["menu-wrapper"]}>
            <MenuButton className={styles.button}>
              <OptionsIcon />
            </MenuButton>

            <AnimatePresence>
              {open && (
                <MenuItems
                  as={m.div}
                  static
                  className={styles["options-list"]}
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  modal={false}
                >
                  <MenuItem>
                    <m.button
                      className={styles["option-button"]}
                      variants={itemVariants}
                      onClick={() => setIsEditModalOpen(true)}
                    >
                      Edit {label}
                    </m.button>
                  </MenuItem>
                  <MenuItem>
                    <m.button
                      className={styles["option-button"]}
                      variants={itemVariants}
                      onClick={() => setIsDeleteModalOpen(true)}
                    >
                      Delete {label}
                    </m.button>
                  </MenuItem>
                </MenuItems>
              )}
            </AnimatePresence>
          </div>
        )}
      </Menu>
      {label === "pot" && (
        <ModalPot
          initialData={category}
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          mode="edit"
        />
      )}

      {label === "budget" && (
        <ModalBudget
          initialData={category}
          mode="edit"
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}

      <ModalDeleteConfirmation
        label={label}
        category={category}
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      />
    </>
  );
}

function OptionsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M9.75 8C9.75 8.34612 9.64736 8.68446 9.45507 8.97225C9.26278 9.26003 8.98947 9.48434 8.6697 9.61679C8.34993 9.74924 7.99806 9.7839 7.65859 9.71637C7.31913 9.64885 7.00731 9.48218 6.76256 9.23744C6.51782 8.9927 6.35115 8.68087 6.28363 8.34141C6.2161 8.00194 6.25076 7.65007 6.38321 7.3303C6.51567 7.01053 6.73997 6.73722 7.02775 6.54493C7.31554 6.35264 7.65388 6.25 8 6.25C8.46413 6.25 8.90925 6.43437 9.23744 6.76256C9.56563 7.09075 9.75 7.53587 9.75 8ZM3 6.25C2.65388 6.25 2.31554 6.35264 2.02775 6.54493C1.73997 6.73722 1.51566 7.01053 1.38321 7.3303C1.25076 7.65007 1.2161 8.00194 1.28363 8.34141C1.35115 8.68087 1.51782 8.9927 1.76256 9.23744C2.00731 9.48218 2.31913 9.64885 2.65859 9.71637C2.99806 9.7839 3.34993 9.74924 3.6697 9.61679C3.98947 9.48434 4.26278 9.26003 4.45507 8.97225C4.64737 8.68446 4.75 8.34612 4.75 8C4.75 7.53587 4.56563 7.09075 4.23744 6.76256C3.90925 6.43437 3.46413 6.25 3 6.25ZM13 6.25C12.6539 6.25 12.3155 6.35264 12.0278 6.54493C11.74 6.73722 11.5157 7.01053 11.3832 7.3303C11.2508 7.65007 11.2161 8.00194 11.2836 8.34141C11.3512 8.68087 11.5178 8.9927 11.7626 9.23744C12.0073 9.48218 12.3191 9.64885 12.6586 9.71637C12.9981 9.7839 13.3499 9.74924 13.6697 9.61679C13.9895 9.48434 14.2628 9.26003 14.4551 8.97225C14.6474 8.68446 14.75 8.34612 14.75 8C14.75 7.77019 14.7047 7.54262 14.6168 7.3303C14.5288 7.11798 14.3999 6.92507 14.2374 6.76256C14.0749 6.60006 13.882 6.47116 13.6697 6.38321C13.4574 6.29526 13.2298 6.25 13 6.25Z"
        fill="currentColor"
      />
    </svg>
  );
}
