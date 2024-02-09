import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import parse from 'html-react-parser';
import S from './styles.module.scss'
import ControlPointIcon from '@mui/icons-material/ControlPoint';


export const CustomAccordion = ({ content }: any) => {
    return (
        <section className={S.accordion_box} >
            {<div className={`limited_container ${S.accordion_content} `} >
                {content?.map((item: any, index: number) => (
                    <Accordion key={index} className={` ${S.accordion}`} >
                        <AccordionSummary
                            expandIcon={<ControlPointIcon className={S.svg} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={S.accordion_summary}>
                            <Typography>{item.titulo}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{ textAlign: 'left' }}>
                                {parse(item?.conteudo)}
                                <div>
                                    <h2>Galeria</h2>
                                    {item?.galeria.map((img: any, i: number) => (
                                        <div style={{
                                            width: '30%',
                                        }}>
                                            <img
                                                style={{
                                                    width: '100%',
                                                }}
                                                key={i} src={img?.url} alt="" />
                                        </div>
                                    ))}

                                </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>}
        </section>
    )
}
