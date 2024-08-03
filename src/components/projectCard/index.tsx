import { Project } from "@/service/project";
import Link from "next/link";

function getState(state: string) {
    return state === "pending" ? "قيد العمل" : state === "completed" ? "مكتمل" : state === "cancelled" ? "ملغي" : "قيد المراجعة";
}

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="container max-auto flex flex-col gap-[32px] bg-[#F9FAFB] justify-between  items-center rounded-[12px]">
            <div className="flex flex-col items-start justify-between gap-4 p-[40px] pl-[30px] pr-[30px]">
                <p className="text-[20px] "  >{project.project_name}</p>
                <div></div>
                <div className="flex flex-row items-center justify-between w-[250px]">
                    <p className="text-[12px]">مدير المشروع :</p>
                    <h2  >{project.project_manager}</h2>
                </div>
                <div className="flex flex-row items-center justify-between w-[250px]">
                    <p className="text-[12px]">الجهة المالكة :</p>
                    <h2  >{project.project_owner}</h2>
                </div>
                <div className="flex flex-row items-center justify-between  w-[250px]">
                    <p className="text-[12px]">ما تم صرفه على المشروع :</p>
                    <h2  >SAR {project.amount_expensed}</h2>
                </div>
                <div className="flex flex-row items-center justify-between w-[250px]">
                    <p className="text-[12px]">المبالغ المتبقية :</p>
                    <h2  >SAR {project.amount_remaining}</h2>
                </div>
                <div className="flex flex-row items-center justify-between w-[250px]">
                    <p className="text-[12px]">المرحلة :</p>
                    <h2  >{project.current_stage}</h2>
                </div>
                <div className="flex flex-row items-center justify-between w-[250px]">
                    <p className="text-[12px]">الحالة :</p>
                    <h2  >{getState(project.status)}</h2>
                </div>
                <div className="flex flex-row items-center justify-between w-[250px]">
                    <p className="text-[12px]">التقدم :</p>
                    <h2  >%{project.progress}</h2>
                </div>
            </div>
            <Link href={`/projects/control-board/${project.id}`}>
            <button className=" w-[240px] bg-[#532494] rounded-[12px] h-[64px] text-[#ffffff]">عرض المشروع</button>
            </Link>
            <div className="flex flex-row items-center justify-center pb-[16px] ">
            </div>

        </div>
    );
}