import { MainContent } from "@/components";
import RecurringBillsSection from "./components/recurring-bills-section";

export default function Page() {
  return (
    <MainContent text="Recurring Bills">
      <RecurringBillsSection />
    </MainContent>
  );
}
