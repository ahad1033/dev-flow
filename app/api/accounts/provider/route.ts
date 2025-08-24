import { NextResponse } from "next/server";

import dbConnect from "@/lib/mongoose";
import handleError from "@/lib/handlers/error";

import { Account } from "@/database";
import { AccountSchema } from "@/lib/validation";
import { APIErrorResponse } from "@/types/global";
import { ValidationError, NotFoundError } from "@/lib/http-error";

export async function POST(request: Request) {
  const { providerAccountId } = await request.json();

  try {
    await dbConnect();

    const validatedData = AccountSchema.partial().safeParse({
      providerAccountId,
    });

    if (!validatedData.success)
      throw new ValidationError(validatedData.error.flatten().fieldErrors);

    const account = await Account.findOne({ providerAccountId });

    console.log("account in provider: ", account);
    if (!account) throw new NotFoundError("Account");

    return NextResponse.json(
      {
        success: true,
        data: account,
      },
      { status: 200 }
    );
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
