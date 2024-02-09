import React from 'react';
import { Enphasis } from '@/components/Enphasis/layout';
import { CoverSlide } from '@/components/coverSlide/layout';
import { Fetcher } from '@/api/server';
import S from './nossaHistoria.module.scss';
import parse from 'html-react-parser';
import { SlideTwo } from '@/components/CustomSlides/layout';
import { QUERY } from './query';
import { Navigation } from '@/components/Navigation/layout';
import { TitlePage } from '@/components/TitlePage/layout';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Typography from '@mui/material/Typography';


const page = async () => {

    const response = await Fetcher(QUERY)
    const data = response?.findPaginaSobreSingleton?.data

    return (
        <div
            className={S.container}>
            {data?.banners?.iv && <CoverSlide content={data?.banners?.iv} />}
            <main className={` ${S.container_box}`} >
                <TitlePage preTitle={data?.titulo?.iv} title={data?.conteudoSuperior?.iv[0]?.subTitulo} />

                <section className={`limited_container ${S.history_box}`}>
                    {data?.conteudoSuperior?.iv[0]?.imagem[0]?.url && <img
                        src={data?.conteudoSuperior?.iv[0]?.imagem[0]?.url}
                        alt='imagem mostrando o lugar'
                    />}
                    <div className={S.text_box}>
                        <h3>{data?.conteudoSuperior?.iv[0]?.subTitulo}</h3>
                            {parse(data?.conteudoSuperior?.iv[0]?.conteudo)}
                    </div>
                </section>

                <section className={`limited_container ${S.bottom_text}`}>
                    {data?.conteudoInferior?.iv[0]?.conteudo && <div>
                        {parse(data?.conteudoInferior?.iv[0]?.conteudo)}
                    </div>
                    }
                </section>

                {data?.imagens?.iv && <SlideTwo content={data?.imagens?.iv} />}

                {data?.conteudoInferior?.iv[1]?.conteudo &&
                    <section className={`limited_container ${S.bottom_text}`}>
                        <div>
                            {parse(data?.conteudoInferior?.iv[1]?.conteudo)}
                        </div>
                    </section>}

                    {data?.faq?.iv && <section className={S.accordion_box}>
          <h2>Perguntas e respostas</h2>
          {<div  >
            {data?.faq?.iv.map((item: any, index: number) => (
              <Accordion key={index} className={`limited_container ${S.accordion}`} >
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

                <Enphasis />
            </main>
            <Navigation local={data?.titulo?.iv} />
        </div>
    )
}

export default page