import NavPage from "@/components/navpage";

import { NavBar } from "@/ui";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ProjectCardForm from "./_components/projectCardForm";
export const dynamic = "force-dynamic";
export default async function ProjectCardBoard() {
    const token = cookies().get("token")?.value;
    if (!token) {
      redirect("/");
    }

    return (
        <div id="root">
            <NavBar token={token} />
            <NavPage name="بطاقة المشروع" nameOfsubpage={["إدارة المشاريع", "لوحة التحكم"]} />
            <ProjectCardForm />
        </div>
    );
}