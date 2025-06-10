import MainContent from "@/components/main-content";
import BudgetSection from "./components/budget-section";
import { Button } from "@/components";

export default function Page() {
  return (
    <MainContent text="Budgets">
      <Button text="+ Add New Budget" />
      <BudgetSection />
    </MainContent>
  );
}
