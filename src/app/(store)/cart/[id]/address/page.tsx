import React from "react";
import { CartService, ProfileService } from "@/services";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AddressForm } from "./_components/AddressForm";

export default async function CartAddressPage(params: {
  params: { id: number };
}) {
  const token = cookies().get("token")?.value;
  const profilePromise = ProfileService.getUserProfile(token);
  const cartPromise = CartService.getCart(token);
  const [profile, cart] = await Promise.allSettled([
    profilePromise,
    cartPromise,
  ]);
  if (profile.status === "rejected" || cart.status === "rejected") {
    return redirect("/");
  }

  if (profile.value.error !== undefined) {
    return redirect("/");
  }
  if (cart.value.error !== undefined) {
    return redirect("/");
  }

  return (
    <AddressForm
      cartId={cart.value.data.id}
      phoneNumber={profile.value.data.phone_number}
    />
  );
}
