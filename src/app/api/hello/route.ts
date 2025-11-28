import { NextResponse } from "next/server";


export async function GET(){
    return NextResponse.json({message : "Halo dari surabaya"})
}


export async function POST(req : Request){
    const data = await req.json()
    const { name } = await data;

    return NextResponse.json({
        message : `halo ${name}, ini di kirim dari API`
    })
}