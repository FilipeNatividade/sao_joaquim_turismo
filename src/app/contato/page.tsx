import { SlideOne } from '@/components/CustomSlides/layout'
import { Enphasis } from '@/components/Enphasis/layout'
import { CoverSlide } from '@/components/coverSlide/layout'
import React from 'react'
import S from './contato.module.scss'

const content =
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
      <main className={`limited_container padding_container `}>
        <div className={S.essential_services}>
          <h1>Serviços essenciais</h1>
          <SlideOne content={content} />
        </div>

        <div className={S.form_box}>
          <form action="" className={S.form}>
            <h2>Fale conosco</h2>
            <input type="text" placeholder='Assunto' />
            <input type="text" placeholder='E-mail' />
            <input type="text" placeholder='Nome' />
            <textarea placeholder='Mensagem' />
          </form>
          <div className={S.partner}>
            <h2>Deseja exibir sua experiência ou serviço no nosso site?</h2>

            <p>Ao baixar o formulario, preecha as inormações solicitadas e envie para o e-mail secretariadeturismosj@gmail.com</p>

            <a download={''}>Clique aqui</a>
          </div>
        </div>

        {/* <Enphasis /> */}
      </main>
    </div>
  )
}

export default page