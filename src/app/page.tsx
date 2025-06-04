import Title from "@/components/title/title";
import Button from "@/components/button";
import TertiatyLink from "@/components/link";

export default function Page() {
  return (
    <>
      <Title text="Overview" />
      <Button text="button" variant="primary" />
      <Button text="button" variant="secondary" />
      <Button text="button" variant="destroy" />
      <TertiatyLink href="pots" />
    </>
  );
}
