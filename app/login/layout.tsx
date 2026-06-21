import Link from "next/link";
import Footer from "../footer";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto px-2">
      <header>
        <h1 className="text-4xl font-bold">Login</h1>
      </header>
      <main>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          ipsa iure aut dolore, quia laborum, nulla eum nobis voluptates est
          sint consequatur, repellendus debitis eveniet officia adipisci quis
          libero. Quod.
        </p>

        {children}
      </main>
      <Footer></Footer>
    </div>
  );
}
