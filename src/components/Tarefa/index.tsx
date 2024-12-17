import { useState } from "react"
import  * as S from "./styles"
import * as enums from '../../utils/enums/Tarefa'


type Props = {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
}

const Tarefa = ({descricao,prioridade,status,titulo}:Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return(
    <S.Card>
      <S.Titulo> {titulo} </S.Titulo>
      <S.Tag parametro='prioridade' recuperaPrioridades={prioridade}> {prioridade} </S.Tag>
      <S.Tag parametro='status' recuperaStatus={status}> {status} </S.Tag>
      <S.Descricao value = {descricao} placeholder="Escreva aqui a sua tarefa."></S.Descricao>
      <S.BarraAcoes>
        {estaEditando ?
          (
            <>
              <S.BotaoSalvar>Salvar</S.BotaoSalvar>
              <S.BotaoCancelarRemover onClick={()=> setEstaEditando(false)}>Cancelar</S.BotaoCancelarRemover>
            </>
          ):(
          <>
            <S.Botao onClick={()=> setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover>Remover</S.BotaoCancelarRemover>
          </>
          )
        }
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
