import NavPage from "@/components/navpage";

import { NavBar } from "@/ui";
import { cookies } from "next/headers";
import Boards from "./boards";
import { redirect } from "next/navigation";
import { apiGetProjectById } from "@/service";
import { Project } from "@/service/project";
export default async function ShowBoards(params: { params: { id: string }; }) {
    const _id = Number(params.params.id);
    const token = cookies().get("token")?.value;
    if (!token) {
        redirect("/");
      }
      const data:Project =  await apiGetProjectById(_id,token);
      console.log(data)
      if(data === null){
        redirect("/");
      }
    return (
        <div id="root">
            <NavBar token={token} />
            <NavPage name="لوحة التحكم" nameOfsubpage={["إداراة المشاريع" ]}/>
            <Boards project={data} />
        </div>
    );
}