"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { CategoryCard } from "@/ui";
import { Icon } from "@/components";

export const CategoriesSwiper: React.FC<{ categories: any[] }> = ({
  categories,
}) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [snapIndex, setSnapIndex] = useState(0);
  const [maxSnap, setMaxSnap] = useState(Math.floor(categories.length / 4));

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const width = window.innerWidth;
    const maxSnap = getMaxSnap({ width, itemsLength: categories.length });
    setMaxSnap(maxSnap);
    window.addEventListener("resize", (ev) => {
      const width = window.innerWidth;
      const maxSnap = getMaxSnap({ width, itemsLength: categories.length });
      setMaxSnap(maxSnap);
    });
  }, [categories.length]);

  return (
    <div className="relative">
      {snapIndex < maxSnap && (
        <NextButton
          onClick={() => {
            swiperRef.current?.slideNext();
          }}
        />
      )}
      {snapIndex > 0 && (
        <PrevButton
          onClick={() => {
            swiperRef.current?.slidePrev();
          }}
        />
      )}
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        dir="rtl"
        slidesPerView={4}
        spaceBetween={64}
        slidesPerGroup={4}
        grabCursor={true}
        // className="container"
        breakpoints={{
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
            scrollbar: true,
          },
          767: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 30,
          },
        }}
        onSnapIndexChange={(swiper) => setSnapIndex(swiper.snapIndex)}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id.toString()}>
            <CategoryCard
              title={category.name_ar}
              img={category.img_url}
              desc=""
              href={{
                pathname: "/products",
                query: { parent_category_name: category.name_ar },
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const NextButton: React.FC<{ onClick?: () => void }> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="absolute shadow-sm w-[4rem] h-[4rem] z-[3] border border-divider flex flex-col justify-center items-center left-[-2.0rem] translate-y-[-50%] top-[50%] bg-netural-100 rounded-[0.75rem]"
    >
      <Icon icon="ArrowLeft" />
    </button>
  );
};

const PrevButton: React.FC<{ onClick?: () => void }> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="absolute shadow-sm w-[4rem] h-[4rem] z-[3] border border-divider flex flex-col justify-center items-center right-[-2.0rem] translate-y-[-50%] top-[50%] bg-netural-100 rounded-[0.75rem]"
    >
      <Icon icon="ArrowRight" />
    </button>
  );
};

function getMaxSnap({
  width,
  itemsLength,
}: {
  width: number;
  itemsLength: number;
}): number {
  if (width >= 320 && width < 768) return itemsLength - 1;
  if (width >= 768 && width < 1024) return Math.floor(itemsLength / 2) - 1;
  if (width >= 1024 && width < 1280) return Math.floor(itemsLength / 3);
  if (width >= 1280) return Math.floor(itemsLength / 4);
  return 1;
}
