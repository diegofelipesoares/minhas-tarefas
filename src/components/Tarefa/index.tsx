import { useState } from "react"
import  * as S from "./styles"

type Props = {
  titulo: string
  prioridade: string
  status: string
  descricao: string
}

const Tarefa = ({descricao,prioridade,status,titulo}:Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return(
    <S.Card>
      <S.Titulo> {titulo} </S.Titulo>
      <S.Tag recuperaPrioridades={prioridade}> {prioridade} </S.Tag>
      <S.Tag recuperaStatus={status}> {status} </S.Tag>
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
