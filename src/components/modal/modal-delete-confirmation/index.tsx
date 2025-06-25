"use client";

import { Modal, Button } from "@/components";
import { removeBudget } from "@/store/budgets/budgetsSlice";
import { removePot } from "@/store/pots/potsSlice";
import { useAppDispatch } from "@/store/hooks";

import styles from "./style.module.scss";

type Props = {
  label: string;
  category: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function ModalDeleteConfirmation({
  label,
  category,
  isOpen,
  onClose,
}: Props) {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    if (label === "budget") dispatch(removeBudget(category));
    if (label === "pot") dispatch(removePot(category));
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Delete ‘${category}’?`}>
      <p className={styles['confirm-text']}>
        Are you sure you want to delete this {label}? This action cannot be
        reversed, and all the data inside it will be removed forever.
      </p>
      <Button
        text="Yes, Confirm Deletion"
        onClick={handleDelete}
        variant="destroy"
      />
      <button onClick={onClose} className={styles['cancel-button']}>
        No, Go Back
      </button>
    </Modal>
  );
}
