import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PreLoader from "./Components/Animation/Preloader";
import Script from "next/script"; // ✅ for JSON-LD

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "Hari Joshi | Software Developer Portfolio",
  description:
    "Portfolio of Hari Joshi - Software Developer skilled in React, Next.js, Node.js, and full-stack development.",
  keywords: [
    "Hari Joshi",
    "portfolio",
    "software developer",
    "web developer",
    "React",
    "Next.js",
    "Node.js",
  ],
  authors: [{ name: "Hari Joshi" }],
  openGraph: {
    title: "Hari Joshi | Software Developer",
    description:
      "Explore the portfolio of Hari Joshi, a software developer skilled in React, Next.js, and full-stack development.",
    url: "https://your-portfolio.vercel.app",
    siteName: "Hari Joshi Portfolio",
    images: [
      {
        url: "/images/portfolio-preview.png",
        width: 800,
        height: 600,
        alt: "Portfolio Preview of Hari Joshi",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hari Joshi | Software Developer",
    description:
      "Explore the portfolio of Hari Joshi, a software developer skilled in React, Next.js, and full-stack development.",
    images: ["/images/portfolio-preview.png"],
    creator: "@yourtwitterhandle",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hari Joshi",
    url: "https://your-portfolio.vercel.app",
    sameAs: [
      "https://github.com/yourusername",
      "https://linkedin.com/in/yourusername",
      "https://twitter.com/yourusername",
    ],
    jobTitle: "Software Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance / Self Projects",
    },
  };

  return (
    <html lang="en">
      <head>
        {/* ✅ Structured Data */}
        <Script
          id="json-ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PreLoader />
        {children}

        
        <Script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
/>
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
      </body>

      
    </html>
  );
}

