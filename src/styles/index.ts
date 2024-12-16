import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}
`
//criando container
export const Container = styled.div`
  display:grid;
  grid-template-columns: 224px auto;
  background-color: #125485;
`

export default EstiloGlobal
