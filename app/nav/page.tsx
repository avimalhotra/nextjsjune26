import { notFound } from "next/navigation";
import Link from "next/link";

export default function Nav(){
     return (
          <nav className="border p-3 my-3">
               <ul className="flex gap-6">
                    <li><Link className="text-blue-300" href="/">Home</Link></li>
                    <li><Link className="text-blue-300" href="/about">About</Link></li>
                    <li><Link className="text-blue-300" href="/product">Product</Link></li>
                    <li><Link className="text-blue-300" href="/contact">Contact</Link></li>
                    </ul>
          </nav>
     )
}