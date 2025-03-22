import "./globals.css";
import Navbar from "@/component/shared/Navbar";
import Footer from "@/component/shared/Footer";

export const metadata = {
  title: "Rakibul Islam Portfolio",
  description: "Rakibul Islam Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className="bg-[#000000] ">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
