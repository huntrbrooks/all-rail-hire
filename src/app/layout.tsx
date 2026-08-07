import type { Metadata } from "next";
import { Kumbh_Sans, Poppins } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { contact } from "@/lib/contact";
import "./globals.css";

const kumbh = Kumbh_Sans({
  variable: "--font-kumbh",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Rail Industry Specialists | All Rail Hire | Australia",
    template: "%s | All Rail Hire",
  },
  description:
    "All Rail Hire offers efficient quality rail services in Australia prioritizing safety. Specializing in rail welding, re-railing, and more. Contact for professional services.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Rail Industry Specialists | All Rail Hire | Australia",
    description:
      "All Rail Hire offers efficient quality rail services in Australia prioritizing safety.",
    type: "website",
  },
  other: {
    "contact:phone": contact.phoneDisplay,
    "contact:email": contact.email,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kumbh.variable} ${poppins.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-white text-brand-dark antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
