// import styles from "./styles.module.scss";
import SideBar from "@/components/sidebar";
import './global.scss'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <SideBar />
        {children}
      </body>
    </html>
  );
}
