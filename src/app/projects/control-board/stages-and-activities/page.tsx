import NavPage from "@/components/navpage";
import { NavBar } from "@/ui";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import StagesView from "./_components/stagesView";

export default function StagesAndActivities(){
    const token = cookies().get("token")?.value;
    if (!token) {
      redirect("/");
    }
    return(
        <div id="root">
            <NavBar token={token} />
            <NavPage name="المراحل والانشطة" nameOfsubpage={["إدارة المشاريع", "لوحة التحكم"]} />
            <StagesView />
        </div>
    )
}