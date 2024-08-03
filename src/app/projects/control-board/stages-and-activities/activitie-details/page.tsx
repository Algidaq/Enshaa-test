import NavPage from "@/components/navpage";
import { NavBar } from "@/ui";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ActivitesView from "./_components/activitsView";

export default function ActivitieDetails(){
    const token = cookies().get("token")?.value;
    if (!token) {
      redirect("/");
    }
    return(
        <div id="root">
            <NavBar token={token} />
            <NavPage name="عرض تفاصيل النشاط" nameOfsubpage={["إدارة المشاريع", "لوحة التحكم","المراحل والانشطة"]} />
        <ActivitesView />
        </div>
    )
}