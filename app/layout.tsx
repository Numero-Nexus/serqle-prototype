import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Serqle",
  description: "Social discovery, reimagined.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Serqle",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: "/icon-192.png",
    apple: "/icon-192.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0d3d2c",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Serqle" />
        <meta name="theme-color" content="#0d3d2c" />
      </head>
      <body
        style={{
          margin:          0,
          padding:         0,
          backgroundColor: "#061a10",
          minHeight:       "100dvh",
          display:         "flex",
          justifyContent:  "center",
        }}
      >
        <div
          style={{
            width:           "100%",
            maxWidth:        430,
            minHeight:       "100dvh",
            position:        "relative",
            backgroundColor: "#0d3d2c",
            boxShadow:       "0 0 80px rgba(0,0,0,0.6)",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}