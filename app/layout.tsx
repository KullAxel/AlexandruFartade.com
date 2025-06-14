import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import { Analytics } from "@vercel/analytics/react"
import ogImage from "./opengraph-image.png";
import { StagewiseToolbar } from "@stagewise/toolbar-next";

export const metadata: Metadata = {
  title: "Alexandru Fartade",
  description: "design engineering, and comms",
  metadataBase: new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`),
  openGraph: {
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height
      },
    ],
  },
};

const stagewiseConfig = {
  plugins: []
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} 68e50d59-88e6-47d8-be3b-7aec8eb9f8af b5b5cc2f-bcfa-4b34-b5eb-419b51477b34 relative font-sans bg-whiteout selection:text-white 24576e23-44f4-4174-a049-9a0ebd609e65 selection:bg-pink-400 dark:bg-zinc-900 text-blackout dark:text-zinc-100`}
      >
        <ThemeProvider attribute="class">
          <Nav/>
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
        {process.env.NODE_ENV === 'development' && <StagewiseToolbar config={stagewiseConfig} />}
      </body>
    </html>
  );
}

export const revalidate = 300;
