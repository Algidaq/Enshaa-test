import { HttpService } from "./HttpService";

export const CategoryService = {
  async getSubCategories(parentId: number): Promise<Array<any>> {
    try {
      const res = await HttpService.get(`/api/categories/${parentId}`);
      const data = res.data;
      return data;
    } catch (e) {
      return [];
    }
  },
  async getCategoryTree(params?: { reverse?: boolean }): Promise<Array<any>> {
    try {
      const res = await HttpService.get("/api/categories/tree", {
        params: params,
      });
      const data = res.data;
      return data;
    } catch (e) {
      return [];
    }
  },
};
