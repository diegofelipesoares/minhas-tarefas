import Tarefa from "../../components/Tarefa"
import { Container, Lista, ResumoFiltros } from "./styles"
const ListaDeTarefas = () => (
  <Container>
    <ResumoFiltros>2 tarefas marcadas como: "categoria" e "termo"</ResumoFiltros>
    <ul>
      <Lista><Tarefa /></Lista>
      <Lista><Tarefa /></Lista>
      <Lista><Tarefa /></Lista>
      <Lista><Tarefa /></Lista>
      <Lista><Tarefa /></Lista>
    </ul>
  </Container>
)

export default ListaDeTarefas
