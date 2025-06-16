import Modal from "..";
import UpdateBalanceForm from "@/components/forms/update-balance-form";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  pot: {
    name: string;
    target: number;
    total: number;
    theme: string;
  };
  mode?: "add" | "withdraw";
};

export default function UpdateBalance({
  isOpen,
  onClose,
  pot,
  mode = "add",
}: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        mode === "add" ? `Add to '${pot.name}'` : `Withdraw from '${pot.name}'`
      }
    >
      <UpdateBalanceForm mode={mode} pot={pot} onClose={onClose} />
    </Modal>
  );
}
