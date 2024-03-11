'use client'

import React, { useEffect, useState } from 'react'
import S from './turismo.module.scss'
import { CoverSlide } from '@/components/coverSlide/layout'
import { Enphasis } from '@/components/Enphasis/layout'
import { SlideOne } from '@/components/CustomSlides/layout'
import { Fetcher } from '@/api/server'
import { TitlePage } from '@/components/TitlePage/layout'
import { QUERY, QUERY_AGENCIAS } from './query'
import { QUERY_LIST_ACCOMMODATION } from '../hospedagem/query'
import { QUERY_MACRO_EXPERIENCE } from '../experiencias/query'
import { QUERY_LIST_ATTRACTIONS } from '../atracoes/query'
import { QUERY_LIST_COOKING } from '../culinaria/query'
import { QUERY_LIST_EVENTS } from '../eventos/query'
import parse from 'html-react-parser'
import { Navigation } from '@/components/Navigation/layout'
import { useForm, Controller } from 'react-hook-form';

const Page = () => {
  const [data, setData] = useState<any>();
  // agencias
  const [dataAgency, setDataAgency] = useState<any>();
  // hospedagem
  const [dataListAccommodation, setDataListAccommodation] = useState<any>();
  const [dataListOriginalAccommodation, setDataListOriginalAccommodation] = useState<any>();
  // culinaria
  const [dataListCooking, setDataListCooking] = useState<any>();
  const [dataListOriginalCooking, setDataListOriginalCooking] = useState<any>();
  // atrações
  const [dataListAttractions, setDataListAttractions] = useState<any>();
  const [dataListOriginalAttractions, setDataListOriginalAttractions] = useState<any>();
  // experiências
  const [dataListExperience, setDataListExperience] = useState<any>();
  const [dataListOriginalExperience, setDataListOriginalExperience] = useState<any>();

  // eventos
  const [dataListEvents, setDataListEvents] = useState<any>();
  const [dataListOriginalEvents, setDataListOriginalEvents] = useState<any>();
  const { control } = useForm();

  const getData = async () => {
    const response = await Fetcher(QUERY);
    setData(response?.findPaginaMacroJornadaSingleton?.data);
  };
  const getDataAgency = async () => {
    const responseAgency = await Fetcher(QUERY_AGENCIAS);
    setDataAgency(responseAgency?.queryServicosContents);
  };


  const getDataLists = async () => {
    // hospedagens
    const responseListAccommodation = await Fetcher(QUERY_LIST_ACCOMMODATION);
    const dataListAccommodation = responseListAccommodation?.queryHospedagemContents;
    setDataListAccommodation(dataListAccommodation);
    setDataListOriginalAccommodation(dataListAccommodation);

    // culinaria
    const responseListCooking = await Fetcher(QUERY_LIST_COOKING);
    const dataListCooking = responseListCooking?.queryRestauranteContents
    setDataListCooking(dataListCooking);
    setDataListOriginalCooking(dataListCooking);

    // atraçôes

    const responseList = await Fetcher(QUERY_LIST_ATTRACTIONS);
    setDataListAttractions(responseList?.queryAtracaoContents);
    setDataListOriginalAttractions(responseList?.queryAtracaoContents);

    // experiência
    const responseListExperience = await Fetcher(QUERY_MACRO_EXPERIENCE)
    setDataListExperience(responseListExperience?.findPaginaMacroExperienciasSingleton?.data)
    setDataListOriginalExperience(dataListExperience)

    // eventos
    const responseListEvents = await Fetcher(QUERY_LIST_EVENTS);
    const dataListEvents = responseListEvents?.queryMesesContents;
    setDataListEvents(dataListEvents);
    setDataListOriginalEvents(dataListEvents);

  };

  useEffect(() => {
    getData();
    getDataAgency()
    getDataLists()
  }, []);

  const filterAccommodation = (selectedValue: string) => {
    if (selectedValue === '') {
      setDataListAccommodation(dataListOriginalAccommodation);
    } else {
      const filteredData = dataListOriginalAccommodation.filter((item: any) => item?.data?.publico?.iv.includes(selectedValue));
      setDataListAccommodation(filteredData);
    }
  };

  const filterCooking = (selectedValue: string) => {
    if (selectedValue === '') {
      setDataListCooking(dataListOriginalCooking);
    } else {
      const filteredData = dataListOriginalCooking.filter((item: any) => item?.data?.publico?.iv.includes(selectedValue));
      setDataListCooking(filteredData);
    }
  };

  const filterAttraction = (selectedValue: string) => {
    if (selectedValue === '') {
      setDataListAttractions(dataListOriginalAttractions);
    } else {
      const filteredData = dataListOriginalAttractions.filter((item: any) => item?.data?.publico?.iv.includes(selectedValue));
      setDataListAttractions(filteredData);
    }
  };

  // const filterEvents = (selectedValue: string) => {
  //   if (selectedValue === '') {
  //     setDataListEvents(dataListOriginalEvents);
  //   } else {
  //     const filteredData = dataListOriginalEvents && dataListOriginalEvents.filter((item: any) => item?.data?.publico?.iv.includes(selectedValue));
  //     setDataListEvents(filteredData);
  //   }
  // };

  const handleChange = (selectedValue: string) => {
    filterAccommodation(selectedValue)
    filterCooking(selectedValue)
    filterAttraction(selectedValue)
    // filterEvents(selectedValue)
  }

  const publics = [
    'Família',
    "Amigos",
    "Grupos",
    'Sozinho',
    "A trabalho"
  ]

  return (
    <main
      className={`${S.container} 
    ` } >
      {data?.banners?.iv &&
        <CoverSlide content={data?.banners?.iv}
        />}

      <div
        className={`${S.container} 
       padding_container
    ` }
      >

        {dataAgency &&
          <div
            className={`${S.container} 
          padding_container
       ` }
          >
            <section
              className={`limited_container ${S.title_box}`}
            >
              <TitlePage
                title='Agências de turismo'
              />
            </section>
            <div className={`limited_container ${S.slide_section}`} >
              <h2>
                Agências
              </h2>
              <SlideOne origin='turismo' content={dataAgency} randomico={true} />

            </div>
          </div>
        }
        <TitlePage
          title={data?.titulo?.iv}
        />


        <section
          className={`limited_container ${S.history_box} 
         `}
        >
          <div className={` ${S.text_box} text_color`} >
            {data?.subTitulo?.iv && <h3>{data?.subTitulo?.iv}</h3>}
            {data?.conteudo?.iv && <div>
              {data?.conteudo?.iv && parse(data?.conteudo?.iv)}

            </div>}
          </div>
        </section>

        <div className={`limited_container padding_container ${S.filter_box}`}>
          <Controller
            name="categoria"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <select
                className={S.select}
                value={value}
                onChange={(e) => {
                  onChange(e.target.value);
                  handleChange(e.target.value);
                }}
              >
                <option value="">Filtro</option>
                {publics.map((categoria: string, index: number) => (
                  <option key={index} value={categoria}>{categoria}</option>
                ))}
              </select>
            )}
          />
        </div>

        {dataListAccommodation && dataListAccommodation.length > 0 ? (<section className={`limited_container ${S.slide_section} `}>
          <h2>Hoteis</h2>
          <SlideOne origin='hospedagem' content={dataListAccommodation} randomico={true} />
        </section>)
          :
          (
            dataListAccommodation !== null && dataListAccommodation !== undefined && dataListAccommodation.length === 0 && <p className='message_error'>Hospedagem não encontrada para o publico desejado</p>
          )
        }

        {dataListCooking && dataListCooking.length > 0 ? (<section className={`limited_container ${S.slide_section} `}>
          <h2>Restaurantes</h2>
          <SlideOne origin='culinaria' content={dataListCooking} randomico={true} />
        </section>) :
          (
            dataListCooking !== null && dataListCooking !== undefined && dataListCooking.length === 0 && <p className='message_error'>Restaurante não encontrada para o publico desejado</p>
          )}

        {dataListAttractions && dataListAttractions.length > 0 ? (<section className={`limited_container ${S.slide_section} `}>
          <h2>Atrações</h2>
          <SlideOne origin='atracoes' content={dataListAttractions} randomico={true} />
        </section>) :
          (
            dataListAttractions !== null && dataListAttractions !== undefined && dataListAttractions.length === 0 && <p className='message_error'>Atração não encontrada para o publico desejado</p>
          )
        }
        {dataListExperience?.carrossel?.iv && dataListExperience?.carrossel?.iv.length > 0 ? <section className={`limited_container   ${S.slide_section}`}>
          <h2>Experiências</h2>
          <SlideOne origin='experiencias' content={dataListExperience?.carrossel?.iv} randomico={false} />
        </section>
          :
          (
            dataListExperience?.carrossel?.iv !== null && dataListExperience?.carrossel?.iv !== undefined && dataListExperience?.carrossel?.iv.length === 0 && <p className='message_error'>EXperiencia não encontrada para o publico desejado</p>
          )
        }

        {dataListEvents && dataListEvents.length > 0 ? <section className={`limited_container  ${S.slide_section}`}>
          <h2>Eventos</h2>
          {
            dataListEvents.sort((a: any, b: any) => a?.data?.mes?.iv - b?.data?.mes?.iv).map((i: any) => (
              <section className={`limited_container   ${S.slide_section} `} >
                <h3 >{i?.data?.nome?.iv}</h3>
                <SlideOne origin='eventos' content={i?.data?.eventosPorMes?.iv} randomico={false} />
              </section>
            ))
          }
        </section>
          :
          (
            dataListEvents !== null && dataListEvents !== undefined && dataListEvents.length === 0 && <p className='message_error'>Evento não encontrada para o publico desejado</p>
          )
        }

        <Enphasis />
        <Navigation local='Turismo'
        />
      </div>
    </main>
  )
}

export default Page