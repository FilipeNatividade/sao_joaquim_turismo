export const QUERY = `
    query{
        findPaginaSobreSingleton{
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
        conteudoSuperior{
            iv{
            subTitulo
            alinhamento
            conteudo
            imagem{
                url
            }
            }
        }
        video{
          iv
        }
        conteudoInferior{
            iv{
            subTitulo
            alinhamento
            conteudo
            imagem{
                url
            }
            }
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
        }
    }
    }
`