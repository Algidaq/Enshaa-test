import NavPage from "@/components/navpage";
import { NavBar } from "@/ui";
import { cookies } from "next/headers";
import ProjectForm from "./_components/projectForm"
import { redirect } from "next/navigation";

export default function CreateProject() {
    const token = cookies().get("token")?.value;
    if (!token) {
        redirect("/");
    }
    return (
        <div id="root">
            <NavBar token={token} />
            <NavPage name="إنشاء مشروع جديد" nameOfsubpage={["إدارة المشاريع"]} />
            <ProjectForm />
        </div>
    )
}