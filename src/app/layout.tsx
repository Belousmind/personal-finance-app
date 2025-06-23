import { Public_Sans } from "next/font/google";
import { Metadata } from "next";
import "./global.scss";
import { basePath } from "@/constants";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Finance",
    template: "%s | Finance",
  },
  description:
    "Finanoe helps you manage your personal finances with ease. Track transactions, create budgets, monitor savings pots, and stay on top of recurring bills — all in one intuitive dashboard.",
  icons: {
    icon: `${basePath}/favicon.ico`,
    apple: `${basePath}/apple-touch-icon.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={publicSans.className}>{children}</body>
    </html>
  );
}
