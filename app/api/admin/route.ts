import { auth } from "@/auth";
import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await auth();
  const role = user?.user.role;
  if (role === UserRole.ADMIN) {
    return new NextResponse(null, {
      status: 200,
    });
  }
  return new NextResponse(null, {
    status: 403,
  });
}
