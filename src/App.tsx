import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider} from  'react-router-dom'

import BarraLateral from "./containers/BarraLateral"
import ListaDeTarefas from "./containers/ListaDeTarefas"
import EstiloGlobal, { Container } from "./styles"

import store from './store'
import Home from "./pages/Home"
import Cadastro from "./pages/Cadastro"

const rotas = createBrowserRouter([
  {
    //caminho inicial - Home
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
