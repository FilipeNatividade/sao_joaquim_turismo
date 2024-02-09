import React from 'react'
import S from './experience.module.scss'
import { CoverSlide } from '@/components/coverSlide/layout'
import { Enphasis } from '@/components/Enphasis/layout';
import { SlideThree } from '@/components/CustomSlides/layout';
import { Fetcher } from '@/api/server';
import { QUERY_MACRO } from './query';
import { Navigation } from '@/components/Navigation/layout';
import { TitlePage } from '@/components/TitlePage/layout';



const Page = async () => {

    const response = await Fetcher(QUERY_MACRO)
    const data = response?.findPaginaMacroExperienciasSingleton?.data

    return (
        <main className={S.container_expirence} >
            <CoverSlide content={data?.banners?.iv} />
                <TitlePage preTitle={'vivências e sensações'} title={data?.titulo?.iv} />
                <div className={S.slide_container}>
                    <SlideThree content={data?.carrossel?.iv} />
                </div>
            <Enphasis />
            <Navigation local={data?.titulo?.iv}/>
        </main>
    )
}

export default Page