"use client";
import { useState } from "react";
import Footer from "../footer";
import Nav from "../nav/page";

export default function About() {

  const [count,setCount]=useState(0);

  return (
    <div className="container mx-auto px-2">
      <header>
        <h1 className="text-4xl font-bold">About Us</h1>
      </header>
      <Nav></Nav>
      <main>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          ipsa iure aut dolore, quia laborum, nulla eum nobis voluptates est
          sint consequatur, repellendus debitis eveniet officia adipisci quis
          libero. Quod.
        </p>
        <button className="border px-6 py-2 me-3 rounded" onClick={()=>setCount(count+1)}>Add</button>
        <span>{count}</span>
      </main>
      <Footer></Footer>
    </div>
  );
}
