'use client'

import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser';
import { CoverSlide } from '@/components/coverSlide/layout';
import { Enphasis } from '@/components/Enphasis/layout';
import { Fetcher } from '@/api/server';
import S from './page.module.css'
import { QUERY } from './query';
import { TitlePage } from '@/components/TitlePage/layout';
import { CustomAccordion } from '@/components/CustomAccordion/layout';
import ComponentExperiences from '@/components/ComponentExperiencias/page';

const Page = () => {

  const [data, setData] = useState<any>(null)

  const getData = async () => {
    const response = await Fetcher(QUERY)
    setData(response?.findPaginaInicioSingleton?.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={S.container}>
      {data && <CoverSlide content={data?.banners?.iv} />}
      <main className={` ${S.container_box}`} >
        <TitlePage preTitle={data?.titulo?.iv} title={data?.subTitulo?.iv} />
        <section className={`limited_container ${S.history_box}`}>
          {data && <div
            className={S.img_summary}
            style={{
              backgroundImage: `url(${data?.imagemConteudoApresentacao?.iv[0].url})`
            }} />}
          <div className={` ${S.text_box}`} >
            {data && <h3>{data?.tituloConteudoApresentacao?.iv}</h3>}
            {data && <div>
              {parse(data?.conteudo?.iv)}
              {' '}
              <a href={'/nossaHistoria'}>Nossa história...</a>
            </div>}
          </div>
        </section>
        <ComponentExperiences />
        <Enphasis />
        {data && data?.secoes?.iv?.length > 0 &&
          <section className={`  ${S.accordion_box}`}>
            <CustomAccordion content={data?.secoes?.iv} title='Perguntas frequentes' />
          </section>}
        {data &&
          <div
            className={S.imgBottom}
            style={{
              backgroundImage: `url(${data?.imagemInferior?.iv[0]?.url})`
            }}
          >
            <div className={`${S.box_title} ${S.box_title_inferior}`} >
              {data && <span className={S.pre_title_inferior}>{data?.preTituloInferior?.iv}
              </span>}
              {data &&
                <h3
                  className={S.title_inferior} >
                  {data?.tituloInferior?.iv}</h3>}
            </div>
          </div>}
      </main>
    </div>
  )
}

export default Page
