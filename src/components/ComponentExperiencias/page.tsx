'use client'

import React, { useEffect, useState } from 'react'
import S from './experience.module.scss'
import { SlideThree } from '@/components/CustomSlides/layout';
import { Fetcher } from '@/api/server';
import { QUERY_MACRO_EXPERIENCE } from './query';
import { TitlePage } from '@/components/TitlePage/layout';



const ComponentExperiences = () => {
    const [data, setData] = useState<any>();

    const getData = async () => {
        const response = await Fetcher(QUERY_MACRO_EXPERIENCE)
        setData(response?.findPaginaMacroExperienciasSingleton?.data)
    };

    useEffect(() => {
        getData();
    }, []);


    return (
        <main className={S.container_expirence} >
            <TitlePage preTitle={data?.preTitulo?.iv} title={data?.titulo?.iv} />
            {data && <div className={S.slide_container}>
                <SlideThree content={data?.carrossel?.iv} />
            </div>}
        </main>
    )
}

export default ComponentExperiences