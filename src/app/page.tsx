import Title from "@/components/title/title";
import Button from "@/components/button";
import TertiatyLink from "@/components/tertiaty-link";
import Pagination from "@/components/pagination";
import InputField from "@/components/fileds/input-field";

export default function Page() {
  return (
    <>
      <Title text="Overview" />
      <Button text="button" variant="primary" />
      <Button text="button" variant="secondary" />
      <Button text="button" variant="destroy" />
      <TertiatyLink href="pots" />
      <Pagination />
      <InputField placeholder="search" title="titleeee" />
      <InputField placeholder="search" withIcon={true} helpText="dfsdfsdfsd" />
      <InputField placeholder="search" title="titleeee" withPrefix={true} type="number"/>
    </>
  );
}
