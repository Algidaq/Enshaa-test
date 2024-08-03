import NavPage from "@/components/navpage";

import { apiListQutations } from "@/service";
import { NavBar } from "@/ui";
import { cookies } from "next/headers";
import QutationsContainar from "./_components/QuotationContainer";
export const dynamic = "force-dynamic";
export default async function ShowQutations() {
  const token = cookies().get("token")?.value;

  const data = await apiListQutations(token);

  return (
    <div id="root">
      <NavBar token={token} />
      <NavPage name="طلبات التسعير"  />
      <QutationsContainar Qutations={data === undefined ? null : data.rows} />
    </div>
  );
}
