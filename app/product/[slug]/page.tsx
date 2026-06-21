import { notFound } from "next/navigation";
import Footer from "../../footer";

export default async function Home({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  return (
    <div className="container mx-auto px-2">
      <header>
        <h1 className="text-4xl font-bold"> {slug}</h1>
      </header>
      <main>
        <h2 className="text-3xl font-bold">{slug} Details</h2>
        <p className="my-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ratione
          quibusdam labore amet, eaque unde quas nihil, nisi voluptates mollitia
          inventore. Maxime quasi obcaecati laborum neque laudantium. Tenetur,
          aut architecto!
        </p>
        <p className="my-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ratione
          quibusdam labore amet, eaque unde quas nihil, nisi voluptates mollitia
          inventore. Maxime quasi obcaecati laborum neque laudantium. Tenetur,
          aut architecto!
        </p>
      </main>
      <Footer></Footer>
    </div>
  );
}
