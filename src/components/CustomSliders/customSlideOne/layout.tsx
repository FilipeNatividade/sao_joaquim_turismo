"use client";
import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Pagination, Navigation } from 'swiper/modules';

import { CustomSlideProps } from '../type';
import 'swiper/css/navigation';



export const CustomSlideOne = ({ images }: CustomSlideProps) => {
    return (
        <div className="Custom_slide_box">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
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
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                loop={true}
            >
                {
                    images?.map((img) => (
                        <SwiperSlide key={img.src}>
                            <button className='img_box' onClick={()=>console.log(img.url)}
                            >
                                <img src={img.src}
                                />
                                <h4>{img.title}</h4>
                                <p>{img.text}</p>
                            </button>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
