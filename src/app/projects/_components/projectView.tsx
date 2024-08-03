import ProjectCard from "@/components/projectCard";
import { Project } from "@/service/project";
import Link from "next/link";
import { isArray } from "util";

export default function ProjectView({ projects, numberOfprojects }: { projects: Project[], numberOfprojects: any }) {
    //console.log(projects)
    return (
        <div className="container max-auto flex flex-col pt-[40px] pr-[100px] pl-[100px] gap-8">
            <div className="flex flex-row gap-2 items-center justify-between">
                <div className="flex flex-row gap-2 items-center justify-start">
                    <svg width="16" height="16" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.505 22H5.495C5.225 22 4.995 21.78 4.995 21.5V3.5C4.995 3.23 5.215 3 5.495 3H18.505C18.775 3 19.005 3.22 19.005 3.5V21.51C18.995 21.78 18.775 22 18.505 22Z" stroke="#0F0F0F" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.995 19H15.995" stroke="#0F0F0F" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.995 10H14.995" stroke="#0F0F0F" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.995 12H14.995" stroke="#0F0F0F" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.995 8H15.995" stroke="#0F0F0F" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.995 6H15.995" stroke="#0F0F0F" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.995 14H13.425" stroke="#0F0F0F" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p>قائمة إدارة المشاريع الحالية :</p>
                </div>
                <p className="text-[#1EA5AE]">عدد العناصر ({numberOfprojects})</p>
            </div>

            <div className="flex lg:flex-row flex-col md:flex-col justify-between gap-8">
                {isArray(projects) ? (
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                        {projects.map((project: Project, i: any) => (
                            <ProjectCard project={project} key={i} />
                        ))}
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                    </div>
                )}

                <div className="w-[200px] lg:w-[425px] md:w-[350px] h-[410px] bg-[#E3D6F5] flex flex-col items-center justify-center">
                    <Link href={"/projects/create"}>
                        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12H20M12 4V20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                    <p>مشروع جديد</p>
                </div>

            </div>
        </div>

    );
}