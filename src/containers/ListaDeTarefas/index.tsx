import Tarefa from "../../components/Tarefa"
import { Container, Lista, ResumoFiltros } from "./styles"

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'Baixar fatura do Gmail',
    prioridade: 'urgente',
    status: 'concluída'
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Fazer o treino B',
    prioridade: 'importante',
    status: 'pendente'
  },
]

const ListaDeTarefas = () => (
  <Container>
    <ResumoFiltros>2 tarefas marcadas como: "categoria" e "termo"</ResumoFiltros>

    <ul>
      {tarefas.map((t) => (
        <Lista key={t.titulo}>
          <Tarefa descricao={t.descricao} titulo={t.titulo} prioridade={t.prioridade} status={t.status}/>
        </Lista>
      ))}
    </ul>

  </Container>
)

export default ListaDeTarefas
