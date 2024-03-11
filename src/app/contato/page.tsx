'use client'

import { SlideOne } from '@/components/CustomSlides/layout'
import { Enphasis } from '@/components/Enphasis/layout'
import { CoverSlide } from '@/components/coverSlide/layout'
import React, { useEffect, useState } from 'react'
import S from './contato.module.scss'
import { Fetcher, submit } from '@/api/server'
import { QUERY_CONTATO, QUERY_SERVICES } from './query'
import { TitlePage } from '@/components/TitlePage/layout'
import parse from 'html-react-parser'
import { useForm } from 'react-hook-form'

const page = () => {
  const [data, setData] = useState<any>();
  const [dataAgencyServices, setDataAgencyServices] = useState<any>();
  const { register, handleSubmit, formState: { errors },reset } = useForm();

  const motivos = [
    'Dicas de Hospedagem',
    'Clima e previsão de tempo',
    'eventos e atividades culturais',
    'Informações sobre atrações',
    'Roteiros personalizados',
    'Sugestões de restaurantes e gastronomia',
    'Dúvidas gerais',
  ]

  const handleData = async () => {
    const response = await Fetcher(QUERY_CONTATO)
    setData(response?.findPaginaContatoSingleton?.data)
  }

  const handleDataAgencyServices = async () => {
    const responseServices = await Fetcher(QUERY_SERVICES)
    const dataResponse = responseServices?.queryServicosContents
    setDataAgencyServices(dataResponse)
  }

  useEffect(() => {
    handleData();
    handleDataAgencyServices();
  }, []);

  const onSubmit = (data: any) => {
    submit(
      {
        "nome": { "iv": `${data.nome}` },
        "email": { "iv": `${data.email}` },
        "telefone": { "iv": `${data.telefone}` },
        "motivo": { "iv": `${data.motivo}` },
        "mensagem": { "iv": `${data.mensagem}` }
      }
    )

    reset()
  };

  return (
    <div
      className={S.container}
    >
      {data?.banners?.iv &&
        <CoverSlide
          content={data?.banners?.iv}
        />}
      <main
        className={` ${S.container_box}`}
      >
        <section
          className={`limited_container 
          ${S.title_box}`}
        >
          <TitlePage
            preTitle='a qualquer hora'
            title='Serviços essenciais'
          />
        </section>
        {dataAgencyServices &&
          <div
            className={`limited_container`}>
            <SlideOne
              origin='turismo'
              content={dataAgencyServices}
              linkExterno={true}
              randomico={true}
            />
          </div>}
        <section
          className={`limited_container 
          ${S.title_box}`}
        >
          <TitlePage
            title={data?.titulo?.iv}
          />
        </section>
        <div
          className={`limited_container 
        ${S.form_box}`}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={S.form}
          >
            <input
              type="text"
              {...register('nome',
                { required: true })}
              placeholder="Nome"
            />
            {errors.nome &&
              <span className='message_error'>
                Nome é obrigatório
              </span>}
            <input
              type="email"
              {...register('email',
                { required: true })}
              placeholder="Email"
            />
            {errors.email &&
              <span className='message_error'>
                Email é obrigatório
              </span>}
            <input
              type="tel"
              {...register('telefone',
                { required: true })}
              placeholder="Telefone"
            />
            {errors.telefone &&
              <span className='message_error'>
                Telefone é obrigatório
              </span>}
            <textarea
            className='message_error'
              {...register('mensagem',
                { required: true })}
              placeholder="Mensagem">
            </textarea>
            {errors.telefone &&
              <span className='message_error'>
                Mensagem é obrigatório
              </span>}
            <select {...register('motivo')} className={S.select}>
              <option value="">Motivo do contato</option>
              {
                motivos.map((item:any, index:number) =>(
                  <option key={index} value={item}>{item}</option>
                ))
              }
            </select>
            <button
              type="submit"
              className={S.send_btn}>
              Enviar
            </button>
          </form>
          <div
            className={`${S.partner} text_color`}
          >
            {data?.informativo?.iv &&
              parse(data?.informativo?.iv)}
            <a
              className={S.send_btn}
              href={data?.link?.iv}
              target='_blank'>
              Preencha o formulário
            </a>
          </div>
        </div>
        <div
          className={`limited_container 
        ${S.assessment_box}
         padding_container`}>
          <TitlePage
            preTitle='ajude-nos a melhorar'
            title='Avalie sua experiência'
          />
          <p>
            Se você já nos visitou, responda a pesquisa e avalie a sua experiência
          </p>
          <a
            className={S.send_btn}
            href={data?.linkAvaliacao?.iv}
            target='_blank'>
            Acessar pesquisa de 5 min
          </a>
        </div>
        <Enphasis />
      </main>
    </div>
  )
}

export default page