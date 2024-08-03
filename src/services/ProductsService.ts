import { PromiseResult } from "@/helpers";
import { HttpService } from "./HttpService";
import { Product } from "@/model";
interface ProductsRes {
  count: number;
  rows: Product[];
}

export const ProductsService = {
  async getProducts(
    category?: string,
    page?: number
  ): Promise<PromiseResult<ProductsRes>> {
    try {
      const res = await HttpService.get("/api/products", {
        params: {
          limit: 12,
          page: page ?? 1,
          // categoryName: category,
          subCategoriesIds: [category],
        },
      });
      const data = res.data;
      return { data: res.data, error: undefined };
    } catch (e) {
      console.log("error", e);
      return { data: undefined, error: "An error occurred" };
    }
  },
  async getProductById(
    id: number
  ): Promise<
    PromiseResult<{ product: Product; similarProducts: Array<Product> }>
  > {
    try {
      const res = await HttpService.get(`/api/products/${id}`);
      const data = res.data;
      return { data, error: undefined };
    } catch (e) {
      return { data: undefined, error: "an error occured" };
    }
  },
};
