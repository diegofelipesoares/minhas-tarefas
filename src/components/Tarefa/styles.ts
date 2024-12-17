import styled from "styled-components";
import variaveis from "../../styles/variaveis";

type TagProps = {
  recuperaPrioridades?: string
  recuperaStatus?: string
}

function retornaCorDeFundo(props: TagProps): string {
  if('status' in props) {
    if (props.recuperaStatus === 'pendente') return variaveis.amarelo
    if (props.recuperaStatus === 'concluída') return variaveis.verde
  } else if ('prioridade' in props){
    if (props.recuperaPrioridades === 'urgente') return variaveis.vermelho
    if (props.recuperaPrioridades === 'importante') return variaveis.amarelo2
  }
  return "#ccc"
}

export const Card = styled.div`
  background-color: #fcfcfc;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
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

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`