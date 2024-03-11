'use client'

import React, { useEffect, useState } from 'react'
import { Detail } from '@/components/Detail/layout'
import { CoverSlide } from '@/components/coverSlide/layout'
import { Enphasis } from '@/components/Enphasis/layout'
import { Fetcher } from '@/api/server'
import { QUERY, QUERY_ATRACAO } from '../query'
import { Navigation } from '@/components/Navigation/layout'


const Page = ({ params }: any) => {
    const [data, setData] = useState<any>(null)
    const [dataFilter, setDataFilter] = useState<any>(null)
    console.log(dataFilter)

    const getData = async () => {
        const response = await Fetcher(QUERY)
        setData(response?.findPaginaAtracoesSingleton?.data)
    }

    const getDataFilter = async () => {
        const responseFilter = await Fetcher(QUERY_ATRACAO('slug', params.slug[0]))
        const dataFilterResponse = responseFilter?.queryAtracaoContents[0]
        setDataFilter(dataFilterResponse)
    }

    useEffect(() => {
        getData()
        getDataFilter()
    },[])

    return (
        <div  >
            {data?.banners?.iv && <CoverSlide content={data?.banners?.iv} />}

            {dataFilter?.data && <Detail content={dataFilter?.data} />}
            <Enphasis />
            {dataFilter?.data?.nome?.iv && <Navigation local='Atrações'
                category={dataFilter.data?.nome?.iv}
            />}
        </div>
    )
}

export default Page