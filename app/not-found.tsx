import Footer from "./footer";

export default function Home() {
  return (
    <div className="container mx-auto px-2">
      <header>
        <h1 className="text-4xl font-bold">404, Page Not Found</h1>
      </header>
      <main>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          ipsa iure aut dolore, quia laborum, nulla eum nobis voluptates est
          sint consequatur, repellendus debitis eveniet officia adipisci quis
          libero. Quod.
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          ipsa iure aut dolore, quia laborum, nulla eum nobis voluptates est
          sint consequatur, repellendus debitis eveniet officia adipisci quis
          libero. Quod.
        </p>
      </main>
      <Footer></Footer>
    </div>
  );
}
