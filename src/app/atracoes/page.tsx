import React from 'react'
import ListContent from '@/components/ListContent/layout'
import S from './lista.module.scss'
import { CoverSlide } from '@/components/coverSlide/layout'
import { Enphasis } from '@/components/Enphasis/layout'
import { Fetcher } from '@/api/server'
import { QUERY, QUERY_LIST } from './query'
import parse from 'html-react-parser'

const Page = async ({ params }: any) => {

    const response = await Fetcher(QUERY)
    const data = response?.findPaginaAtracoesSingleton?.data

    const responseList = await Fetcher(QUERY_LIST)
    const dataList = responseList?.queryAtracaoContents

    const publics = ['solteiro', 'casal', 'familia', 'grupo', 'torcida', 'livre']

    return (
        <div>
            {data?.banners?.iv && <CoverSlide content={data?.banners?.iv} />}

            <main className={`limited_container padding_container  ${S.main}
`}>

                <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>

                    {data?.titulo?.iv && <h1>

                        {data?.titulo?.iv}

                    </h1>}

                    <select name="" id="" style={{ width: '50%' }} >
                        {
                            publics.map((p: any) => (
                                <option key={p} value={p}>{
                                    p
                                }</option>
                            ))
                        }
                    </select>
                </div>


                {params?.categoria && <h3>

                    {
                        `${params?.categoria?.charAt(0).toUpperCase()}${params?.categoria?.slice(1)}`
                    }

                </h3>}

                {data?.subTitulo?.iv && parse(data?.subTitulo?.iv)}

                {data?.conteudo?.iv && parse(data?.conteudo?.iv)}

                <ListContent content={dataList} origin='atracoes' categoria={null} />

                <Enphasis />

            </main>

        </div>
    )
}

export default Page