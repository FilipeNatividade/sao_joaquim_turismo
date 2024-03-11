'use client'

import React, { useEffect, useState } from 'react'
import { Detail } from '@/components/Detail/layout'
import { CoverSlide } from '@/components/coverSlide/layout'
import { Enphasis } from '@/components/Enphasis/layout'
import { Fetcher } from '@/api/server'
import { QUERY, QUERY_RESTAURANTES } from '../query'
import { Navigation } from '@/components/Navigation/layout'


const Page = ({ params }: any) => {
    const [data, setData] = useState<any>(null)
    const [dataFilter, setDataFilter] = useState<any>(null)

    const getData = async () => {
        const response = await Fetcher(QUERY)
        setData(response?.findPaginaRestaurantesSingleton?.data)
    }

    const getDataFilter = async () => {
        const response = await Fetcher(QUERY_RESTAURANTES('slug', params.slug[0]))
        const responseFilter = response?.queryRestauranteContents
        setDataFilter(responseFilter)
    }

    useEffect(() => {
        getData()
        getDataFilter()
    }, [])

    return (
        <div  >
            {data && <CoverSlide content={data?.banners?.iv} />}
            {dataFilter && <Detail content={dataFilter[0]?.data} />}
            <Enphasis />
            {dataFilter && <Navigation local='nossa gastronomia'
                category={dataFilter[0]?.data?.nome?.iv}
            />}
        </div>
    )
}

export default Page