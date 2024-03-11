'use client'

import React, { useEffect, useState } from 'react'
import ListContent from '@/components/ListContent/layout'
import S from './lista.module.scss'
import { CoverSlide } from '@/components/coverSlide/layout'
import { Enphasis } from '@/components/Enphasis/layout'
import { Fetcher } from '@/api/server'
import { QUERY, QUERY_LIST_ATTRACTIONS } from './query'
import parse from 'html-react-parser'
import { Navigation } from '@/components/Navigation/layout'
import { TitlePage } from '@/components/TitlePage/layout'
import { useForm, Controller } from 'react-hook-form';

const Page = () => {
    const [data, setData] = useState<any>();
    const [dataList, setDataList] = useState<any>();
    const [dataListOriginal, setDataListOriginal] = useState<any>();
    const { control } = useForm();

    const getData = async () => {
        const response = await Fetcher(QUERY)
        setData(response?.findPaginaAtracoesSingleton?.data)
    };

    const getDataList = async () => {
        const responseList = await Fetcher(QUERY_LIST_ATTRACTIONS);
        const dataList = responseList?.queryAtracaoContents;
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
            const filteredData = dataListOriginal.filter((item: any) =>
                item?.data?.publico?.iv.includes(selectedValue)
            );
            setDataList(filteredData);
        }
    };

    const publics = [
        'Família',
        "Amigos",
        "Grupos",
        'Sozinho',
        "A trabalho"
    ]

    return (
        <main className={S.container} >
            {data?.banners?.iv && <CoverSlide content={data?.banners?.iv} />}
            <div
                className={`limited_container ${S.header_box}`}
            >
                {data?.titulo?.iv &&
                    <TitlePage
                        title={data?.titulo?.iv}
                    />
                }

            </div>
            <section className={`limited_container ${S.history_box}`}>
                <div className={` ${S.text_box}`} >
                    {data?.subTitulo?.iv && <h3>{data?.subTitulo?.iv}</h3>}
                    {data?.conteudo?.iv && <div>
                        {parse(data?.conteudo?.iv)}
                    </div>}
                </div>
            </section>
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
                            {publics.map((categoria: string, index: number) => (
                                <option key={index} value={categoria}>{categoria}</option>
                            ))}
                        </select>
                    )}
                />
            </div>
            {dataList && dataList.length > 0 ? (
                <ListContent content={dataList} origin='atracoes' categoria={false} />
            ) : (
                dataList !== null && dataList !== undefined && dataList.length === 0 && <p className='message_error'>Atração não encontrada para o publico desejado</p>
            )}
            <Enphasis />
            {data?.titulo?.iv && <Navigation local='Atrações' />}
        </main>
    )
}

export default Page