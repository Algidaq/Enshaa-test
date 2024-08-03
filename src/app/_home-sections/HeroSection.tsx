import React from "react";
import Image from "next/image";
import { LinkButton, Text } from "@/components";
import styles from "../home.module.css";

export const HeroSection: React.FC<{}> = () => {
  return (
    <section className="w-full h-[100dvh]">
      <div className={styles.heroSection}>
        <div className="container mx-auto relative z-10 h-[100%]">
          <div className="w-[100%] h-[100%] z-[2] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-start items-center gap-[3rem] md:px-[2rem]">
              <div className="w-[7.5rem] h-[7.5rem] rounded-[1rem] overflow-hidden bg-tertiary-100 bg-opacity-[0.4]">
                <Image
                  src="/assets/logo-hero.png"
                  alt=""
                  width={120}
                  height={120}
                  objectFit="cover"
                />
              </div>
              <Text.h3
                component="p"
                className="text-netural-100 text-center !leading-[250%]"
              >
                من الشركات الرائدة فى مجال شركة انشاء للتوكيلات التجارية و ادارة
                المشروعات ونسعى دائما لزيادة نطاق خدماتنا من خلال تقديم خبراتنا
                فى مجال توكيلات التجارية و ادارة المشروعات بتوفير احدث الاساليب
                و الطرق الحديثة .
              </Text.h3>
              <LinkButton variant="filled" href={"#"} text="أقرا المزيد" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
