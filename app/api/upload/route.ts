import { NextResponse } from "next/server";

export async function POST(request){
     
     try{
          const body=await request.json();
          return NextResponse.json({"message":"Thanks",status:"success"},{status:200});
     }
     catch(err){
          return NextResponse.json({"message":"Error Found",status:"error"},{status:400})
     }

}