import SideBar from "@/components/sidebar";
import "./global.scss";
import Providers from "@/providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body>
          <SideBar />
          {children}
        </body>
      </Providers>
    </html>
  );
}
