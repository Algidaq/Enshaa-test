import { PromiseResult } from "@/helpers";
import { HttpService } from "./HttpService";

interface ProfileRes {
  id: number;
  phone_number: string;
  full_name: string;
  email: string;
  type: string;
  FCM_token: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
  user: User;
  company: null;
}

interface User {
  id: number;
  gender: null;
  birth_date: null;
  createdAt: string;
  updatedAt: string;
  accountId: number;
}
export const ProfileService = {
  async getUserProfile(token?: string): Promise<PromiseResult<ProfileRes>> {
    try {
      const res = await HttpService.get("/api/profile", {
        headers: { Authorization: token },
      });
      const data = res.data;
      return { data: data, error: undefined };
    } catch (e: any) {
      return { data: undefined, error: e };
    }
  },
};
