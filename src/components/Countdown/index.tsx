import styled from 'styled-components'

const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};

  & > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }

  & > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${({ theme }) => theme.background};
    box-shadow: 0 0 68px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;
    }

    span:first-child {
      border-right: 1px solid #f0f1f3;
    }
    span:last-child {
      border-left: 1px solid #f0f1f3;
    }
  }
`

const CountdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  border: 0;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.blueDark};
  }
`

function Countdown() {
  return (
    <div>
      <CountdownContainer>
        <div>
          <span>2</span>
          <span>5</span>
        </div>
        <span>:</span>
        <div>
          <span>0</span>
          <span>0</span>
        </div>
      </CountdownContainer>
      <CountdownButton type="button">Iniciar um ciclo</CountdownButton>
    </div>
  )
}

export default Countdown
