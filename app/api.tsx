"use client";
import { useEffect, useState } from "react"


export default function Apiage(){

     const [data,setData]=useState([]);
     const [data2,setData2]=useState([]);

     useEffect(()=>{
          async function apiData(){
               const res=await fetch("http://localhost:3000/api/cars");
               const data=await res.json();
               setData(data);
          }
          apiData();

          async function postAPi() {
               const res=await fetch("http://localhost:3000/api/upload",{method:"POST"});
               // const res=await fetch("http://localhost:3000/api/upload",{method:"POST",body:JSON.stringify({name:"Aaa"})});
               const data=await res.json();
               
               setData2(data);
          }

          postAPi();

     },[]);


     return (
          <>
               <table className="my-3 table-auto border-collapse border w-full">
                    <thead className="table-header-group">
                         <tr>
                              <th className="border p-2">S No</th>
                              <th className="border p-2">Name</th>
                              <th className="border p-2">Type</th>
                              <th className="border p-2">Price</th>
                         </tr>
                    </thead>
                    <tbody>
                         {
                              data.map((elem,ind)=>(
                                   <tr key={elem.name}>
                                        <td className="border p-2">{++ind}</td>
                                        <td className="border p-2">{elem.name}</td>
                                        <td className="border p-2">{elem.type}</td>
                                        <td className="border p-2">{elem.price}</td></tr>
                              ))
                         }
                         
                    </tbody>
               </table>
               <p>Message : {data2.message}, Status : {data2.status}  </p>
          </>
     )
}