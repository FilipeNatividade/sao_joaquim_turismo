import React, { useState } from 'react'
import ListContent from '@/components/ListContent/layout'
import S from './evento.module.scss'
import { CoverSlide } from '@/components/coverSlide/layout'
import { Enphasis } from '@/components/Enphasis/layout'
import { SlideOne } from '@/components/CustomSlides/layout'
import { Fetcher } from '@/api/server'
import { QUERY } from '../query'



const content =
  [{
    url: '/eventos/detalhe',
    src: 'https://picsum.photos/200/300',
    title: 'titulo 1'
  },
  {
    url: '/eventos/detalhe',
    src: 'https://picsum.photos/200/300',
    title: 'titulo 1'
  },
  {
    url: '/eventos/detalhe',
    src: 'https://picsum.photos/200/300',
    title: 'titulo 1'
  },
  {
    url: '/eventos/detalhe',
    src: 'https://picsum.photos/200/300',
    title: 'titulo 1'
  },
  {
    url: '/eventos/detalhe',
    src: 'https://picsum.photos/200/300',
    title: 'titulo 1'
  }]


const Page = async () => {

  const response = await Fetcher(QUERY)
    const data = response?.findPaginaAtracoesSingleton?.data

    // const responseList = await Fetcher(QUERY_LIST)
    // const dataList = responseList?.queryAtracaoContents

  return (
    <div >
     {data?.banners?.iv && <CoverSlide content={data?.banners?.iv} />}
      <main className={`limited_container padding_container  ${S.main}`}>
        <div className={S.header_box}>
          <h1>Eventos</h1>
          <input type="text" className={S.filter} />
        </div>
        {/* <ListContent /> */}
        <div className={S.slide_box}>
          <h3>19/01/2024</h3>
          <SlideOne content={content} />
        </div>
        <div className={S.slide_box}>
          <h3>19/01/2024</h3>
          <SlideOne content={content} />
        </div>
        <div className={S.slide_box}>
          <h3>19/01/2024</h3>
          <SlideOne content={content} />
        </div>
        <div className={S.slide_box}>
          <h3>19/01/2024</h3>
          <SlideOne content={content} />
        </div>
        <Enphasis />
      </main>
    </div>
  )
}

export default Page