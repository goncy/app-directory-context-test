'use client'

import { useFavorite } from "../state/favorite"

type Props = {
  image: string
}

const Breeds:React.FC<Props> = ({image}) => {
  const [favorites, toggleFavorite] = useFavorite()

  return (
    <img style={{width: 128, height: 128, objectFit: 'cover', border: favorites.includes(image) ? '3px solid red' : 'none'}} onClick={() => toggleFavorite(image)} alt={image} src={image} />
  );
}

export default Breeds;
