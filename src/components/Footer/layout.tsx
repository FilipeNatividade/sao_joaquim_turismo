import React from 'react'
import Image from 'next/image'

import S from './footer.module.scss'
import brasao from '../../assets/brasao.png'
import brasaoTurismo from '@/assets/Logo-secretaria-turismo 1.png'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Footer = () => {

    return (
        <main className={S.container}>
            <a href="#top" className={S.top_btn}>
                <ArrowCircleUpIcon />
            </a>
            <div className={`limited_container ${S.content_box}`}>

                <div
                    className={S.img_box}>
                    <section className={`${S.section} ${S.section_logo}`}>
                        <img src={`${brasaoTurismo.src}`} alt="" />
                    </section>
                    <section className={`${S.section} ${S.section_logo}`}>
                        <img src={`${brasao.src}`} alt="" />
                    </section>
                </div>

                <section className={`${S.section} ${S.info}`}>
                    <div className={S.medias}>
                        <FacebookIcon />
                        <InstagramIcon />
                        <YouTubeIcon />
                        <WhatsAppIcon />
                    </div>

                    <p>
                        Telefone: <span>(xx) x-xxx-xxxxx</span>
                    </p>
                    <p>
                        Email: <span> email@email.com.br</span>
                    </p>
                    <div className={S.address}>
                        <p>Endereço:</p>
                        <div className={S.address_content}>
                            <span> rua google maps</span>
                            <span> SC</span>
                            <span> xxxxxx</span>
                        </div>
                    </div>
                </section>

                <section className={`${S.section} ${S.btn_box}`}>

                    <h3>Ficou com alguma dúvida?</h3>
                    <a href='/contato' className={`${S.btn_contact}`}>
                        Fale conosco
                    </a>
                </section>
            </div>
            <div className={S.reserved}>Direitos reservados. Secretaria de turismo de São Joaquim</div>
        </main>
    )
}

export default Footer