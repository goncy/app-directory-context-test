"use client";

import {Provider as FavoriteProvider, useFavorite} from "~/state/favorite";
import Dog from "~/components/dog";

function FavoritesLayout({children}: {children: React.ReactNode}) {
  const [favorites] = useFavorite();

  return (
    <>
      {children}
      <hr />
      <h2>Favorites</h2>
      {favorites.map((favorite) => (
        <Dog key={favorite} image={favorite} />
      ))}
    </>
  );
}

export default function FavoritesLayoutContainer(props: {children: React.ReactNode}) {
  return (
    <FavoriteProvider>
      <FavoritesLayout {...props} />
    </FavoriteProvider>
  );
}
