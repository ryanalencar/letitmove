import { useEffect, useState } from 'react'
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
  const [time, setTime] = useState(1 * 60)
  const [active, setActive] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minLeft, minRight] = String(minutes).padStart(2, '0').split('')
  const [secLeft, secRight] = String(seconds).padStart(2, '0').split('')

  const startCountdown = () => {
    setActive(true)
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }
  }, [active, time])

  return (
    <div>
      <CountdownContainer>
        <div>
          <span>{minLeft}</span>
          <span>{minRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secLeft}</span>
          <span>{secRight}</span>
        </div>
      </CountdownContainer>
      <CountdownButton type="button" onClick={startCountdown}>
        Iniciar um ciclo
      </CountdownButton>
    </div>
  )
}

export default Countdown
