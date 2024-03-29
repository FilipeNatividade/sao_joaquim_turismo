export const QUERY = `
    query{
        findPaginaAtracoesSingleton{
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
                conteudo{
                    iv
                }
                subTitulo{
                    iv
                }
                titulo{
                    iv
                }
            }
        }
    }
`

export const QUERY_LIST_ATTRACTIONS= `
query{
    queryAtracaoContents{
        data{
            categoria{
                iv
            }
            descritivo{
                iv
            }
            detalheConteudo{
                iv
            }
            duracao{
                iv
            }
            imagens{
                iv{
                    url
                }
            }
            nome{
                iv
            }
            publico{
                iv
            }
            resumo{
                iv
            }
            resumoImagem{
                iv{
                    url
                }
            }
            secoes{
                iv{
                    conteudo
                    galeria{
                        url
                    }
                    titulo
                }
            }
            slug{
                iv
            }
        }
    }
}
`

export const QUERY_ATRACAO = (option: any, params: any) => {

    return `
        query{
            queryAtracaoContents(filter:"data/${option}/iv eq '${params}'"){
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
                iv{
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