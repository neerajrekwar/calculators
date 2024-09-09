import Header from "./components/Header";
import "./globals.css";
import { Alata, Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});
const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={alata.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
