import { MainContent } from "@/components";
import TransactionsSection from "./components/transaction-section";

export default function Page() {
  return (
    <MainContent text="Transactions">
      <TransactionsSection />
    </MainContent>
  );
}
