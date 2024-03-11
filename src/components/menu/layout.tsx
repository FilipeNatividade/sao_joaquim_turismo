"use client";

import React, { useEffect, useState } from 'react'
import { MenuItem } from './types'
import S from './menu.module.scss'
import MenuDesktop from './menuDesktop/layout';
import MenuMobile from './menuMobile/layout';
import { QUERY } from './query';
import { Fetcher } from '@/api/server';



const Menu = () => {
    const [data, setData] = useState<any>()

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
            label: 'Onde Ficar',
            rota: '/hospedagem',
            submenus: []
        },
        {
            label: 'Nossa Gastronomia',
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

    const getData = async () => {
        const response = await Fetcher(QUERY)
        setData(response?.findConfiguracaoSingleton?.data)
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div className={` ${S.container}`} >
            <div className={S.menu_box}>
                <div >
                    {data?.logoPrincipal?.iv[0]?.url && <img className={S.coat_of_arms} src={`${data?.logoPrincipal?.iv[0]?.url}`} alt="brazão da cidade de são joaquim, SC"
                    />}
                </div>
                <MenuDesktop menus={menus} />
                <MenuMobile menus={menus} />
            </div>
        </div>
    )
}

export default Menu