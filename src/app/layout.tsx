import type { Metadata } from "next";
import { baseFont } from "@/config/fonsts";
import type { LayoutProps } from "@/interfaces/interfaces";

import "../components/styles/globals.css";

export const metadata: Metadata = {
  title: "Pizzeton Dashboard",
  description: "Panel Administrativo para la pizzeria el Pizzeton D'Gutí.",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="es">
      <body className={`${ baseFont.className }`}>
        { children }
      </body>
    </html>
  );
}