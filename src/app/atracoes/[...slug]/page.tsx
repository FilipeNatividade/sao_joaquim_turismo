import React from 'react'
import S from './lista.module.scss'
import { Detail } from '@/components/Detail/layout'
import { CoverSlide } from '@/components/coverSlide/layout'
import { Enphasis } from '@/components/Enphasis/layout'
import { Fetcher } from '@/api/server'
import { QUERY, QUERY_ATRACAO } from '../query'


const Page = async ({ params }: any) => {


    const response = await Fetcher(QUERY)
    const data = response?.findPaginaAtracoesSingleton?.data

    const responseFilter = await Fetcher(QUERY_ATRACAO('slug', params.slug))
    const dataFilter = responseFilter?.queryAtracaoContents

    return (
        <div >

            {data?.banners?.iv && <CoverSlide content={data?.banners?.iv} />}


            <main
                className={
                    `limited_container padding_container
                  ${S.main}`
                }
            >

                {dataFilter[0]?.data && <Detail content={dataFilter[0]?.data} />}

            </main>

            <Enphasis />

        </div>
    )
}

export default Page