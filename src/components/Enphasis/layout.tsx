'use client'

import React, { useEffect, useState } from 'react'
import { Fetcher } from '@/api/server';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import S from './enphasis.module.scss'
import { QUERY } from './query';

export const Enphasis = () => {
    const [rezising, setRezising] = useState(1)
    const [response, setResponse] = useState()

    const calculateSlidesPerView = () => {

        if (window.innerWidth >= 1000) {
            setRezising(5);
        } else if (window.innerWidth >= 800) {
            setRezising(4);
        }
        else if (window.innerWidth >= 600) {
            setRezising(3);
        } else if (window.innerWidth >= 422) {
            setRezising(2);
        } else {
            setRezising(1)
        }

    }

    useEffect(() => {

        Fetcher(QUERY).then(res => {
            setResponse(res?.findConfiguracaoSingleton?.data?.carrossel?.iv)
        })

        calculateSlidesPerView()

        window.addEventListener('resize', calculateSlidesPerView);

        return () => {
            window.removeEventListener('resize', calculateSlidesPerView)
        }

    }, [])



    return (
        <div className={`limited_container ${S.container_enphasis}`} >
            <div className={S.box_title}>
                {response?.preTitulo && <span className={S.pre_title}>{response?.preTitulo}</span>}
                {response?.titulo && <h2 className={S.principal_title}>{response?.titulo}</h2>}
            </div>
            <Swiper
                slidesPerView={rezising}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                centerInsufficientSlides={true}
                loop={true}

                style={{
                    padding: '20px 0',
                    // maxWidth: '1000px'
                }}
                className='limited_container'
            >

                {
                    response?.itens && response?.itens && response?.itens?.map((item: any, index: any) => (

                        <SwiperSlide key={index}
                            className={S.swiper_slide}
                            style={{
                                width: 'max-content !important'
                            }}                  >
                            <a
                                href={item?.navegacao}
                                className={`${S.slide_content} zoom`}
                                style={{
                                    backgroundImage: `url(${item?.imagem[0]?.url})`
                                }}
                            >

                                {item?.titulo && <h3>{item?.titulo}</h3>}

                            </a>

                        </SwiperSlide>
                    ))
                }

            </Swiper>

        </div >
    )
}


