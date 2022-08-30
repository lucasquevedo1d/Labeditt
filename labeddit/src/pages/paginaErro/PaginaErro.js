import React from 'react'
import Erro from '../../img/erro.jpg'
import { Error, H2 } from './Styles'
const PaginaErro = () => {
  return (
      <div>
   <Error src={Erro}></Error>
   <H2>Erro Página Não Encontrada ;(</H2>
   </div>
  )
}

export default PaginaErro