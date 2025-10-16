import { NextResponse } from "next/server";
import { fetchData } from "@/lib/fetchData";

export async function GET() {
  const data = await fetchData();
  return NextResponse.json(data);
}
