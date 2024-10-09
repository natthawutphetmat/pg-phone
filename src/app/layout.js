import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";
import "./styles/mobile.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        <title>Shopสั่งซื้อโทรศัพท์PGเว็บตรงPG-V9</title>
        <meta
          name="description"
          content="จำหน่ายโทรศัพท์มือถือทางออนไลน์ที่บริการดีที่สุด โทรศัพท์มือถือยี่ห้อ PG-V9"
        />
        <meta name="author" content="Shopสั่งซื้อ PG-V9" />
        <meta
          name="keywords"
          content="โทรศัพท์ PG, PG V9, โทรศัพท์PG, PGเว็บตรง100%, PGเว็บตรง, โทรศัพท์มือถือPGเว็บตรง"
        />
        <meta property="og:title" content="Shopสั่งซื้อโทรศัพท์ PG-V9" />
        <meta
          property="og:description"
          content="จำหน่ายโทรศัพท์มือถือทางออนไลน์ที่บริการดีที่สุด โทรศัพท์มือถือยี่ห้อ PG-V9"
        />
        <meta
          property="og:image"
          content="https://shop-phone-pg.ca7mobile.com/img/1.webp"
        />
        <meta
          property="og:url"
          content="https://shop-phone-pg.ca7mobile.com"
        />
        <meta property="og:type" content="website" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16734378066"
        />
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16734378066');`}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
      <Script
        async
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      />
    </html>
  );
}
