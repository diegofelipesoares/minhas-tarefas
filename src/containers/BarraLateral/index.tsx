import FiltroCard from "../../components/FiltroCard"
import { Aside, Filtros, Campo } from "./styles"

const BarraLateral = () => (
  <Aside>
    <div>
      <Campo type="text" placeholder="Procurar" />
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

export default BarraLateral
