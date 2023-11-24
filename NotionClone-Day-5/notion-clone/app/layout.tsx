import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NoteWave",
  description: "Help you to keep Structure in your Life",

  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "./main.svg",
        href: "./main.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "./main.svg",
        href: "./main.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="notewave-theme-2"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

// hey
