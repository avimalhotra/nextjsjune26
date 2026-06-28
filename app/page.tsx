import Footer from "./footer";
import Nav from "./nav/page";
import Apiage from "./api";

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

        <h2 className="text-3xl font-bold">API response</h2>
       
          <Apiage></Apiage>
        
      </main>
      <Footer></Footer>
    </div>
  );
}
