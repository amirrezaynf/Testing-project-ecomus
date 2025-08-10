import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollTopButton from "@/components/ui/button/ScrollTopButton";

export const metadata = {
  title: "E-Commerce Store",
  description: "A project Next.js e-commerce app",
  icons: {
    icon: "/logo/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <ScrollTopButton />
        <Footer />
      </body>
    </html>
  );
}
