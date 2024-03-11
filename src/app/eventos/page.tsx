'use client'

import React, { useEffect, useState } from 'react'
import S from './evento.module.scss'
import { CoverSlide } from '@/components/coverSlide/layout'
import { Enphasis } from '@/components/Enphasis/layout'
import { SlideOne } from '@/components/CustomSlides/layout'
import { Fetcher } from '@/api/server'
import { TitlePage } from '@/components/TitlePage/layout'
import { QUERY_LIST_EVENTS, QUERY } from './query'
import parse from 'html-react-parser'
import { Navigation } from '@/components/Navigation/layout'
import { useForm, Controller } from 'react-hook-form';


const Page = () => {

  const [data, setData] = useState<any>();
  const [dataList, setDataList] = useState<any>();
  const [dataListOriginal, setDataListOriginal] = useState<any>();
  const { control } = useForm();

  useEffect(() => {
    getData();
    getDataList();
  }, []);

  const getData = async () => {
    const response = await Fetcher(QUERY)
    setData(response?.findPaginaEventosSingleton?.data)
  };

  const getDataList = async () => {
    const responseList = await Fetcher(QUERY_LIST_EVENTS);
    const dataList = responseList?.queryMesesContents;
    setDataList(dataList);
    setDataListOriginal(dataList);
  };

  const handleChange = (selectedValue: string) => {
    if (selectedValue === '') {
      setDataList(dataListOriginal);
    } else {
      const filteredData = dataListOriginal.filter((item: any) => item?.data?.nome?.iv === selectedValue);
      setDataList(filteredData);
    }
  };

  return (
    <main
      className={S.container}
    >
      {data?.banners?.iv &&
        <CoverSlide content={data?.banners?.iv} />}
      <TitlePage
        title={data?.titulo?.iv}
      />


      {data?.subTitulo?.iv || data?.conteudo?.iv ? (

        <section
          className={`limited_container ${S.text_box}`}
          style={{
            border: '2px solid red'
          }}
        >
          {data?.subTitulo?.iv &&
            <h3>

              {data?.subTitulo?.iv}
            </h3>}
          {data?.conteudo?.iv &&
            <div>
              {data?.conteudo?.iv &&
                parse(data?.conteudo?.iv)}
            </div>}
        </section>

      ) : null}

      <div className={`limited_container padding_container ${S.filter_box}`} >
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
              {dataList &&
                dataListOriginal.map((date: any, index: number) => (
                  <option
                    key={index}
                    value={date?.data?.nome?.iv}>
                    {date?.data?.nome?.iv}
                  </option>
                ))}
            </select>
          )}
        />
      </div>

      {
        dataList &&
        dataList.sort((a: any, b: any) => a?.data?.mes?.iv - b?.data?.mes?.iv).map((i: any) => (
          <section
            className={`limited_container 
          ${S.slide_section} 
           padding_container`}
          >
            <h2>
              {i?.data?.nome?.iv}
            </h2>
            <SlideOne
              origin='eventos'
              content={i?.data?.eventosPorMes?.iv}
              randomico={false}
            />
          </section>
        ))
      }

      <Enphasis />
      {data?.titulo?.iv &&
        <Navigation
          local='Eventos'
        />}
    </main>
  )
}

export default Page