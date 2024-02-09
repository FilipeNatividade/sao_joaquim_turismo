import React from 'react'
import { SlideTwo } from '../CustomSlides/layout'
import S from './detalhe.module.scss'
import parse from 'html-react-parser';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CustomAccordion } from '../CustomAccordion/layout';

export const Detail = ({ content }: any) => {

    return (
        <main className={`${S.main}`}>
            <section className={`limited_container ${S.history_box}`}>
                {content?.resumoImagem?.iv[0]?.url && <img
                    src={content?.resumoImagem?.iv[0]?.url}
                    alt='imagem mostrando o lugar'
                    className={S.img}
                />}
                <div className={` ${S.text_box}`} >
                    {
                        content?.categoria?.iv[0] && <span>{content?.categoria?.iv[0]}</span>
                    }
                    {content?.nome?.iv &&
                        <h3>{content?.nome?.iv}</h3>}
                    {content?.resumo?.iv &&
                        parse(content?.resumo?.iv)}

                </div>
            </section>

            {content?.descritivo?.iv && <div className={`limited_container ${S.descrition}`}>
                {parse(content?.descritivo?.iv)}
            </div>
            }
            {content?.imagens?.iv && <div className={S.slide_container}>
                <SlideTwo content={content?.imagens?.iv} />
            </div>}
            {content?.detalheConteudo?.iv &&
                <section >
                    <div >
                        {parse(content?.detalheConteudo?.iv)}
                    </div>
                </section>}
            {content?.secoes?.iv && <section className={S.accordion_box}>
            </section>}
            <CustomAccordion content={content?.secoes?.iv} />
        </main>
    )
}
