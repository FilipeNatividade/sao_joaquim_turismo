'use client'

import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import S from './customSlides.module.scss'

export const SlideOne = ({ content }: any) => {
    const [rezising, setRezising] = useState(1)

     

    const calculateSlidesPerView = () => {
        if (window.innerWidth >= 1000) {
            setRezising(3);
        } else if (window.innerWidth >= 768) {
            setRezising(2);
        } else {
            setRezising(1);
        }
    }

    useEffect(() => {
        calculateSlidesPerView()
        window.addEventListener('resize', calculateSlidesPerView);
        return () => {
            window.removeEventListener('resize', calculateSlidesPerView)
        }
    }, [])

    return (
        <>
            <Swiper
                slidesPerView={rezising}
                spaceBetween={60}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                loop={true}
            >
                {
                    content.map((item: any, index: any) => (
                        <SwiperSlide key={index} >
                            <a
                                href={item?.url}
                                className={`${S.slide_content} zoom`}
                            >
                                <div
                                    className={S.img}
                                    style={{
                                        backgroundImage: `url(${item?.src})`
                                    }}>
                                </div>
                                <div className={S.text_box}>

                                    <h3>{item?.title}</h3>

                                    <p>{item?.text}</p>

                                </div>
                            </a>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}


export const SlideTwo = ({ content }: any) => {

    return (
        <Swiper
            className="mySwiper"
            pagination={true}
            modules={[Pagination]}
            loop={true}
            
                   >
            {
                content.map((item: any, index: number) => (
                    <SwiperSlide
                        key={index}
                    >
                        <div
                            className={S.SlideTwo_content}
                            style={{
                                backgroundImage: `url(${item.url})`,

                            }}
                        ></div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export const SlideThree = ({ content }: any) => {

    const [rezising, setRezising] = useState(1)

    const calculateSlidesPerView = () => {
        if (window.innerWidth >= 1000) {
            setRezising(5);
        } else if (window.innerWidth >= 800) {
            setRezising(4);
        } else if (window.innerWidth >= 600) {
            setRezising(3);
        } else if (window.innerWidth >= 400) {
            setRezising(2);
        } else {
            setRezising(1);
        }
    }

    useEffect(() => {
        calculateSlidesPerView()
        window.addEventListener('resize', calculateSlidesPerView);
        return () => {
            window.removeEventListener('resize', calculateSlidesPerView)
        }
    }, [])

    return (
        <Swiper
            slidesPerView={rezising}
            spaceBetween={5}
            pagination={{
                clickable: true,
            }}
            centerInsufficientSlides={true}
            modules={[Pagination]}
            loop={true}
            style={{
                padding: '35px 0px',
            }}
        >
            {content?.map((item: any, index: number) => (
                <SwiperSlide key={index} className=''>
                    <div
                        className={`${S.img_slide} zoom`}
                        style={{
                            backgroundImage: `url(${item?.imagem[0]?.url})`,
                        }}>
                        <a
                        className={S.link_three_slide}
                            href={`/experiencias/${item?.categoria}`}
                        >
                            <h3 className={S.link_three_slide_text}>{item?.titulo}</h3>
                            <p className={S.link_three_slide_text}>{item?.apoio}</p>
                        </a>
                    </div>
                </SwiperSlide>
            ))
            }
        </Swiper>
    )
}