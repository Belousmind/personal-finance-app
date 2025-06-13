import Modal from "..";
import PotForm from "@/components/forms/pot-form";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  initialData?: string;
  mode?: "create" | "edit";
};

export default function ModalPot({
  isOpen,
  onClose,
  initialData,
  mode = "create",
}: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={mode === "edit" ? "Edit Pot" : "Add New Pot"}
    >
      <PotForm  onClose={onClose} initialName={initialData} mode={mode}/>
    </Modal>
  );
}
