import { Button, Icon, LoadingIndicator, Text } from "@/components";
import { CategoriesDropDown, ProductsList } from "./_components";
import { CategoryService, ProductsService } from "@/services";
import Link from "next/link";
import React from "react";

export default async function ProductsPage(params: {
  searchParams: { parent_category_name?: string; sub_category_name?: string };
}) {
  const { parent_category_name, sub_category_name } = params.searchParams;
  const categories = await CategoryService.getCategoryTree({ reverse: true });
  const parent = categories.find(
    (category) => category.name_ar === parent_category_name
  );

  const subcategories: Array<any> = parent?.subcategories ?? [];
  const subcategory =
    sub_category_name !== undefined
      ? subcategories.find(
          (subcategory) => subcategory.name_ar === sub_category_name
        )
      : subcategories?.[0];

  return (
    <>
      <div className="lg:container lg:mx-auto">
        <ProductsSearchBar
          categories={categories}
          parent={parent}
          subcategory={subcategory}
        />
        <React.Suspense fallback={<LoadingIndicator />}>
          <ProductsGrid selectedCategory={subcategory} />
        </React.Suspense>
      </div>
    </>
  );
}

const ProductsSearchBar: React.FC<{
  categories: Array<any>;
  parent: any;
  subcategory: any;
}> = async ({ categories, parent: category, subcategory }) => {
  return (
    <div className="flex flex-col justify-start items-stretch gap-[1.5rem] mt-[2rem]">
      <div className="flex xs:flex-col-reverse xs:items-stretch xs:gap-[1rem] xs:px-8 md:flex-row lg:px-0">
        <CategoriesDropDown
          categories={categories}
          selectParentCategory={category?.name_ar}
        />
        <ProductsSearchInput />
      </div>
      <CategoriesTabs
        parentCategory={
          category ? { id: category.id, name_ar: category.name_ar } : undefined
        }
        subcategories={category?.subcategories ?? []}
        selectedSubCategory={subcategory}
      />
    </div>
  );
};

const ProductsSearchInput: React.FC<{}> = (props) => {
  return (
    <div className="flex xs:flex-col xs:items-stretch xs:gap-4 sm:flex-row justify-center items-start md:flex-[1] sm:items-center gap-[1.5rem]">
      <div className="px-[1.5rem] py-[1rem] h-[4rem] flex flex-row justify-start items-stretch gap-[1rem] bg-netural-100 border-divider border rounded-[0.75rem] flex-[1] lg:max-w-[534.02px]">
        <Icon icon="Search" color="#CCCCCC" />
        <input
          type="text"
          className="flex-1 outline-none heading-3 placeholder:heading-3 "
          placeholder="اكتب اسم المنتج أو التصنيف"
        />
      </div>
      <Button text="بحث" variant="filled" />
    </div>
  );
};

const CategoriesTabs: React.FC<{
  parentCategory?: { name_ar: string; id: number };
  subcategories: any[];
  selectedSubCategory: any;
}> = (props) => {
  return (
    <div className="w-[100%] overflow-x-scroll ">
      <div className="flex flex-row items-start justify-start gap-[1.5rem]">
        {props.subcategories.map((subcategory) => (
          <CategoryTab
            key={subcategory.id.toString()}
            parentCategory={props.parentCategory}
            name={subcategory.name_ar}
            isActive={props.selectedSubCategory.name_ar === subcategory.name_ar}
          />
        ))}
      </div>
    </div>
  );
};

const CategoryTab: React.FC<{
  name: string;
  isActive?: boolean;
  parentCategory?: { name_ar: string; id: number };
}> = (props) => {
  return (
    <Link
      className={[
        "p-[1.5rem] relative w-fit whitespace-nowrap xs:p-[1rem]",
        props.isActive ? "border-b-4 border-[#03c7f3]" : "",
      ].join(" ")}
      href={{
        pathname: "/products",
        query: {
          parent_category_name: props.parentCategory?.name_ar,
          sub_category_name: props.name,
        },
      }}
    >
      <Text.subtitle
        component="span"
        className={props.isActive ? "text-primary-500" : "text-subtitle"}
      >
        {props.name}
      </Text.subtitle>
    </Link>
  );
};

const ProductsGrid: React.FC<{
  selectedCategory?: { name_ar: string; id: number };
}> = async (props) => {
  const result = await ProductsService.getProducts(
    props.selectedCategory?.id.toString()
  );
  if (result.error !== undefined) {
    return <Text.caption>Error</Text.caption>;
  }

  return (
    <ProductsList
      initialState={result.data.rows}
      category={props.selectedCategory?.name_ar}
    />
  );
};
