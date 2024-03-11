export const QUERY = `
query{
  findPaginaRestaurantesSingleton{
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

export const QUERY_LIST_COOKING = `
  query{
    queryRestauranteContents{
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
        local{
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
        imagens{
          iv{
            url
          }
        }
        slug{
          iv
        }
        
      }
    }
  }
`

export const QUERY_RESTAURANTES = (option: any, params: any) => {

  return `
        query{
          queryRestauranteContents(filter:"data/${option}/iv eq '${params}'"){
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
                local{
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
                imagens{
                  iv{
                    url
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