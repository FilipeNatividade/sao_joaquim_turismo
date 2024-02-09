import React from 'react'
import S from './listContent.module.scss'
import parse from 'html-react-parser'

const ListContent = ({ content, origin, categoria }: any) => {

    //funçãop para fazer o map renderizar de maneira aleatoria
    const randomSort = () => Math.random() - 0.5;
    const randomArray = content.sort(randomSort)

    return (
        <main className={`limited_container ${S.container}`} >
                    {randomArray.map((item: any, index: number) => (
                        <div key={index} className={`${S.content}`}>
                            <a 
                                className={S.link}
                                href={
                                    categoria &&
                                        item?.data?.categoria?.iv ?
                                        `/${origin}/${item?.data?.categoria?.iv}/${item?.data?.slug?.iv}`
                                        : `/${origin}/${item?.data?.slug?.iv}`
                                } >
                                {item?.data?.resumoImagem?.iv &&
                                    <div
                                        style={{
                                            backgroundImage: `url(${item?.data?.resumoImagem?.iv[0]?.url})
                                        `,
                                        }}
                                        className={S.img} />}
                            </a>
                            {item?.data?.nome?.iv && <h5>{item?.data?.nome?.iv}</h5>}
                            {item?.data?.resumo?.iv &&
                                parse(item?.data?.resumo?.iv)
                            }
                        </div>
                    ))
                }
        </main>
    )

}

export default ListContent