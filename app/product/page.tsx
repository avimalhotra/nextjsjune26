import Link from "next/link";
import Footer from "../footer";

export default function Home() {
  return (
    <div className="container mx-auto px-2">
      <header>
        <h1 className="text-4xl font-bold">Products Page</h1>
      </header>
      <main>
        <h2 className="text-3xl font-bold">Available Products</h2>
        <ul>
          <li>
            <Link href="/product/apple">Apple</Link>
          </li>
          <li>
            <Link href="/product/samsung">Samsung</Link>
          </li>
          <li>
            <Link href="/product/sony">Sony</Link>
          </li>
        </ul>
      </main>
      <Footer></Footer>
    </div>
  );
}
