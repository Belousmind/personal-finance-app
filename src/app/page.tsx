import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export default function Page() {
  return (
    <Link href={ROUTES.HOME}>
      <span>Check finance</span>
    </Link>
  );
}
