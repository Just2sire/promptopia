import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/lib/theme_registry";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Stack } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prompotpia",
  description: "An app that provides good ai prompt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ThemeRegistry>
          <Stack minHeight='100vh' justifyContent='space-between' width='100%'>
            <Header />
            {children}
            <Footer />
          </Stack>
        </ThemeRegistry>
      </body>
    </html>
  );
}
