import React from 'react'
import S from './lista.module.scss'
import { Detail } from '@/components/Detail/layout'
import { CoverSlide } from '@/components/coverSlide/layout'
import { Enphasis } from '@/components/Enphasis/layout'

const content =
    [{
        src: 'https://picsum.photos/200/300',
        title: 'titulo 1'
    },
    {
        src: 'https://picsum.photos/200/300',
        title: 'titulo 1'
    },
    {
        src: 'https://picsum.photos/200/300',
        title: 'titulo 1'
    },
    {
        src: 'https://picsum.photos/200/300',
        title: 'titulo 1'
    },
    {
        src: 'https://picsum.photos/200/300',
        title: 'titulo 1'
    }]


type DetalheProps = {
    params: {
        slug: string
    }
}

const Page = ({ params }: DetalheProps) => {



    return (
        <div >
            <CoverSlide content={content} />
            <main className={`limited_container padding_container  ${S.main}`}>
                <Detail content={params.slug} />
                <Enphasis />
            </main>
        </div>
    )
}

export default Page