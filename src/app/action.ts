"use server";

import { cookies } from "next/headers";

export async function deleteTokenCookie() {
  console.log("deleting cookie");
  cookies().delete("token");
}
