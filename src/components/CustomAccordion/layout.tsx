'use client'

import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import parse from 'html-react-parser';
import S from './styles.module.scss'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


export const CustomAccordion = ({ content, title }: any) => {

    const [expanded, setExpanded] = useState(new Array(content.length).fill(false));

    const handleChange = (index: number) => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    };

    return (
        <section className={S.accordion_box} >
            {title && <h2>{title}</h2>}
            {<div
                className={`limited_container padding_container ${S.accordion_content} `}
            >
                {content?.map((item: any, index: number) => (
                    <Accordion
                        key={index}
                        className={`${S.accordion}`}
                        expanded={expanded[index]}
                        onChange={() => handleChange(index)}>
                        <AccordionSummary
                            expandIcon={
                                expanded[index] ?
                                    <RemoveCircleOutlineIcon className={S.svg} />
                                    :
                                    <ControlPointIcon
                                        className={S.svg} />}
                            aria-controls={
                                `panel${index + 1}-content`
                            }
                            id={
                                `panel${index + 1}-header`
                            }
                            className={
                                S.accordion_summary
                            }>
                            {item.titulo &&
                                <Typography
                                    className={
                                        `${expanded[index] && S.title_expanded} ${S.title_Typography}`}>
                                    {item.titulo}
                                </Typography>}
                            {item.pergunta &&
                                <Typography
                                    className={
                                        `${expanded[index] && S.title_expanded} ${S.title_Typography}`}>
                                    {item.pergunta}
                                </Typography>}
                        </AccordionSummary>
                        <AccordionDetails >
                            {item.resposta &&
                                <Typography>
                                    {item.resposta}
                                </Typography>}

                            {<div
                                className={S.content}>
                                {item?.conteudo &&
                                    <div
                                        className={S.content_box}>
                                        {parse(item?.conteudo)}
                                    </div>
                                }

                                <div
                                    className={S.galery}
                                >
                                    {item?.galeria &&
                                        <div
                                            className={S.photo_box}>
                                            {item?.galeria.map((img: any, i: number) => (
                                                <img
                                                    className={S.photos}
                                                    src={img?.url} alt="" />
                                            ))}
                                        </div>}
                                </div>
                            </div>}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>}
        </section>
    )
}
