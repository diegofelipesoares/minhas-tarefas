//importações externas
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"

//importação internas
import  * as S from "./styles"
import * as enums from '../../utils/enums/Tarefa'
import { remover, editar } from "../../store/reducers/tarefas"

//Tipagem
type Props = {
  id: number
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
}

//atributo das props
const Tarefa =
({
    descricao: descricaoOriginal,
    prioridade,
    status,
    titulo, id
  }:Props) =>
  {
    const [estaEditando, setEstaEditando] = useState(false)
    const dispatch = useDispatch();
    const [descricao, setDescricao] = useState('')

    useEffect(() => {
      if(descricaoOriginal.length > 0) {
        setDescricao(descricaoOriginal)
      }
    }, [descricaoOriginal]
  )

  //função das actions nos Botões
  function cancelarEdicao(){
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  return(
    <S.Card>
      <S.Titulo> {titulo} </S.Titulo>
      <S.Tag parametro='prioridade' recuperaPrioridades={prioridade}> {prioridade} </S.Tag>
      <S.Tag parametro='status' recuperaStatus={status}> {status} </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value = {descricao}
        onChange={(evento) => setDescricao(evento.target.value)}>
      </S.Descricao>

      <S.BarraAcoes>
        {/* Ternário para troca de botões */}
        {estaEditando ?
          (
            <>
              <S.BotaoSalvar
              onClick={()=> {dispatch(
                editar({
                  descricao,
                  prioridade,
                  status,
                  titulo,
                  id
                })
              )
              setEstaEditando(false)
            }}
              >
                Salvar</S.BotaoSalvar>
              <S.BotaoCancelarRemover onClick={cancelarEdicao}>Cancelar</S.BotaoCancelarRemover>
            </>
          ):(
          <>
            <S.Botao onClick={()=> setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>Remover</S.BotaoCancelarRemover>
          </>
          )
        }
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
