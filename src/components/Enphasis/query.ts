export const QUERY = `
    query{
        findConfiguracaoSingleton{
            data{
                carrossel{
                    iv{
                        titulo
                        preTitulo
                        itens{
                            imagem{
                                url
                            }
                            navegacao
                            titulo
                        }
                    }
                }
            }
        }
    }

`