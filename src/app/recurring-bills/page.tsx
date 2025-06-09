import MainContent from "@/components/main-content";
import RecurringBillsSection from "./components/recurring-bills-section";

export default function Page() {
  return (
    <MainContent text="Recurring Bills">
      <RecurringBillsSection />
    </MainContent>
  );
}
