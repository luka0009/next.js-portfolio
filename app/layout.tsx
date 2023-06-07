import Navbar from "./components/Navbar";
import "./globals.css";
import { DM_Sans } from "next/font/google";

const inter = DM_Sans({ subsets: ["latin"], weight: '400' });
export const metadata = {
  title: "Portfolio Website",
  description:
    "Portfolio website: Luka Barbakadze - Web developer, Front-End developer, Full-Stack Develoepr",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
