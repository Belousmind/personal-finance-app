import { MainContent } from "@/components";
import PotList from "./components/pot-list";
import AddPotButton from "./components/add-pot-button";

export default function Page() {
  return (
    <MainContent text="Pots">
      <AddPotButton />
      <PotList />
    </MainContent>
  );
}
