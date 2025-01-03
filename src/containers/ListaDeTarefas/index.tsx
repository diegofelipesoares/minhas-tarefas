import { useSelector } from 'react-redux'
import Tarefa from "../../components/Tarefa"
import { Container, FiltroDestaque, Lista, ResumoFiltros } from "./styles"
import { RootReducer } from "../../store"
import { eachItem } from 'ajv/dist/compile/util'

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  const { termo, criterio, valor } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    let tarefasFiltradas = tarefas

    if(termo !== undefined){
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLocaleLowerCase().search(termo.toLocaleLowerCase()) > -1
      )

        if(criterio === 'prioridade'){
          tarefasFiltradas = tarefasFiltradas.filter(
            (item) => item.prioridade === valor
          )
        } else if (criterio === 'status'){
          tarefasFiltradas = tarefasFiltradas.filter(
            (item) => item.status === valor
          )
        }

        return tarefasFiltradas

    } else {
      return tarefas
    }
  }

  const fTarefas = filtraTarefas()

  return (
      <Container>
        <ResumoFiltros>
          {fTarefas.length} tarefas marcadas como: <FiltroDestaque> {criterio} {valor} </FiltroDestaque>
          {termo && termo.length > 0 && (
            <>
              <br />
              E termo de pesquisa: <FiltroDestaque>{termo}</FiltroDestaque>
            </>
          )}
         </ResumoFiltros>
        <ul>
          <li>{termo}</li>
          <li>{criterio}</li>
          <li>{valor}</li>
        </ul>
        <ul>
          {fTarefas.map((t) => (
            <Lista key={t.titulo}>
              <Tarefa
                id={t.id}
                descricao={t.descricao}
                titulo={t.titulo}
                prioridade={t.prioridade}
                status={t.status}
              />
            </Lista>
          ))}
        </ul>
      </Container>
  )
}

export default ListaDeTarefas
