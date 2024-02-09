import { Enphasis } from '@/components/Enphasis/layout'
import ListContent from '@/components/ListContent/layout'
import { CoverSlide } from '@/components/coverSlide/layout'
import React from 'react'
import S from './culinaria.module.scss'

const cover =
  [
    {
      src: 'https://picsum.photos/1000/1000',
      title: 'titulo 1',
      text: 'texto de apoio 1'
    },
    {
      src: 'https://picsum.photos/1000/1000',
      title: 'titulo 2',
      text: 'texto de apoio 2'
    },
    {
      src: 'https://picsum.photos/1000/1000',
      title: 'titulo 3',
      text: 'texto de apoio 3'
    },
    {
      src: 'https://picsum.photos/1000/1000',
      title: 'titulo 4',
      text: 'texto de apoio 4'
    },
  ]


const page = () => {

  return (
    <div >
      <CoverSlide content={cover} />
      <main className={`limited_container padding_container`}>
        <div className={S.header_box}>
          <h1>Resteurantes</h1>
          <input type="text" className={S.filter} />
        </div>
        <ListContent />
        <Enphasis />
      </main>
    </div>
  )
}

export default page