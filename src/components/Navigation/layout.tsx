'use client'

import React from 'react'
import S from './navigation.module.scss'

export const Navigation = ({ local, category }: any) => {
    return (
        <main className={`${S.container} limited_container`}>
            <div className={S.box_title}>
                <span className={S.pre_title}>você está em 	&#62; &#62;</span>
                {local && <h1 className={S.principal_title}>{local}</h1>}
                {category && <span className={` ${S.pos_title} ${S.pre_title}`}>&#62; &#62; {category}</span>}
            </div>
        </main>
    )
}
