import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextGen - Inovação que Transforma",
  description: "Plataforma completa para impulsionar seus projetos com tecnologia de ponta. Simples, poderosa e projetada para crescer com você.",
  keywords: ["NextGen", "Inovação", "Tecnologia", "Plataforma", "Soluções", "Digital", "Crescimento"],
  authors: [{ name: "NextGen Team" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "NextGen - Inovação que Transforma",
    description: "Plataforma completa para impulsionar seus projetos com tecnologia de ponta.",
    url: "https://nextgen.com",
    siteName: "NextGen",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextGen - Inovação que Transforma",
    description: "Plataforma completa para impulsionar seus projetos com tecnologia de ponta.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
