import { useDispatch, useSelector } from "react-redux"
import FiltroCard from "../../components/FiltroCard"
import { Aside, Filtros, Campo } from "./styles"
import { RootReducer } from '../../store'
import { alteraTermo } from "../../store/reducers/filtro"

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <Aside>
    <div>
      <Campo
        type="text"
        placeholder="Procurar"
        value={termo}
        onChange={(evento) => dispatch(alteraTermo(evento.target.value))}/>
      <Filtros>
        <FiltroCard legenda="pendentes" contador={1} />
        <FiltroCard legenda="concluídas" contador={2}/>
        <FiltroCard legenda="urgentes" contador={3} ativo/>
        <FiltroCard legenda="importantes" contador={4}/>
        <FiltroCard legenda="normal" contador={5}/>
        <FiltroCard legenda="todas" contador={10}/>
      </Filtros>
    </div>
  </Aside>
  )
}

export default BarraLateral
