import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Inter as FontSans } from "next/font/google";
import { type Metadata } from "next";
import { cn } from "~/lib/utils";
import { ThemeProvider } from "~/components/theme-provider";
import { Nav } from "~/components/Nav/nav";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "X Profile",
  description:
    "X Profile is an Open Source that allows you to showcase your profile in a unique way.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <body
        className={cn("bg-background font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
