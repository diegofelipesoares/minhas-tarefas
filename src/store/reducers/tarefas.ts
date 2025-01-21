import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    {
      titulo: "Estudar JavaScript",
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      descricao: "Conhecer o DOM",
      id: 1,
    },
    {
      titulo: "Estudar TypeScript",
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDA,
      descricao: "Rever aula 2 do módulo",
      id: 2,
    },
    {
      titulo: "Estudar React",
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      descricao: "Praticar o useEffect",
      id: 3,
    },
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      return state.filter(tarefa => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Tarefa>) =>{
      // Verificando se a tarefa já existe
      const tarefaJaExiste = state.find(
        (tarefa) =>
          tarefa.titulo.toLowerCase() === action.payload.titulo.toLowerCase()
      )
      //caso encontrada tarefa existente, mostra o alert.
      if (tarefaJaExiste){
        alert ('Já existe uma tarefa com esse nome')
      } else {
        //se não, faz o cadastro da tarefa
        state.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = tarefasSlice.actions

export default tarefasSlice.reducer
