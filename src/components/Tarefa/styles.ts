import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { Botao } from "../../styles";

import * as enums from '../../utils/enums/Tarefa'

type TagProps = {
  recuperaPrioridades?: enums.Prioridade
  recuperaStatus?: enums.Status
  parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if(props.parametro === 'prioridade'){
    if (props.recuperaPrioridades === enums.Prioridade.URGENTE) return variaveis.vermelho
    if (props.recuperaPrioridades === enums.Prioridade.IMPORTANTE) return variaveis.amarelo2
  } else {
    if (props.recuperaStatus === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.recuperaStatus === enums.Status.CONCLUIDA) return variaveis.verde
  }
    return "#ccc"
}

export const Card = styled.div`
  background-color: #fcfcfc;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 16px;
  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
 padding: 4px 8px;
 font-size: 10px;
 font-weight: bold;
 color: #fff;
 background-color: ${(props) => retornaCorDeFundo(props)};
 border-radius: 8px;
 margin-right: 16px;
 display: inline-block;
`

export const Descricao = styled.textarea`
  color:#8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  height: 88px;
  margin-top: 16px;
  padding: 8px;
  margin-bottom: 16px;
  resize: none;
  background-color: transparent;
  border: none;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
