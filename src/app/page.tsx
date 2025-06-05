import MainContent from "@/components/main-content";
import BalanceSummary from "@/components/balance-summary";
import Chart from "@/components/pie-chart";


export default function Page() {
  return (
    <MainContent text="overview">
      <BalanceSummary />
      <Chart />
    </MainContent>
  );
}
