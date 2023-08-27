import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // const res = await fetch("http://localhost:61977/api/client/obter-todos");
  const res = await fetch(
    `${process.env.NEXT_APP_URL_API_NAE}/api/client/obter-todos`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Falha ao buscar dados");
  }

  const data = await res.json();
  return NextResponse.json({ data });
}
