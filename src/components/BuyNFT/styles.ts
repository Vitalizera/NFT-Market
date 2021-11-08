import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  > button {
    cursor: pointer;
    width: 100%;
    background-color: blue;
    height: 3rem;
    color: white;
    font-size: larger;
  }
`;
export const NFTCard = styled.div`
  width: 20rem;
  height: 20rem;
  background-color: orange;
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    height: 100%;
    width: 100%;
  }
`;
