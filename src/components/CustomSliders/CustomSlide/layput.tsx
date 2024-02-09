"use client"
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import 'swiper/css/navigation';

type CustomSlideProps = {
    images: {
        title: string,
        text: string,
        src: string,
    }[],
    slidesPerView: number
}

export const CustomSlide = ({ images, slidesPerView }: CustomSlideProps) => {
    return (
        <div className="Custom_slide_box">
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Navigation]}
                navigation={true}
                className="mySwiper"
                loop={true}
            >
                {
                    images.map((img: any) => (
                        <SwiperSlide>
                            {
                                img.url ?
                                    <button onClick={() => null}>
                                        <img src={img?.src} alt="" />
                                        <h3>{img?.title}</h3>
                                        <p>{img?.text}</p>
                                    </button>

                                    :
                                    <div>
                                        <img src={img?.src} alt="" />
                                        <h3>{img?.title}</h3>
                                        <p>{img?.text}</p>
                                    </div>
                            }

                        </SwiperSlide>
                    ))
                }

            </Swiper>

        </div>
    )
}