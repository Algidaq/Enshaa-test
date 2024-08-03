import { PromiseResult } from "@/helpers";
import { HttpService } from "@/services";

export interface WalletRes {
  balance: number;
  id: number;
  createdAt: string;
  updatedAt: string;
  accountId: number;
  history: History[];
}

interface History {
  amount: number;
  id: number;
  type: "refund" | "consumption";
  createdAt: string;
  updatedAt: string;
  walletId: number;
}
export const WalletService = {
  async getWalletInformation(
    token?: string
  ): Promise<PromiseResult<WalletRes>> {
    try {
      const res = await HttpService.get("/api/wallet", {
        headers: { Authorization: token },
      });
      const data = res.data;
      return { data: data, error: undefined };
    } catch (e) {
      return { error: "unable to process your data", data: undefined };
    }
  },
};
