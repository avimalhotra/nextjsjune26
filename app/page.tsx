import Footer from "./footer";
import Nav from "./nav/page";

export default function Home() {
  return (
    <div className="container mx-auto px-2">
      <header>
        <h1 className="text-4xl font-bold">Hello Next JS</h1>
      </header>
       <Nav></Nav>
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
