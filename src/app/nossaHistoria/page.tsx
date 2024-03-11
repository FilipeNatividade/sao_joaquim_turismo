'use client'

import React, { useEffect, useState } from 'react';
import { Enphasis } from '@/components/Enphasis/layout';
import { CoverSlide } from '@/components/coverSlide/layout';
import { Fetcher } from '@/api/server';
import S from './nossaHistoria.module.scss';
import parse from 'html-react-parser';
import { SlideTwo } from '@/components/CustomSlides/layout';
import { QUERY } from './query';
import { Navigation } from '@/components/Navigation/layout';
import { TitlePage } from '@/components/TitlePage/layout';
import { CustomAccordion } from '@/components/CustomAccordion/layout';


const page = () => {
  const [data, setData] = useState<any>(null)

  const getData = async () => {
    const response = await Fetcher(QUERY)
    setData(response?.findPaginaSobreSingleton?.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div
      className={S.container}
    >
      {data && <CoverSlide content={data?.banners?.iv} />}
      <main className={` ${S.container_box}`} >

        <TitlePage
          preTitle={data?.titulo?.iv}
          title={data?.conteudoSuperior?.iv[0]?.subTitulo}
        />

        <section
          className={
            `limited_container
           ${S.history_box}`}>
          <div className={S.text_box}>
            {data &&
              <h3>
                {data?.conteudoSuperior?.iv[0]?.subTitulo}
              </h3>}
            {data &&
              parse(
                data?.conteudoSuperior?.iv[0]?.conteudo
              )}
          </div>
          {data && <div
            className={S.img_summary}
            style={{
              backgroundImage: `url(${data?.conteudoSuperior?.iv[0]?.imagem[0]?.url})`
            }} />}
        </section>
        {data?.video && <div
          className={`limited_container  
        padding_container
         ${S.video_wrapper}`}
        >
          <div className={`  ${S.video_box}`}>
            <iframe
              width="1000"
              height="349"
              src={`${data?.video?.iv}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >
            </iframe>
          </div>
        </div>}

        <section className={`limited_container ${S.bottom_text} ${S.text_box}`}>
          {data &&
            <div>
              {parse(
                data?.conteudoInferior?.iv[0]?.conteudo
              )}
            </div>
          }
        </section>

        {data?.imagens?.iv &&
          <SlideTwo
            content={data?.imagens?.iv}
          />
        }

        {data &&
          <section className={`limited_container ${S.bottom_text}  ${S.text_box}`}>
            <div>
              {parse(data?.conteudoInferior?.iv[1]?.conteudo)}
            </div>

          </section>
        }

        {data?.secoes?.iv?.length > 0 &&
          <section
            className={S.accordion_box}
          >
            <CustomAccordion
              content={data?.secoes?.iv}
              title='Conheça mais' />
          </section>}

        <Enphasis />

      </main>

      {data &&
        <Navigation
          local='Nossa Hitória'
        />}
    </div>
  )
}

export default page