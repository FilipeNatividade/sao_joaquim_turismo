import React from 'react'
import ListContent from '@/components/ListContent/layout'
import S from './lista.module.scss'
import { CoverSlide } from '@/components/coverSlide/layout'
import { Enphasis } from '@/components/Enphasis/layout'
import { Fetcher } from '@/api/server'
import parse from 'html-react-parser';
import { QUERY_CATEGORIA, QUERY_PAGINA } from '../query'
import { TitlePage } from '@/components/TitlePage/layout'
import { Navigation } from '@/components/Navigation/layout'



const Page = async ({ params }: any) => {

    const response = await Fetcher(QUERY_PAGINA)
    const data = response?.findPaginaExperienciasSingleton?.data

    const responseFilter = await Fetcher(QUERY_CATEGORIA('categoria', params.categoria))
    const dataFilter = responseFilter?.queryExperienciaContents

    return (
        <main className={S.container} >
            {data?.banners?.iv && <CoverSlide content={data?.banners?.iv} />}
            {dataFilter[0]?.data?.categoria?.iv[0] &&
                <TitlePage
                    preTitle={data?.titulo?.iv}
                    title={`${dataFilter[0]?.data?.categoria?.iv[0]?.charAt(0).toUpperCase()}${dataFilter[0]?.data?.categoria?.iv[0]?.slice(1)}`}
                />
            }
            <section className={`limited_container ${S.history_box}`}>
                <div className={` ${S.text_box}`} >
                    {data?.subTitulo?.iv && <h3>{data?.subTitulo?.iv}</h3>}
                    {data?.conteudo?.iv && <div>
                        {data?.conteudo?.iv && parse(data?.conteudo?.iv)}

                    </div>}
                </div>
            </section>
            <ListContent content={dataFilter} origin='experiencias' categoria={true} />
            <Enphasis />
            <Navigation local='Experiência' category={dataFilter[0]?.data?.categoria?.iv[0]}/>
        </main>
    )
}


export default Page

