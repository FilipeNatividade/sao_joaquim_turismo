'use client'
import React, { useState } from 'react'
import S from './turismo.module.scss'
import { CoverSlide } from '@/components/coverSlide/layout'
import { Enphasis } from '@/components/Enphasis/layout'
import { SlideOne } from '@/components/CustomSlides/layout'

const Page = () => {

  const [content, setContent] = useState(
    [{
      url: '/evento/detalhe',
      src: 'https://picsum.photos/200/300',
      title: 'titulo 1'
    },
    {
      url: '/evento/detalhe',
      src: 'https://picsum.photos/200/300',
      title: 'titulo 1'
    },
    {
      url: '/evento/detalhe',
      src: 'https://picsum.photos/200/300',
      title: 'titulo 1'
    },
    {
      url: '/evento/detalhe',
      src: 'https://picsum.photos/200/300',
      title: 'titulo 1'
    },
    {
      url: '/evento/detalhe',
      src: 'https://picsum.photos/200/300',
      title: 'titulo 1'
    }]
  )

  return (
    <div >
      <CoverSlide content={content} />
      <main className={`limited_container padding_container  ${S.main}`}>
        <div className={S.agencies_box}>
          <h1>Agências de turismo</h1>
          <SlideOne content={content} />
        </div>
        <div className={S.header_box}>
          <h1>Monte sua jornada</h1>
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