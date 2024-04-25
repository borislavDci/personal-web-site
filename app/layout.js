import { Inter, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Borislav Atanasov | Personal Portfolio",
  description: "Borislav Atanasov's personal portfolio",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-black`}>
        <Analytics />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
