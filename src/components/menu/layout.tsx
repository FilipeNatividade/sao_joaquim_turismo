"use client";

import React from 'react'
import { MenuItem } from './types'
import S from './menu.module.scss'
import brasao from '@/assets/Logo-secretaria-turismo 1.png'
import MenuDesktop from './MenuDesktop/layout';
import MenuMobile from './MenuMobile/layout'



const Menu = () => {
    const menus: MenuItem[] = [
        {
            label: 'Início',
            rota: '/',
            submenus: []
        },
        {
            label: 'Nossa História',
            rota: '/nossaHistoria',
            submenus: []
        },
        {
            label: 'O que fazer',
            rota: '',
            submenus: [{
                label: 'Experiências',
                rota: '/experiencias',
            },
            {
                label: 'Atrações',
                rota: '/atracoes',
            },
            {
                label: 'Eventos',
                rota: '/eventos',
            },
            ]
        },
        {
            label: 'Hospedagem',
            rota: '/hospedagem',
            submenus: []
        },
        {
            label: 'Culinária',
            rota: '/culinaria',
            submenus: []
        },
        {
            label: 'Turismo',
            rota: '/turismo',
            submenus: []
        },
        {
            label: 'Contato',
            rota: '/contato',
            submenus: []
        },
    ]


    return (
        <div className={` ${S.container}`} >
            <div className={S.menu_box}>
                <div >
                    <img className={S.coat_of_arms} src={`${brasao.src}`} alt="brazão da cidade de são joaquim, SC"
                    />
                </div>
                <MenuDesktop menus={menus} />
                <MenuMobile menus={menus} />
            </div>
        </div>
    )
}

export default Menu