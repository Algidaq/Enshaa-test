import { Category } from "./category"

export interface Product {
    sale_price: any
    id: number
    sku: string
    name_ar: string
    name_en: string
    description_ar: any
    description_en: any
    img_url: string
    img_alt: any
    price: number
    quantity: number
    published: boolean
    weight: any
    weight_unit: string
    createdAt: string
    updatedAt: string
    brandName: any
    categoryName: string
    saleId: any
    sale: any
    category: Category
}