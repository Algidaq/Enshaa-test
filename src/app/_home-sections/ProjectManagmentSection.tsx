import React from "react";
import { Icon, LinkButton, Text } from "@/components";
import Image from "next/image";

export const ProjectManagmentSec: React.FC<{}> = (props) => {
  return (
    <section id="project-managment" className="lg:mt-[8rem] max-lg:mt-[4rem]">
      <div
        // className="bg-[#F9FAFB] bg-opacity-[0.64] grid grid-cols-2 gap-x-[10.375rem]"
        className="bg-[#F9FAFB] xs:flex xs:flex-col xs:p-8 xs:gap-8 md:grid md:grid-cols-[164px_1fr] md:py-8 md:px-4 lg:grid lg:grid-cols-2 lg:p-0"
      >
        <div className="relative xs:hidden lg:block lg:h-[693px]">
          <div className="absolute top-0 w-[100%] h-[100%] bg-[#242424] bg-opacity-[0.64] z-[1]" />
          <Image
            src="/assets/project-manag-sec.png"
            alt="project-manag-image"
            fill
            objectFit="cover"
          />
        </div>
        <div className="relative h-[164px] md:w-[164px] rounded-[0.75rem] overflow-hidden lg:hidden">
          <div className="absolute top-0 w-[100%] h-[100%] bg-[#242424] bg-opacity-[0.64] z-[1]" />
          <Image
            src="/assets/project-manag-sec.png"
            alt="project-manag-image"
            fill
            objectFit="cover"
          />
        </div>
        <div className="lg:max-w-[500px] lg:justify-self-center flex flex-col justify-start items-stretch gap-[2.4rem] self-center">
          <Text.h3 component="h3" className="text-primary-500">
            أهمية إدارة المشاريع في قطاع المقاولات
          </Text.h3>
          <p className="body_small !leading-[250%] pr-[1rem] relative">
            <span className="absolute w-[0.5rem] h-[0.5rem] rounded-[0.5rem] bg-netural-900 right-0 top-[1rem]" />
            إدارة المشاريع تلعب دورا أساسيا في تحديد المخاطر المحتملة و تطوير
            استراتيجات لإدارتها و التعامل معاها. المقاولات تواجه العديد من
            التحديات مثل التأخيرات في الجدول الزمني, و تجاوز التكاليف, و
            التغيرات في المتطلبات. إدارة المشتريع تمكن من تحديد المخاطر مسبقا
            ووضع خطط استجابة فعالة,مما يقلل من تأثير هذه المخاطر على سير المشروع
            و يساعد في الحفاظ على استمرارية العمل بدون تعطيل.
          </p>
          <p className="body_small !leading-[250%] pr-[1rem] relative">
            <span className="absolute w-[0.5rem] h-[0.5rem] rounded-[0.5rem] bg-netural-900 right-0 top-[1rem]" />
            قطاع المقاولات تعد جزءا حيويا لضمان نجاح المشاريع و تحقيق الأهداف
            بفعالية و كفاءة و هي تساهم في التخطيط و التنظيم الجيد للموارد
            المتاحة, مما يساعد على تحقيق استخدام أمثل للموارد البشرية و المادية.
            من خلال تحديد أهداف واضحة و جداول زمنية, يمكن للمقاولات تحقيق
            التوازن بين التكاليف و الوقت و المجهود و الجودة, مما يؤدي الى زيادة
            الكفاءة و تقليل الهدر.
          </p>
        </div>
      </div>
    </section>
  );
};

export const ProjectManagmentSec2: React.FC<{}> = () => {
  return (
    <section className="lg:mt-[8rem] max-lg:mt-[4rem] lg:container lg:mx-auto">
      <div className="flex bg-tertiary-100 xs:flex-col md:flex-row md:justify-between xs:p-8 xs:gap-8 md:px-4 md:py-8 lg:rounded-[0.75rem] lg:container lg:mx-auto lg:p-[4rem]">
        <div className="flex xs:flex-col xs:gap-8 max-md:flex-[1]">
          <Text.h3 component="h4" className="text-primary-500">
            لماذا يجب ان تستغل إدارة المشاريع في منصة إنشاء ؟
          </Text.h3>
          <div className="grid md:grid-cols-2 xs:grid-cols-1 gap-x-[2rem] gap-y-[2rem]">
            <CheckIconText text="تخطيط و تنظيم الموارد و المواد" />
            <CheckIconText text="ضبط الجدول الزمني و التكاليف" />
            <CheckIconText text="تحديد المخاطر و تفاديها" />
            <CheckIconText text="التواصل الفعال" />
          </div>
        </div>
        <div className="xs:self-stretch md:self-center">
          <LinkButton
            variant="filled"
            color="tertiary"
            text="إدارة المشاريع"
            href="#"
          />
        </div>
      </div>
    </section>
  );
};

const CheckIconText: React.FC<{ text: string }> = (props) => {
  return (
    <div className="flex flex-row justify-start items-start gap-[0.75rem]">
      <Icon icon="CircleCheck" width={"16px"} height={"16px"} />
      <Text.bodySmall>{props.text}</Text.bodySmall>
    </div>
  );
};
