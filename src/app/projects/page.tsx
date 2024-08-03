import NavPage from "@/components/navpage";

import { apiGetProjects, apiListQutations } from "@/service";
import { NavBar } from "@/ui";
import { cookies } from "next/headers";
import ProjectsView from "./_components/projectView"
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";
export default async function ShowProjects() {
  const token = cookies().get("token")?.value;
  if (!token) {
    redirect("/");
  }

  const data = await apiGetProjects(token);


  return (
    <div id="root">
      <NavBar token={token} />
      <NavPage name=" إدارة المشاريع" />
      <ProjectsView projects={data} numberOfprojects={data.length} />
    </div>
  );
}
