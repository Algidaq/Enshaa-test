"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { ProductCard } from "@/ui";
import { Icon } from "@/components";

export const ProductsSwiper: React.FC<{ products: any[] }> = ({ products }) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [snapIndex, setSnapIndex] = useState(0);
  const [maxSnap, setMaxSnap] = useState(Math.floor(products.length / 4));

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const width = window.innerWidth;
    const maxSnap = getMaxSnap({ width, itemsLength: products.length });
    setMaxSnap(maxSnap);
    window.addEventListener("resize", (ev) => {
      const width = window.innerWidth;
      const maxSnap = getMaxSnap({ width, itemsLength: products.length });
      setMaxSnap(maxSnap);
    });
  }, [products.length]);

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
        slidesPerView={3}
        spaceBetween={16}
        slidesPerGroup={3}
        grabCursor={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 16,
            scrollbar: true,
          },
          767: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 16,
          },
        }}
        className="container"
        onSnapIndexChange={(swiper) => setSnapIndex(swiper.snapIndex)}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id.toString()}>
            <ProductCard
              size="small"
              name={product.name_ar}
              price={`${product.price.toFixed(2)} ر.س`}
              category={
                product.category?.name_ar ?? product?.categoryName ?? ""
              }
              image={product.img_url}
              link={{ pathname: `/products/${product.id}` }}
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
  return Math.floor(itemsLength / 3);
}
