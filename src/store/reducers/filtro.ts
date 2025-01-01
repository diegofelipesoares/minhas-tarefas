//IMPORTAÇÕES
  //externo slice
  import { createSlice, PayloadAction } from '@reduxjs/toolkit'
  //internos enums
  import * as enums from '../../utils/enums/Tarefa'


//TIPAGEM
  type FiltroState = {
    // é o que o usuário digitará no campo de busca
    termo?: string
    //critério de filtragem (filtrar por:)
    criterio: 'prioridade' | 'status' | 'todas'
    //Será preenchido pelo arquivo de Enums
    valor?: enums.Prioridade | enums.Status
  }

//Criando um instancia de FiltroState para valor inicial
const initialState: FiltroState = {
  termo: '',
  criterio: 'todas'
}


//SLICE DO ESTADO PARA FILTRO
  const filtroSlice = createSlice({
    //configurações do Slice
    name: 'filtro',
    initialState,
    //Action - criando a função de alteração
    reducers: {
      alteraTermo: (state, action: PayloadAction<string>) => {
        //o atributo "termo" recebe dados do payload como tipo string.
        state.termo = action.payload
      },
      alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
        state.criterio = action.payload.criterio
        state.valor = action.payload.valor
      }
    }
  })

  //Exportando o actions do slice
  export const { alteraTermo, alterarFiltro } = filtroSlice.actions
  //Exportando o reducer
  export default filtroSlice.reducer
