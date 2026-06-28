import Footer from "../footer";
import Nav from "../nav/page";

export default function API(){
     return (
          <div className="container mx-auto px-2">
                <header>
                  <h1 className="text-4xl font-bold">API Page</h1>
                </header>
                 <Nav></Nav>
                <main>
                    <h2>Available APIs</h2>
                    <ol>
                         <li><a className="text-blue-400" href="http://localhost:3000/api/cars">Cars</a></li>
                         <li><a className="text-blue-400" href="http://localhost:3000/api/bikes">Bikes</a></li>
                    </ol>
                  
                </main>
                <Footer></Footer>
              </div>
     )
}