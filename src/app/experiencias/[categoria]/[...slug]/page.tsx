'use client'

import React, { useEffect, useState } from 'react'
import { Detail } from '@/components/Detail/layout'
import { CoverSlide } from '@/components/coverSlide/layout'
import { Enphasis } from '@/components/Enphasis/layout'
import { Fetcher } from '@/api/server'
import { QUERY_CATEGORIA, QUERY_PAGINA } from '../../query'


const Page = ({ params }: any) => {
    const [data, setData] = useState<any>();
    const [dataFilter, setDataFilter] = useState<any>();

    const getData = async () => {
        const response = await Fetcher(QUERY_PAGINA)
        setData(response?.findPaginaExperienciasSingleton?.data)
    };

    const getDataFilter = async () => {
        const responseFilter = await Fetcher(QUERY_CATEGORIA('slug', params.slug));
        const dataFilter = responseFilter?.queryExperienciaContents;
        setDataFilter(dataFilter);
    };

    useEffect(() => {
        getData();
        getDataFilter();
    }, []);

    return (
        <div>
            {data && <CoverSlide content={data?.banners?.iv} />}
            {dataFilter && <Detail content={dataFilter[0]?.data} />}
            <Enphasis />
        </div>
    )
}

export default Page