import styles from "./styles.module.scss";
import SideBar from "@/components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <SideBar />
        {children}
      </body>
    </html>
  );
}
