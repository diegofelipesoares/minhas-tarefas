import { useSelector } from 'react-redux'
import Tarefa from "../../components/Tarefa"
import { Container, Lista, ResumoFiltros } from "./styles"
import { RootReducer } from "../../store"

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)
  return (
      <Container>
        <ResumoFiltros>2 tarefas marcadas como: "categoria" e "termo"</ResumoFiltros>
        <ul>
          {tarefas.map((t) => (
            <Lista key={t.titulo}>
              <Tarefa
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
