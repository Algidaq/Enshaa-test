import React, { PropsWithChildren } from "react";
import { Icon, Text } from "@/components";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { HomeService } from "@/services";
import { version } from "@/utils";

const kMenuLinks = [
  { text: "الرئيسية", href: "#" },
  { text: "نبذة عنا", href: "#about-us" },
  { text: "المتجر", href: "/products" },
  { text: "التسعير", href: "/quotations" },
  { text: "إدارة المشاريع", href: "#project-managment" },
];

export const Footer: React.FC<{}> = (props) => {
  return (
    <section className="">
      <footer className="w-[100%] bg-[#f9fafb] py-[4.625rem] xs:p-8">
        <div className="lg:container lg:mx-auto">
          <div className="flex flex-row max-lg:flex-col xs:gap-8 justify-start items-center xs:items-stretch">
            <div className="flex-1 xs:max-lg:hidden">
              <div className="max-w-[523px] h-[263px] bg-divider rounded-[0.75rem]" />
            </div>
            <div className="flex flex-row xs:max-sm:flex-col xs:gap-8 justify-between items-start flex[1]">
              <FooterLinksContainer title="القائمة">
                {kMenuLinks.map((value, index) => (
                  <FooterLink
                    key={`${index}`}
                    text={value.text}
                    href={value.href}
                  />
                ))}
              </FooterLinksContainer>
              <FooterCategories />
              <FooterLinksContainer title="تواصل معنا">
                <Text.bodyLarge component="span" className="text-netural-900">
                  0512345678
                </Text.bodyLarge>
                <Text.bodyLarge component="span" className="text-netural-900">
                  enshaa.app
                </Text.bodyLarge>
              </FooterLinksContainer>
              <div className="flex flex-col justify-start items-start gap-[1.5rem]">
                <Text.subtitle component="span" className="text-primary-500">
                  مواقع التواصل الاجتماعي
                </Text.subtitle>
                <Image
                  src={"/assets/logo-footer.png"}
                  width={191}
                  height={167}
                  alt=""
                  className="xs:max-sm:hidden"
                />
                <div className="flex flex-row justify-between items-start self-stretch">
                  <Icon icon="LinkedIn" />
                  <Icon icon="Instagram" />
                  <Icon icon="Facebook" />
                  <Icon icon="Twitter" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

const FooterLinksContainer: React.FC<PropsWithChildren<{ title: string }>> = (
  props
) => {
  return (
    <div className="flex flex-col justify-start items-start gap-[1.5rem]">
      <Text.subtitle component="span" className="text-primary-500">
        {props.title}
      </Text.subtitle>
      <div className="flex flex-col items-start gap-[0.5rem]">
        {props.children}
      </div>
    </div>
  );
};

const FooterLink: React.FC<{ text: string; href: LinkProps["href"] }> = (
  props
) => {
  return (
    <Link href={props.href}>
      <Text.bodyLarge component="span" className="text-netural-900">
        {props.text}
      </Text.bodyLarge>
    </Link>
  );
};

export const CopyRightsSection: React.FC<{}> = (props) => {
  return (
    <div className="w-[100%] bg-primary-100 py-[0.75rem] px-8">
      <div className="container mx-auto flex xs:max-sm:flex-col justify-center gap-[1rem] ">
        <span className="almarai-bold text-[1rem] text-primary-500">
          جميع الحقوق محفوظة @ إنشاء 2024
        </span>
        <span className="almarai-bold text-[1rem] text-primary-500">
          نسخه رقم {version}
        </span>
      </div>
    </div>
  );
};

const FooterCategories: React.FC<{}> = async () => {
  const categories = (await HomeService.getHomeCategories()).slice(0, 4);
  return (
    <FooterLinksContainer title="منتجاتنا والتصنيفات">
      {categories.map((value, index) => (
        <FooterLink
          key={`${index}`}
          text={value.name_ar}
          href={{
            pathname: "/products",
            query: { parent_category_name: value.name_ar },
          }}
        />
      ))}
    </FooterLinksContainer>
  );
};
