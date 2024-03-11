export const QUERY = `
query{
    findConfiguracaoSingleton{
      data{
        logoPrincipal{
          iv{
            url
          }
        }
        logoRodape{
          iv{
            url
          }
        }
      }
    }
  }
`