'use client'

import React, { useEffect, useState } from 'react'
import ListContent from '@/components/ListContent/layout'
import S from './lista.module.scss'
import { CoverSlide } from '@/components/coverSlide/layout'
import { Enphasis } from '@/components/Enphasis/layout'
import { Fetcher } from '@/api/server'
import parse from 'html-react-parser';
import { QUERY_CATEGORIA, QUERY_PAGINA } from '../query'
import { TitlePage } from '@/components/TitlePage/layout'
import { Navigation } from '@/components/Navigation/layout'
import { useForm, Controller } from 'react-hook-form';


const Page = ({ params }: any) => {

    const [data, setData] = useState<any>();
    const [dataList, setDataList] = useState<any>();
    const [dataListOriginal, setDataListOriginal] = useState<any>();
    const { control } = useForm();

    const getData = async () => {
        const response = await Fetcher(QUERY_PAGINA)
        setData(response?.findPaginaExperienciasSingleton?.data)
    };

    const getDataList = async () => {
        const responseList = await Fetcher(QUERY_CATEGORIA('categoria', params.categoria));
        const dataList = responseList?.queryExperienciaContents;
        setDataList(dataList);
        setDataListOriginal(dataList);
    };

    useEffect(() => {
        getData();
        getDataList();
    }, []);

    const handleChange = (selectedValue: string) => {
        if (selectedValue === '') {
            setDataList(dataListOriginal);
        } else {
            const filteredData = dataListOriginal.filter((item: any) => item?.data?.nome?.iv === selectedValue);
            setDataList(filteredData);
        }
    };

    return (
        <main className={S.container}>
            {data?.banners?.iv &&
                <CoverSlide content={data?.banners?.iv}
                />}
            {data?.titulo?.iv &&
                <TitlePage
                    title={data?.titulo?.iv}
                />
            }

            <section className={`limited_container ${S.history_box}`}>
                <div className={` ${S.text_box} text_color`} >
                    {data?.subTitulo?.iv && <h3>{data?.subTitulo?.iv}</h3>}
                    {data?.conteudo?.iv && <div>
                        {data?.conteudo?.iv && parse(data?.conteudo?.iv)}

                    </div>}
                </div>
            </section>

            {dataList &&
                dataList[0]?.data?.categoria?.iv[0] &&
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
                                {dataListOriginal.map((nome: any, index: number) => (
                                    <option key={index} value={nome?.data?.nome?.iv}>{nome?.data?.nome?.iv}</option>
                                ))}
                            </select>
                        )}
                    />
                </div>}

            {dataList && <ListContent content={dataList} origin='experiencias' categoria={true} />}
            <Enphasis />
            {dataList && <Navigation local='Experiência' category={dataList[0]?.data?.categoria?.iv[0]} />}
        </main>
    )
}


export default Page

