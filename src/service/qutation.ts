import { Product } from "./product";

export default interface Quotation {
  accountId: number;
  attached_file: File | string | null;
  createdAt: string;
  file_url: string;
  id: bigint;
  stageId: object;
  status: string;
  text: string;
  updatedAt: string;
  quotation_amount?: null | number | string;

  items: Product[];
}
