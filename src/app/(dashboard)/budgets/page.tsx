import MainContent from "@/components/main-content";
import AddBudgetButton from "./components/add-budget-button";
import BudgetDashboard from "./components/budget-dashboard";

export default function Page() {
  return (
    <MainContent text="Budgets">
      <AddBudgetButton />
      <BudgetDashboard />
    </MainContent>
  );
}
