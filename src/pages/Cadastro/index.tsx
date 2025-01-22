import BarraLateral from "../../containers/BarraLateral"
import Formulario from "../../containers/Formulario"

const Cadastro = () => (
  <>
  {/* Barra Lateral */}
  <BarraLateral mostrarFiltros={false}/>

  {/* Conteúdo Principal */}
  <Formulario />

  </>
)

export default Cadastro
