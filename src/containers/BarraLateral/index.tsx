//importações externas
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

//impotações internas
import FiltroCard from "../../components/FiltroCard"
import { Aside, Filtros } from "./styles"
import { RootReducer } from '../../store'
import { alteraTermo } from "../../store/reducers/filtro"
import * as enums from '../../utils/enums/Tarefa'
import { Botao, Campo } from "../../styles"

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros}: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <Aside>
      {/* Ternário que decide entre mostrar filtros ou botão de voltar para página home */}
      {mostrarFiltros ? (
        <>
        <div>
          <Campo
            type="text"
            placeholder="Procurar"
            value={termo}
            onChange={(evento) => dispatch(alteraTermo(evento.target.value))}/>
          <Filtros>
            <FiltroCard valor={enums.Status.PENDENTE} criterio="status" legenda="pendentes" />
            <FiltroCard valor={enums.Status.CONCLUIDA} criterio="status" legenda="concluídas"/>
            <FiltroCard valor={enums.Prioridade.URGENTE} criterio="prioridade" legenda="urgentes"/>
            <FiltroCard valor={enums.Prioridade.IMPORTANTE} criterio="prioridade" legenda="importantes"/>
            <FiltroCard valor={enums.Prioridade.NORMAL} criterio="prioridade" legenda="normal"/>
            <FiltroCard criterio="todas" legenda="todas"/>
          </Filtros>
        </div>
        </>
      ) :
      (<Botao onClick={() => navigate('/')}>Voltar a lista de Tarefas</Botao>)}
  </Aside>
  )
}

export default BarraLateral
