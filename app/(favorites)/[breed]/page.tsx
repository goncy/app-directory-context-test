import Dog from "~/components/dog";

interface Props {
  params: {
    breed: string
  }
}

const BreedPage = async ({params}: Props) => {
  const {message: data} = await fetch(`https://dog.ceo/api/breed/${params.breed}/images/random/3`).then(res => res.json())

  if (!Array.isArray(data)) {
    return (
      <p>Not found</p>
    )
  }

  return (
    <div>
      {data.map(dog => <Dog key={dog} image={dog} />)}
    </div>
  );
}

export default BreedPage;
