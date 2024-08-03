import React from "react";
import Image from "next/image";
import { AppIcons, Icon, Text } from "@/components";

export const DynamicPricingSection: React.FC<{}> = () => {
  return (
    <section className="lg:mt-[8rem] max-lg:mt-[4rem]">
      <div className="bg-[#F9FAFB] flex lg:gap-8 lg:px-4 lg:h-[433px] xl:container xl:mx-auto xl:rounded-[0.75rem] lg:items-center md:max-lg:py-8 md:max-lg:px-4 md:max-lg:gap-4 md:max-lg:justify-start md:max-lg:items-start max-lg:flex-col max-md:p-8 max-md:gap-8">
        <Image
          src="/assets/mac-book-pro.png"
          alt=""
          width={515}
          height={297}
          className="md:max-lg:h-[200px] md:max-lg:w-[200px] object-contain max-md:[164px] "
        />
        <div className="md:max-lg:gap-[2rem] grid lg:grid-cols-2 lg:gap-12 md:max-lg:grid-cols-2 max-md:grid-cols-1 max-md:flex-[1] max-md:gap-4">
          <DynamicPricingCard
            icon="Box"
            text="جميع ما تحتاجه من مواد البناء من مرحلة الإنشاء حتى الدهانات و التشطيب"
            background="bg-primary-100"
          />
          <DynamicPricingCard
            icon="Speaker"
            text="اطلب تسعيرتك برفع جدول الكميات أو كتابة ما تحتاجه و فريقنا يتكفل بالباقي"
            background="bg-tertiary-100"
          />
          <DynamicPricingCard
            icon="Chart"
            text="أداة إدارة المشاريع احترافية تتيح لك مراقبة مراحل مشروعك بكل سهولة"
            background="bg-secondary-100"
          />
          <DynamicPricingCard
            icon="Document"
            text="جاوب على أسئلة بسيطة , و نوفر لك خطة لمشروعك بالمراحل و المواد المطلوبة لكل مرحلة باستخدام خوارزمية إنشاء"
            background="bg-divider"
          />
        </div>
      </div>
    </section>
  );
};

const DynamicPricingCard: React.FC<{
  icon: AppIcons;
  text: string;
  background: string;
}> = (props) => {
  return (
    <div className="grid grid-cols-[64px_1fr] gap-4 ">
      <div
        className={`w-[4.5rem] h-[4.5rem] rounded-[0.75rem] flex flex-col items-center justify-center ${props.background}`}
      >
        <Icon icon={props.icon} />
      </div>
      <Text.bodySmall
        component="p"
        className="lg:max-w-[270px] !leading-[175%]"
      >
        {props.text}
      </Text.bodySmall>
    </div>
  );
};
