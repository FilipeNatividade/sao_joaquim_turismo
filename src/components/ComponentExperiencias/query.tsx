export const QUERY_MACRO_EXPERIENCE=
    `
        query{
            findPaginaMacroExperienciasSingleton{
                data{
                    banners{
                        iv{
                            banner{
                              preTitulo
                              titulo
                              subTitulo
                              cartao
                              imagem{
                                url
                              }
                            }
                        }
                      }
                      preTitulo{
                        iv
                      }
                    titulo{
                        iv
                    }
                    carrossel{
                        iv{
                            titulo
                            apoio
                            categoria
                            imagem{
                                url
                            }
                        }
                    }
                }
            }
        }
    `

export const QUERY_PAGINA = `
    query{
        findPaginaExperienciasSingleton{
            data{
                banners{
                    iv{
                        banner{
                          preTitulo
                          titulo
                          subTitulo
                          cartao
                          imagem{
                            url
                          }
                        }
                    }
                  }
              titulo{
                iv
              }
              subTitulo{
                iv
              }
              conteudo{
                iv
              }
            }
        }
    }
`

export const QUERY_CATEGORIA = (option: any, params: any) => {

    return `
        query{
            queryExperienciaContents(filter:"data/${option}/iv eq '${params}'"){
            data{
                nome{
                iv
                }
                categoria{
                iv
                }
                publico{
                iv
                }
                duracao{
                iv
                }
                resumo{
                iv
                }
                resumoImagem{
                iv
                {
                url
                }
                }
                descritivo{
                iv
                }
                detalheConteudo{
                iv
                }
                imagens{
                iv{
                    url
                }
                }
                secoes{
                iv{
                    titulo
                    conteudo
                    galeria{
                    url
                    }
                }
                }
                slug{
                iv
                }
            }
            }
        }
    `
}