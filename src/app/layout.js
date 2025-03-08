import "./globals.css";

export const metadata = {
  title: "Rakibul Islam Portfolio",
  description: "Rakibul Islam Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
