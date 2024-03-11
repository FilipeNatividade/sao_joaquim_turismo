'use client'

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import S from './coverSlide.module.scss'

export const CoverSlide = ({ content }: any) => {

    return (
        <Swiper className={S.cover_slides}
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
                delay: 10000,
                disableOnInteraction: true,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            loop={true}
            >
            {
                content?.map((item: any, index: any) => (
                    <SwiperSlide key={index}>
                        <div
                            style={item?.banner?.imagem[0]?.url
                                && { backgroundImage: `url(${item?.banner?.imagem[0]?.url})` }}
                            className={S.slide_content}
                        >
                            <div
                                className={S.box_titles}
                            >
                                {item?.banner?.preTitulo &&
                                    <span className={S.pre_title}>{item?.banner?.preTitulo}</span>}
                                {item?.banner?.titulo &&
                                    <span className={S.principal_title}>{item?.banner?.titulo}</span>}
                                {item?.banner?.subTitulo &&
                                    <span className={S.pos_title}>{item?.banner?.subTitulo}</span>}
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper >
    )
}
