'use client'

import React from 'react'
import S from './titlePage.module.scss'

export const TitlePage = ({ preTitle, title }: any) => {
    return (
        <main
            className={`${S.box_title} 
        limited_container`}
        >
            {preTitle && <span className={S.pre_title}>{preTitle}</span>}
            {title && <h1 className={S.principal_title}>{title}</h1>}
        </main>
    )
}
