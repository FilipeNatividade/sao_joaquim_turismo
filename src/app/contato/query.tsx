export const QUERY_CONTATO = `
query{
    findPaginaContatoSingleton{
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
        informativo{
          iv
        }
        link{
          iv
        }
        linkAvaliacao{
          iv
        }
      }
    }
  }
`

export const QUERY_SERVICES= `
query{
  queryServicosContents(filter:"data/categoria/iv eq 'tradicional'"){
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
      link{
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
      slug{
        iv
      }
    }
  }
}
`