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
import parse from 'html-react-parser';

export const Enphasis = () => {
    const [rezising, setRezising] = useState<number>(1)
    const [carousel, setCarousel] = useState<any>(null)


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
    const getColors = (color: any) => {
        const root = document.documentElement

        root.style.setProperty('--cor_primaria', color?.primaria);
        root.style.setProperty('--cor_secundaria', color?.secundaria);
        root.style.setProperty('--cor_terciario', color?.terciario);
        root.style.setProperty('--cor_quaternaria', color?.quaternaria);
        root.style.setProperty('--cor_quinquenaria', color?.quinquenaria);
        root.style.setProperty('--cor_branca', color?.branco);
        root.style.setProperty('--cor_borda_titulo', color?.bordaTituloInferior);
    }

    const getData = () => {
        Fetcher(QUERY).then(res => {
            setCarousel(res?.findConfiguracaoSingleton?.data?.carrossel?.iv)
            getColors(res?.findConfiguracaoSingleton?.data?.tema?.iv[0])
        })
    }

    useEffect(() => {
        getData()

        calculateSlidesPerView()
        window.addEventListener('resize', calculateSlidesPerView);
        return () => {
            window.removeEventListener('resize', calculateSlidesPerView)
        }
    }, [])

    return (
        <div className={`limited_container ${S.container_enphasis}`} >
            <div className={S.box_title}>
                {carousel?.preTitulo && <span className={S.pre_title}>{carousel?.preTitulo}</span>}
                {carousel?.titulo && <h2 className={S.principal_title}>{carousel?.titulo}</h2>}
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
                }}
                className='limited_container'
            >
                {
                    carousel?.itens && carousel?.itens?.map((item: any, index: any) => (
                        <SwiperSlide key={index}
                            className={S.swiper_slide}
                            style={{
                                width: 'max-content !important'
                            }}>
                            <a
                                href={item?.navegacao}
                                className={`${S.slide_content} zoom`}
                                style={item?.imagem && {
                                    backgroundImage: `url(${item?.imagem[0]?.url})`
                                }}
                            >
                                <div
                                    className={S.text_box}
                                >
                                    {item?.titulo && <h3>{item?.titulo}</h3>}
                                    {item?.conteudo && parse(item?.conteudo)}
                                </div>
                            </a>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div >
    )
}


