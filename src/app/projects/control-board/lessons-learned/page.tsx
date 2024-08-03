import NavPage from "@/components/navpage";
import { NavBar } from "@/ui";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LessonsLearnedForm from "./_components/lessonsLearnedForm";

export default function LessonsLearned(){
    const token = cookies().get("token")?.value;
    if (!token) {
      redirect("/");
    }
    return(
        <div id="root">
            <NavBar token={token} />
            <NavPage name="الدروس المستفادة" nameOfsubpage={["إدارة المشاريع", "لوحة التحكم"]} />
            <LessonsLearnedForm />
        </div>
    )
}