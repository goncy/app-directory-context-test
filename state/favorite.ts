import create from "zustand";

interface State {
  favorites: string[];
  toggleFavorite: (image: string) => void;
}

export const useFavorites = create<State>((set) => ({
  favorites: JSON.parse(window?.localStorage?.getItem?.("favorites") || "[]"),
  toggleFavorite: (image: string) =>
    set(({favorites}) => {
      const draft = favorites.includes(image)
        ? favorites.filter((favorite) => favorite !== image)
        : favorites.concat(image);

      window.localStorage.setItem("favorites", JSON.stringify(draft));

      return {
        favorites: draft,
      };
    }),
}));
