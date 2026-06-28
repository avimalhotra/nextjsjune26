import {NextResponse} from "next/server";

export async function GET(request:string){
     
     const bikes=[
          {name:"pulsar",type:"sports",price:150000},
          {name:"apache",type:"sports",price:120000},
          {name:"fazer",type:"sports",price:130000},
          {name:"hornet",type:"sports",price:140000},
          {name:"royal enfield",type:"cruiser",price:200000},
          {name:"himalayan",type:"cruiser",price:250000},
          {name:"duke",type:"sports",price:180000},
          {name:"ninja",type:"sports",price:300000},
          {name:"hayabusa",type:"sports",price:1200000}
     ];

     return NextResponse.json(bikes);
}