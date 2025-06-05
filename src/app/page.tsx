import MainContent from "@/components/main-content";
import BalanceSummary from "@/components/balance-summary";

export default function Page() {
  return (
    <MainContent text="overview">
      <BalanceSummary />
    </MainContent>
  );
}
