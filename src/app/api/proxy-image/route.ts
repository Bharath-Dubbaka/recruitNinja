import { NextResponse } from "next/server";

export async function GET(request: Request) {
   const { searchParams } = new URL(request.url);
   const imageUrl = searchParams.get("url");

   if (!imageUrl) {
      return NextResponse.json({ error: "Image URL is required" }, { status: 400 });
   }

   try {
      const response = await fetch(imageUrl);
      const contentType = response.headers.get("content-type");

      if (!response.ok || !contentType?.startsWith("image")) {
         return NextResponse.json({ error: "Failed to fetch image" }, { status: 500 });
      }

      const imageBuffer = await response.arrayBuffer();

      return new NextResponse(imageBuffer, {
         status: 200,
         headers: {
            "Content-Type": contentType,
            "Content-Length": String(imageBuffer.byteLength),
         },
      });
   } catch (error) {
      console.error("Error fetching image:", error);
      return NextResponse.json({ error: "Error fetching image" }, { status: 500 });
      
   }
}
