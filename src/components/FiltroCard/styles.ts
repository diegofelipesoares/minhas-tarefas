import styled from "styled-components"

type Props ={
  ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: ${(props) => (props.ativo ? '#1E90FF':'#a1a1a1')};
  background-color:${(props) => (props.ativo ? '#FFF':'#FCFCFC')};
  color:${(props) => (props.ativo ? '#1E90FF':'#5E5E5E')};
  border-radius: 8px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
