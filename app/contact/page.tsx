"use client"
import Footer from "../footer";
import Nav from "../nav/page";
import { useRouter } from "next/navigation";


export default function About() {

  const router=useRouter();

  function goToTerms(){
      router.push("/terms");
  }

  return (
    <div className="container mx-auto px-2">
      <header>
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </header>
      <Nav></Nav>
      <main>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          ipsa iure aut dolore, quia laborum, nulla eum nobis voluptates est
          sint consequatur, repellendus debitis eveniet officia adipisci quis
          libero. Quod.
        </p>
        
        <button onClick={goToTerms} className="border">Terms and Conditions</button>
      </main>
      <Footer></Footer>
    </div>
  );
}
