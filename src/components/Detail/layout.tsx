'use client'

import React from 'react'
import { SlideTwo } from '../CustomSlides/layout'
import S from './detalhe.module.scss'
import parse from 'html-react-parser';
import { CustomAccordion } from '../CustomAccordion/layout';

export const Detail = ({ content }: any) => {

    return (
        <main className={`${S.main}`}>
            <section className={`limited_container ${S.history_box} padding_container`}>
                {content?.resumoImagem?.iv && <div
                    className={S.img_summary}
                    style={{
                        backgroundImage: `url(${content?.resumoImagem?.iv[0]?.url})`
                    }} />}
                <div className={` ${S.text_box} text_color`} >
                    {content?.nome?.iv &&
                        <h3>{content?.nome?.iv}</h3>}

                    {content?.resumo?.iv &&
                        parse(content?.resumo?.iv)}
                </div>
            </section>

            {content?.descritivo?.iv &&
                <div className={`limited_container padding_container  text_color ${S.descrition} `}>
                    {parse(content?.descritivo?.iv)}
                </div>
            }
            {content?.imagens?.iv && <div className={S.slide_container}>
                <SlideTwo content={content?.imagens?.iv} />
            </div>}
            {content?.detalheConteudo?.iv &&
                <section className={`limited_container padding_container text_color ${S.descrition}`}>
                    <div >
                        {parse(content?.detalheConteudo?.iv)}
                    </div>
                </section>}
            {content?.secoes?.iv?.length > 0 &&
                <section
                    className={S.accordion_box}>
                    <CustomAccordion content={content?.secoes?.iv} title='Experiência' />
                </section>}

        </main>
    )
}
