import { NextResponse } from "next/server";
import { getMenuClover } from "@/lib/getMenuClover";

export async function GET() {
  try {
    const data = await getMenuClover();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in /api/menu:", error);
    return NextResponse.json(
      { error: "Failed to fetch menu from Clover" },
      { status: 500 }
    );
  }
}
