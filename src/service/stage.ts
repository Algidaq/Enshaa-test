import { substage } from "./substage"
export interface stage{
    status: string,
    id: number,
    name: string,
    duration: number,
    start_date: string,
    createdAt: string,
    updatedAt: string,
    projectId: number,
    substage : substage[]
}