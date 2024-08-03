import NavPage from "@/components/navpage";

import { NavBar } from "@/ui";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import TimeLineSheet from "./_components/timeSheet";
export const dynamic = "force-dynamic";
export default async function TimeSheetBoard() {
    const token = cookies().get("token")?.value;
    if (!token) {
      redirect("/");
    }

    return (
        <div id="root">
            <NavBar token={token} />
            <NavPage name="المخطط الزمني" nameOfsubpage={["إدارة المشاريع", "لوحة التحكم"]} />
            <TimeLineSheet />
        </div>
    );
}