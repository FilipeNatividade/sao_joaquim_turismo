import React from 'react'
import S from './lista.module.scss'
import { Detail } from '@/components/Detail/layout'
import { CoverSlide } from '@/components/coverSlide/layout'
import { Enphasis } from '@/components/Enphasis/layout'
import { Fetcher } from '@/api/server'
import { QUERY_CATEGORIA, QUERY_PAGINA } from '../../query'


const Page = async ({ params }: any) => {


    const response = await Fetcher(QUERY_PAGINA)
    const data = response?.findPaginaExperienciasSingleton?.data

    const responseFilter = await Fetcher(QUERY_CATEGORIA('slug', params.slug))
    const dataFilter = responseFilter?.queryExperienciaContents

    return (
        <div>
            {data?.banners?.iv && <CoverSlide content={data?.banners?.iv} />}
            <main
                className={`limited_container ${S.main}`
                }
            >
            </main>
            {dataFilter[0]?.data && <Detail content={dataFilter[0]?.data} />}
            <Enphasis />
        </div>
    )
}

export default Page