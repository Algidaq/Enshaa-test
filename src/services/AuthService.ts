import { PromiseResult } from "@/helpers";
import { HttpService } from "./HttpService";
import axios from "axios";
interface SignupRes {
  message: string;
  account: Account;
  error: boolean;
  token: string;
}

interface Account {
  id: number;
  email: string;
  full_name: string;
  phone_number: string;
  type: string;
  user: User;
  updatedAt: string;
  createdAt: string;
  FCM_token: null;
  deletedAt: null;
}

interface User {
  id: number;
  accountId: number;
  updatedAt: string;
  createdAt: string;
  gender: null;
  birth_date: null;
}
interface CompanySignupReq {
  full_name: string;

  email: string;

  phone_number: string;

  company_name: string;

  vat_number?: string;

  company_registration_number: string;

  company_registeration_certificate: File;

  otp: string;
}
export const AuthService = {
  async sendOtp(
    phoneNumber: string
  ): Promise<PromiseResult<{ message: string; ttl?: number }>> {
    try {
      const res = await HttpService.post("/auth/login-otp", {
        phone_number: phoneNumber,
      });
      const data = res.data as { message: string; ttl?: number };
      return { data: data, error: undefined };
    } catch (e) {
      return { error: "An Error Occured", data: undefined };
    }
  },
  async sendSignupOtp(
    phoneNumber: string
  ): Promise<PromiseResult<{ message: string; ttl?: number }>> {
    try {
      const res = await HttpService.post("/auth/signup-otp", {
        phone_number: phoneNumber,
      });
      const data = res.data as { message: string; ttl?: number };
      return { data: data, error: undefined };
    } catch (e) {
      return { error: "An Error Occured", data: undefined };
    }
  },

  async individualSignup(body: {
    email: string;
    otp: string;
    full_name: string;
    phone_number: string;
  }): Promise<PromiseResult<SignupRes>> {
    try {
      const formData = new FormData();
      Object.entries(body).forEach(([key, value]) => {
        formData.append(key, value);
      });
      formData.append("type", "user");
      const res = await HttpService.post("/auth/signup", formData);
      const data = res.data;
      return { data: data, error: undefined };
    } catch (e: any) {
      return {
        data: undefined,
        error: axios.isAxiosError(e) ? e.response?.data.message : e,
      };
    }
  },
  async compnaySignup(body: CompanySignupReq): Promise<PromiseResult<any>> {
    const formData = new FormData();
    Object.entries(body).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("type", "company");

    try {
      const res = await HttpService.post("/auth/signup", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const data = res.data;
      console.log(data);
      return { data, error: undefined };
    } catch (e: any) {
      return {
        data: undefined,
        error: axios.isAxiosError(e) ? e.response?.data.message : e,
      };
    }
  },
};
