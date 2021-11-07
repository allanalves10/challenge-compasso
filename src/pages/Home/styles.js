import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export const AreaLogin = styled.div`
  align-items: center;
  background: #d1d1d1;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  height: 80vh;
  justify-content: center;
  margin: auto;
  width: 50vw;

  img {
    height: 10rem;
    width: 20rem;
  }

  a {
    background: #000000;
    border: 1px solid #000000;
    border-radius: 0.5rem;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1.2rem;
    text-decoration: none;
    transition: all 0.2s;

    &:hover {
      background: #fff;
      color: #000000;
    }
  }

  p {
    color: #000000;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;