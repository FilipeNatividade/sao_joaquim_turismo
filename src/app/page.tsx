import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import parse from 'html-react-parser';
import { CoverSlide } from '@/components/coverSlide/layout';
import { Enphasis } from '@/components/Enphasis/layout';
import { Fetcher } from '@/api/server';
import S from './page.module.css'
import { QUERY } from './query';
import imgHistoria from '@/assets/IMG_5393_tratada 1.png'
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { TitlePage } from '@/components/TitlePage/layout';

const Page = async () => {

  const response = await Fetcher(QUERY)
  const data = response?.findPaginaInicioSingleton?.data

  return (
    <div
      className={S.container}>

      {data?.banners?.iv && <CoverSlide content={data?.banners?.iv} />}

      <main className={` ${S.container_box}`} >

        <TitlePage preTitle={data?.titulo?.iv} title={data?.subTitulo?.iv} />

        <section className={`limited_container ${S.history_box}`}>
          <img src={imgHistoria.src} alt="" />
          <div className={` ${S.text_box}`} >
            {data?.tituloConteudoApresentacao?.iv && <h3>{data?.tituloConteudoApresentacao?.iv}</h3>}
            {data?.conteudo?.iv && <div>
              {parse(data?.conteudo?.iv)}
              {' '}
              <a href={'/nossaHistoria'}>Nossa história...</a>
            </div>}
          </div>
        </section>

        <Enphasis />

        {data?.faq?.iv &&
          <section className={S.accordion_box}>
            <h2>Perguntas e respostas</h2>
            {<div className={`limited_container ${S.accordion_content} `} >
              {data?.faq?.iv.map((item: any, index: number) => (
                <Accordion key={index} className={` ${S.accordion}`} >
                  <AccordionSummary
                    expandIcon={<ControlPointIcon className={S.svg} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={S.accordion_summary}>
                    <Typography>
                      {item.pergunta}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography style={{ textAlign: 'left' }}>
                      {item.resposta}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>}
          </section>}

        {data?.imagemInferior?.iv[0]?.url &&
          <div className={S.imgBottom} style={{ backgroundImage: `url(${data?.imagemInferior?.iv[0]?.url})` }}>
            <div className={`${S.box_title} ${S.box_title_inferior}`}>
              <span className={S.pre_title_inferior}>{data?.preTituloInferior?.iv}</span>
              <h3
                className={S.title_inferior}>
                {data?.tituloInferior?.iv}</h3>
            </div>
          </div>}
      </main>
    </div>
  )
}

export default Page
