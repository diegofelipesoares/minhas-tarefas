import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefa'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({legenda, criterio, valor}: Props) =>{
    //para atualização do estado - useDispatch()
    const dispatch = useDispatch()
    //useSelector para acessar o estado
    const { filtro, tarefas } = useSelector((state: RootReducer) => state)

    //fazendo a demonstração do card q está ativo
    const verificaEstaAtivo = () => {
      const mesmoCriterio = filtro.criterio === criterio
      const mesmoValor = filtro.valor === valor
      //retorna apenas os valores verdadeiros para critério e valor.
      return mesmoCriterio && mesmoValor
    }

    //retornando a quantidade de itens por card.
    const contarTarefas = () =>{
      if (criterio === 'todas') return tarefas.length
      if (criterio === 'prioridade') {
        return tarefas.filter((item) => item.prioridade === valor).length
      }
      if (criterio === 'status') {
        return tarefas.filter((item) => item.status === valor).length
      }
    }

    const filtrar = () => {
      dispatch(alterarFiltro({
        criterio,
        valor
      }))
    }

    const contador = contarTarefas()
    const ativo = verificaEstaAtivo()

  return(
    //utilizando cada const de estilo criado
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador} </S.Contador>
      <S.Label>{legenda} </S.Label>
    </S.Card>
  )

}


export default FiltroCard
