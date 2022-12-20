"use client";

import {Provider as FavoriteProvider, useFavorite} from "../state/favorite"

import Dog from "../components/dog"

import "./globals.css";
import Link from "next/link";

function RootLayout({children}: {children: React.ReactNode}) {
  const [favorites] = useFavorite()

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <h1>Breeds</h1>
        <nav style={{display: 'flex', gap: 12}}>
          <Link href="/hound">Hound</Link>
          <Link href="/pug">Pug</Link>
        </nav>
        {children}
        <hr />
        <h2>Favorites</h2>
        {favorites.map((favorite) => (
          <Dog key={favorite} image={favorite}></Dog>
        ))}
      </body>
    </html>
  );
}

export default function RootLayoutContainer(props: {children: React.ReactNode}) {
  return (
    <FavoriteProvider>
      <RootLayout {...props} />
    </FavoriteProvider>
  )
}
