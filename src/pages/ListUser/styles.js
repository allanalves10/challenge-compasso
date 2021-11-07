import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  `;

export const AreaFilter = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 2rem auto;
  min-height: 2rem;

  input {
    border-radius: 0.5rem 0 0 0.5rem;
    width: 39vw;
  }

  button {
    border: 1px solid #000000;
    background: #000000;
    border-radius: 0 0.5rem 0.5rem 0;
    color: #ffffff;
    font-weight: bold;
    transition: all 0.2s;
    width: 10vw;

    &:disabled {
      cursor: not-allowed;
    }

    &:hover {
      background: #ffffff;
      color: #000000;
    }

  }
`;

export const AreaUser = styled.div`
  align-items: center;
  background: #d1d1d1;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 40vh;
  justify-content: flex-start;
  margin: 0 auto;
  width: 50vw;

  img {
    border-radius: 50%;
    height: 10rem;
    width: 10rem;
  }

  span {
    display: flex;
    gap: 10px;
    font-size: 1.2rem;
    font-weight: bold;

    p {
      font-weight: 500;
    }
  }
`;

export const AreaChoice = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem auto;

  button {
    border: 1px solid #000000;
    background: #000000;
    border-radius: 0 0.5rem 0.5rem 0;
    color: #ffffff;
    font-weight: bold;
    padding: 1rem;
    transition: all 0.2s;
    width: 24.5vw;

    &:first-child {
      border-radius: 0.5rem 0 0 0.5rem;
    }

    &:hover {
      background: #ffffff;
      color: #000000;
    }
  }
`;

export const AreaStarred = styled.div`
  background: #d1d1d1;
  border-radius: 2rem;
  margin: auto;
  padding: 2rem;
  width: 50vw;

  ul {
    border-bottom: 1px solid #000000;
    li {
      display: flex;
      line-height: 2rem;
      font-weight: bold;
      gap: 1rem;

      p {
        font-weight: 500;
      }
    }
  }
`;

export const AreaRepos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #d1d1d1;
  border-radius: 2rem;
  margin: auto;
  padding: 2rem;
  width: 50vw;

  ul {
    border-bottom: 1px solid #000000;
    li {
      display: flex;
      line-height: 2rem;
      font-weight: bold;
      gap: 1rem;

      p {
        font-weight: 500;
      }
    }
  }
`;