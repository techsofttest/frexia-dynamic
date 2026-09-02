import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/global/Footer";
import Navigation from "@/components/global/Navigation";
import ContactIsland from "@/components/global/ContactIsland";
import LoadingScreen from "@/components/global/LoadingScreen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frexia Logistics LLC | Global Logistics Partner",
  description: "Your trusted global logistics partner delivering reliable, efficient, and cost-effective transportation solutions worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LoadingScreen />
        <Navigation />
        {children}
        <ContactIsland />
        <Footer />
      </body>
    </html>
  );
}