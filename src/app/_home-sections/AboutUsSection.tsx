import { Text } from "@/components";
import Image from "next/image";
import React from "react";

export const AboutUsSection: React.FC<{}> = () => {
  return (
    <section id="about-us" className="lg:mt-[8rem] max-lg:mt-[4rem]">
      <div className="flex bg-[#F9FAFB] md:max-lg:flex-row-reverse md:max-lg:gap-[2rem] md:max-lg:py-8 md:max-lg:px-8 max-md:flex-col-reverse max-md:p-8 max-md:gap-8">
        <div className="flex-[1] lg:h-[693px] lg:flex lg:flex-col lg:justify-center lg:items-center">
          <div className="flex flex-col justify-start items-start lg:gap-[2.5rem] lg:max-w-[480px] lg:mx-auto md:max-lg:gap-8 max-md:gap-4">
            <Text.h3 component="h1" className="text-primary-500">
              عن إنشاء
            </Text.h3>
            <p className="body_small font-semibold !leading-[250%] align-middle">
              نبني منظومات حيوية متكاملة تتمحور حول فهمنا العميق لكافة شركائنا..
              <br />
              ونصُمم مشاريعنا التطويرية بعناية وإتقان لتوفير بيئة مثالية لازدهار
              المجتمعات والعائلات، وإثراء ثقافة العمل في الشركات وتعزيز النمو
              والابتكار، إلى جانب بناء مدارس مميزة تتألق فيها المواهب اليافعة
              وتحظى بتجربة تعليمية لا تضاهى على أيدي أفضل الكفاءات التربوية.
              أولويتنا دائماً الإنسان، ونتميز بمنظومتنا البشرية القوية القائمة
              على أسس صلبة من التواصل البناء والشراكات الراسخة بين المواهب
              المتميزة والشركات والموردين.
              <br />
               نضع بصمتنا الإيجابية في كل عمل نقوم به من خلال تبني أفضل ممارسات
              الحوكمة القائمة على قيم الشمول والاستدامة وأرقى المعايير
              الأخلاقية.
            </p>
          </div>
        </div>
        <div className="lg:flex-[1] relative overflow-hidden md:max-lg:h-[164px] md:max-lg:w-[164px] md:max-lg:rounded-[0.75rem] max-md:h-[164px] max-md:w-[100%] max-md:rounded-[0.75rem]">
          <Image fill src={"/assets/about-us.png"} alt="about-us" />
        </div>
      </div>
    </section>
  );
};
