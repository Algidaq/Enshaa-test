import { Button, Icon, LoadingIndicator } from "@/components";
import { CategoryCard } from "@/ui";
import { ProductCategoriesSectionHeader } from "../_components";
import { HomeService } from "@/services";
import React from "react";
import { CategoriesSwiper } from "./CategoriesSwiper";

export const CategoriesSection: React.FC<{}> = () => {
  return (
    <section className="lg:mt-[8rem] max-lg:mt-[4rem]">
      <div className="py-[3.5rem]  bg-[#F9FAFB]">
        <div className="flex flex-col justify-start items-stretch xs:gap-8 lg:gap-[2.5rem]">
          <SearchContainer />
          <div className="xs:p-8 lg:container lg:mx-auto">
            <ProductCategoriesSectionHeader
              header="التصنيفات"
              href={"#"}
              linkText="عرض كافة التصنيفات"
            />
          </div>
          <React.Suspense fallback={<LoadingIndicator />}>
            <CategoriesList />
          </React.Suspense>
        </div>
      </div>
    </section>
  );
};

const SearchContainer: React.FC<{}> = () => {
  return (
    <div className="flex flex-row justify-center items-start gap-[1.5rem] xs:px-8">
      <div className="px-[1.5rem] py-[1rem] h-[4rem] w-[534.02px] flex flex-row justify-start items-stretch gap-[1rem] bg-netural-100 border-divider border rounded-[0.75rem]">
        <Icon icon="Search" color="#CCCCCC" className="xs:hidden" />
        <input
          type="text"
          className="flex-1 outline-none heading-3 placeholder:heading-3 "
          placeholder="اكتب اسم المنتج أو التصنيف"
        />
      </div>
      <Button text="بحث" variant="filled" className="self-center" />
    </div>
  );
};

const CategoriesList: React.FC<{}> = async () => {
  const categories = await HomeService.getHomeCategories();

  return (
    <div className="xs:px-8 lg:container lg:mx-auto">
      <CategoriesSwiper categories={categories} />
    </div>
  );
};
