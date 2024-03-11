'use client'

import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import S from './customSlides.module.scss'
import { format } from 'date-fns';

export const SlideOne = ({ content, origin, randomico }: any) => {
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

    const handleRandom = () => {
        if (randomico) {
            return Math.random() - 0.5
        } else {
            return
        }
    }

    return (
        <Swiper
            slidesPerView={rezising}
            spaceBetween={16}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            loop={true}

            style={{
                padding: '20px 0',
            }}
            className='limited_container'
        >
            {content.sort(handleRandom).map((item: any, index: any) => (
                <SwiperSlide
                    key={index}
                    className={S.swiper_slide}
                    style={{
                        width: 'max-content !important'
                    }}
                >
                    <a
                        href={
                            item?.data?.link?.iv ? item?.data?.link?.iv :
                                item?.slug?.iv ? `/${origin}/${item?.slug?.iv}`
                                    :
                                    item?.data?.slug?.iv ?
                                        `/${origin}/${item?.data?.slug?.iv}`
                                        :
                                        item?.categoria &&
                                        `/${origin}/${item?.categoria}`

                        }
                        className={`${S.slide_content} zoom`}
                    >
                        <div
                            className={S.img}
                            style={
                                item?.resumoImagem?.iv ?
                                    { backgroundImage: `url(${item?.resumoImagem?.iv[0]?.url})` }
                                    :
                                    item?.data?.resumoImagem?.iv ?
                                        { backgroundImage: `url(${item?.data?.resumoImagem?.iv[0]?.url})` } :
                                        item?.imagem &&
                                        { backgroundImage: `url(${item?.imagem[0]?.url})` }

                            }>
                        </div>

                        <div className={`${S.text_box} text_color`} >
                            {/* Agências */}
                            {item?.data?.nome?.iv && <h3>{item?.data?.nome?.iv}</h3>}
                            {/* Eventos */}
                            {item?.nome?.iv && <h3>{item?.nome?.iv}</h3>}
                            {item?.local?.iv && <p>{item?.local?.iv}</p>}
                            {item?.dataDe?.iv && <p>{format(item?.dataDe?.iv, 'dd/MM/yyyy')}</p>}
                            {item?.dataFim?.iv && <p>{format(item?.dataFim?.iv, 'dd/MM/yyyy')}</p>}
                            {item?.data?.local?.iv && <p>{item?.data?.local?.iv}</p>}
                            {item?.data?.dataDe?.iv && <p>{format(item?.data?.dataDe?.iv, 'dd/MM/yyyy')}</p>}
                            {item?.data?.dataFim?.iv && <p>{format(item?.data?.dataFim?.iv, 'dd/MM/yyyy')}</p>}
                            {/* Atrações > Turismo */}
                            {item?.titulo && <h3>{item?.titulo}</h3>}
                            {item?.apoio && <p>{item?.apoio}</p>}
                        </div>
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}


export const SlideTwo = ({ content }: any) => {

    return (
        <div
            className='limited_container'
        >
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
                            <img
                                className={S.SlideTwo_content}
                                src={item.url}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export const SlideThree = ({ content }: any) => {

    const [rezising, setRezising] = useState(1)

    const calculateSlidesPerView = () => {
        if (window.innerWidth >= 800) {
            setRezising(5);
        } else if (window.innerWidth >= 600) {
            setRezising(4);
        } else if (window.innerWidth >= 400) {
            setRezising(3);
        } else {
            setRezising(2);
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
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            centerInsufficientSlides={true}
            modules={[Pagination]}
            loop={true}
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