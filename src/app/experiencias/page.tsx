'use client'

import React, { useEffect, useState } from 'react'
import S from './experience.module.scss'
import { CoverSlide } from '@/components/coverSlide/layout'
import { Enphasis } from '@/components/Enphasis/layout';
import { Fetcher } from '@/api/server';
import { QUERY_MACRO_EXPERIENCE } from './query';
import { Navigation } from '@/components/Navigation/layout';
import ComponentExperiences from '@/components/ComponentExperiencias/page';



const Page = () => {
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
            {data && <CoverSlide content={data?.banners?.iv} />}
            <ComponentExperiences />
            <Enphasis />
            {data && <Navigation local='Experiências' />}
        </main>
    )
}

export default Page