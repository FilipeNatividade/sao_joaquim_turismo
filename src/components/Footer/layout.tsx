'use client'

import React, { useEffect, useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Fetcher } from '@/api/server'
import { QUERY } from './query'
import S from './footer.module.scss'


const Footer =  () => {
    const [data, setData] = useState<any>(null)

    const getData = async () => {
        const response = await Fetcher(QUERY)
        setData(response?.findConfiguracaoSingleton?.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <main className={S.container}>
            <a href="#top" className={S.top_btn}>
                <ArrowCircleUpIcon />
            </a>
            <div className={`limited_container ${S.content_box}`}>
                <div
                    className={S.img_box}
                >
                    <section className={`${S.section} ${S.section_logo}`}>
                        <img src={`${data?.logoPrincipal?.iv[0]?.url}`} alt="" />
                    </section>
                    <section className={`${S.section} ${S.section_logo}`}>
                        <img src={`${data?.logoRodape?.iv[0]?.url}`} alt="" />
                    </section>
                </div>

                <section className={`${S.section} ${S.info}`}>
                    <div className={S.medias}>
                        {data?.social?.iv[0]?.facebook && <a target='_blank' href={data?.social?.iv[0]?.facebook
                        }>
                            <FacebookIcon />
                        </a>}
                        {data?.social?.iv[0]?.instaram && <a target='_blank' href={data?.social?.iv[0]?.instaram}>
                            <InstagramIcon />
                        </a>}

                        {data?.social?.iv[0]?.youtube && <a target='_blank' href={data?.social?.iv[0]?.youtube}>
                            <YouTubeIcon />
                        </a>}

                        {data?.social?.iv[0]?.whatsApp && <a
                            target='_blank'
                            href={`https://wa.me/55${data?.social?.iv[0]?.whatsApp}`}>
                            <WhatsAppIcon />
                        </a>}
                    </div>
                    {data?.social?.iv[0]?.telefone && <div className={S.line_info} >
                        <p>
                            Telefone:
                        </p>
                        <span>{data?.social?.iv[0]?.telefone}</span>
                    </div>}

                    {data?.social?.iv[0]?.email && <div className={S.line_info} >
                        <p>
                            Email:
                        </p>
                        <span>{data?.social?.iv[0]?.email}</span>
                    </div>}

                    {data?.social?.iv[0]?.endereco && <div className={S.line_info} >
                        <p>Endereço: </p>
                        <span
                            style={{
                                wordWrap: 'normal'
                            }}
                        >{data?.social?.iv[0]?.endereco}</span>
                    </div>}

                </section>

                <section className={`${S.section} ${S.btn_box}`}>

                    <h3>Ficou com alguma dúvida?</h3>
                    <a href='/contato' className={`${S.btn_contact}`}>
                        Fale conosco
                    </a>
                </section>
            </div>
            <div
                className={S.reserved}>
                Direitos reservados. Secretaria de Turismo de São Joaquim
            </div>
        </main>
    )
}

export default Footer