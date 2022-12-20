import Link from "next/link";

import "./globals.css";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head />
      <body>
        <h1>Breeds</h1>
        <nav style={{display: "flex", gap: 12}}>
          <Link href="/hound">Hound</Link>
          <Link href="/pug">Pug</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
