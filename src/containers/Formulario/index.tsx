import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, MainContainer, Titulo } from "../../styles"
import { Campo } from "../../styles"
import { Form, Opcoes, Opcao } from "./styles"
import * as enums from '../../utils/enums/Tarefa'
import Tarefa from '../../models/Tarefa'
import { cadastrar } from '../../store/reducers/tarefas'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState ('')
  const [prioridade, setPrioridade] = useState (enums.Prioridade.NORMAL)

const cadastrarTarefa = (evento: FormEvent) =>{
  //impedir a atualização automática da página ao clicar no botão
  evento.preventDefault()
  //fazer a importação de Tarefa do models/tarefa
  const tarefaParaAdicionar = new Tarefa(
    titulo,
    prioridade,
    enums.Status.PENDENTE,
    descricao,
    //colocamos o id por enquanto 9 a fim de teste.
    9
  )
  //cadastra vem do reducer e tarefasParaAdicionar é a const que cria o objeto acima.
  dispatch(cadastrar(tarefaParaAdicionar))
  // depois realizar o cadastro, volta para página inicial
  navigate('/')
}

  return(
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>

        <Form onSubmit={cadastrarTarefa}>
          <Campo
          value={titulo} onChange={evento => setTitulo(evento.target.value)}
          type="text"
          placeholder="Título" />

          <Campo
          value={descricao} onChange={({target}) => setDescricao(target.value)}
          as="textarea" placeholder="Descrição da tarefa" />

          <Opcoes>
            <p>Prioridade</p>
            {Object.values(enums.Prioridade).map(prioridade =>(
              <Opcao key={prioridade}>
                <input value={prioridade}
                name="prioridade"
                type="radio"
                onChange={evento => setPrioridade(evento.target.value as enums.Prioridade)}
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
                /> {' '}
                <label htmlFor={prioridade}>{prioridade}</label>
              </Opcao>
            ))}
          </Opcoes>

          <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
        </Form>
    </MainContainer>
  )
}

export default Formulario
