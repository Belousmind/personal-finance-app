import Modal from "..";
import BudgetForm from "@/components/forms/budget-form";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  initialData?: string;
  mode?: "create" | "edit";
};

export default function ModalBudget({
  isOpen,
  onClose,
  initialData,
  mode = "create",
}: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={mode === "edit" ? "Edit Budget" : "Add New Budget"}
    >
      <BudgetForm initialCategory={initialData} mode={mode} onClose={onClose} />
    </Modal>
  );
}
