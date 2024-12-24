import { useSelector } from 'react-redux'
import Tarefa from "../../components/Tarefa"
import { Container, Lista, ResumoFiltros } from "./styles"
import { RootReducer } from "../../store"

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return tarefas.filter((item) => item.titulo.toLocaleLowerCase().search(termo.toLocaleLowerCase()) > 0)
  }

  return (
      <Container>
        <ResumoFiltros>2 tarefas marcadas como: "categoria" e {termo}</ResumoFiltros>
        <ul>
          {filtraTarefas().map((t) => (
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
