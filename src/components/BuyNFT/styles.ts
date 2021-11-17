import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  > button {

    // CAIXA VERDE
    cursor: pointer;
    width: 100%;
    background-color: green;
    height: 3rem;
    color: white;
    font-size: larger;
    
  }
`;

export const NFTCard = styled.div`

// IMAGEM
  width: 20rem;
  height: 20rem;
  background-color: orange;
  display: flex;
  flex-direction: column; // ALTERAR PARA MUDAR O TEXTO
 // OPACIDADE opacity: 20%;
  align-items: center;
  > img {
    height: 100%;
    width: 100%;
  }
`;
