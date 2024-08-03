import { HttpService } from "./HttpService";

export const HomeService = {
  async getHomeCategories(): Promise<Array<any>> {
    try {
      const res = await HttpService.get("/api/home");
      const data = res.data;
      return data["categories"] ?? [];
    } catch (e) {
      return [];
    }
  },
};
