import SideBar from "@/components/sidebar";
import "./global.scss";
import Providers from "@/providers";
import { isDesktop } from "@/utils";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const deviceType = await isDesktop();

  return (
    <html lang="en">
      <Providers>
        <body>
          <SideBar deviceType={deviceType} />
          {children}
        </body>
      </Providers>
    </html>
  );
}
