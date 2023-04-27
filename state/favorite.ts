import {proxy, subscribe, useSnapshot} from "valtio";

interface State {
  favorites: string[];
  toggleFavorite: (image: string) => void;
}

const state = proxy<State>({
  favorites: [], // JSON.parse(window?.localStorage?.getItem?.("favorites") || "[]"),
  toggleFavorite: (image: string) => {
    const index = state.favorites.indexOf(image);

    index > -1 ? state.favorites.splice(index, 1) : state.favorites.push(image);
  },
});

subscribe(state, () => localStorage.setItem("favorites", JSON.stringify(state.favorites)));

export const useFavorites = () => useSnapshot(state);
