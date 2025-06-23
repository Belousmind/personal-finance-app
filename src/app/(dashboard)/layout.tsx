import SideBar from "@/components/sidebar";
import Providers from "@/providers";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <SideBar />
      <>{children}</>
    </Providers>
  );
}
