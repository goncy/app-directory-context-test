import {createContext, useContext, useState} from "react";

interface Context {
  state: {
    favorites: string[];
  };
  actions: {
    toggleFavorite: (favorite: string) => void;
  };
}

interface Props {
  children: React.ReactNode;
  favorites?: string[];
}

const FavoriteContext = createContext({} as Context);

function FavoriteProvider({children, favorites: initial = []}: Props): JSX.Element {
  const [favorites, setFavorites] = useState<string[]>(initial);

  function toggleFavorite(favorite: string) {
    setFavorites((favorites) =>
      favorites.includes(favorite)
        ? favorites.filter((item) => item !== favorite)
        : favorites.concat(favorite),
    );
  }

  const state = {
    favorites,
  };
  const actions = {
    toggleFavorite,
  };

  return <FavoriteContext.Provider value={{state, actions}}>{children}</FavoriteContext.Provider>;
}

function useFavorite(): [Context["state"]["favorites"], Context["actions"]["toggleFavorite"]] {
  const {
    state: {favorites},
    actions: {toggleFavorite},
  } = useContext(FavoriteContext);

  return [favorites, toggleFavorite];
}

export {FavoriteContext as default, FavoriteProvider as Provider, useFavorite};
