import User from "./user"

export interface Profile {
    id: number
    phone_number: string
    full_name: string
    email: string
    type: string
    FCM_token: string
    createdAt: string
    updatedAt: string
    user:User
    company: any
}