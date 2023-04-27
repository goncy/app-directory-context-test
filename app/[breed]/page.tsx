import FavoritableImage from "../../components/FavoritableImage";

interface Props {
  params: {
    breed: string;
  };
}

export async function generateStaticParams() {
  return [{breed: "african"}];
}

const BreedPage = async ({params: {breed}}: Props) => {
  const {message: images} = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/10`).then(
    (res) => res.json() as Promise<{message: string[]}>,
  );

  return (
    <section
      className="grid gap-4"
      style={{gridTemplateColumns: "repeat(auto-fill, minmax(256px, 1fr))"}}
    >
      {images.map((image) => (
        <FavoritableImage key={image} src={image} />
      ))}
    </section>
  );
};

export default BreedPage;
