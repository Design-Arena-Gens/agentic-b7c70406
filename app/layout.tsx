import type { Metadata } from "next";
import { Inter, Tajawal } from "next/font/google";
import "../styles/globals.css";
import { cn } from "../lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  variable: "--font-tajawal",
  display: "swap",
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  title: "AMZ-Resurrect AI | Amazon KSA/UAE Reinstatement Plans",
  description: "Generate Amazon Saudi & UAE compliant Plans of Action with AMZ-Resurrect AI."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(inter.variable, tajawal.variable)}>
      <body className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-100">
        {children}
      </body>
    </html>
  );
}
