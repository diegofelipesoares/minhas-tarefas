//importações externas
import { useState, useEffect, ChangeEvent } from "react"
import { useDispatch } from "react-redux"

//importação internas
import  * as S from "./styles"
import * as enums from '../../utils/enums/Tarefa'
import { remover, editar, alteraStatus } from "../../store/reducers/tarefas"
import { BotaoSalvar } from "../../styles"
import { Botao } from "../../styles"

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

  //Função chamada no checkbox
  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    //alterando o Estado "alteraStatus" em reducers/tarefa,
    // enviando true o false do click do check para "finalizado"
    // e o número do ID da tarefa que foi clicada.
    dispatch(alteraStatus({
      id,
      finalizado: evento.target.checked
    }))
  }

  //Definição do que aparece em cada card de tarefas.
  return(
    <S.Card>
      <label htmlFor={titulo}>
        <input type="checkbox" id={titulo}
        onChange={alteraStatusTarefa}
        checked={status === enums.Status.CONCLUIDA}
        />
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>
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
              <BotaoSalvar
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
                Salvar</BotaoSalvar>
              <S.BotaoCancelarRemover onClick={cancelarEdicao}>Cancelar</S.BotaoCancelarRemover>
            </>
          ):(
          <>
            <Botao onClick={()=> setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>Remover</S.BotaoCancelarRemover>
          </>
          )
        }
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
