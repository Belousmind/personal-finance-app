import MainContent from "@/components/main-content";
import BalanceSummary from "@/components/balance-summary";
import Overviews from "@/components/overviews";

export default function Page() {
  return (
    <MainContent text="overview">
    
      <Overviews />
    </MainContent>
  );
}
