import EstiloGlobal, { Container } from "./styles"
import BarraLateral from "./containers/BarraLateral"
import ListaDeTarefas from "./containers/ListaDeTarefas"
import store from './store'
import { Provider } from "react-redux"

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  )
}

export default App
