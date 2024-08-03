export interface Product {
  sale_price: null;
  has_variant: boolean;
  id: number;
  sku: string;
  name_ar: string;
  name_en: string;
  description_ar: null;
  description_en: null;
  img_url: string;
  img_alt: null | string;
  price: number;
  quantity: number;
  published: boolean;
  weight: null;
  weight_unit: string;
  createdAt: string;
  updatedAt: string;
  brandName: null;
  categoryName: string;
  saleId: null;
  category: Category;
  variants: Variant[] | null;
  sale: null;
}

export interface Variant {
  sale_price: null;
  id: number;
  name_ar: string;
  name_en: string;
  quantity: number;
  price: number;
  createdAt: string;
  updatedAt: string;
  productId: number;
  saleId: null;
  options: Option[];
}

export interface Option {
  id: number;
  name_ar: string;
  name_en: string;
  value_ar: string;
  value_en: null;
  createdAt: string;
  updatedAt: string;
  variantId: number;
}

interface Category {
  id: number;
  name_ar: string;
  name_en: string;
  img_url: string;
  createdAt: string;
  updatedAt: string;
  parentId: number;
  saleId: null;
}
