"use client";

import {useFavorite} from "../state/favorite";

type Props = {
  image: string;
};

const Dog: React.FC<Props> = ({image}) => {
  const [favorites, toggleFavorite] = useFavorite();

  return (
    <img
      alt={image}
      src={image}
      style={{
        width: 128,
        height: 128,
        objectFit: "cover",
        borderWidth: 1.5,
        borderColor: favorites.includes(image) ? "crimson" : "white",
        borderStyle: "inset",
      }}
      onClick={() => toggleFavorite(image)}
    />
  );
};

export default Dog;
