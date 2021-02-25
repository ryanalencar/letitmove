import { useContext } from 'react'
import { CountdownContext } from '../../contexts/CountDown'
import { CountdownButton, CountdownContainer } from './styles'

function Countdown() {
  const { minutes, seconds, hasFinished, isActive, resetCountdown, startCountdown } = useContext(
    CountdownContext
  )
  const [minLeft, minRight] = String(minutes).padStart(2, '0').split('')
  const [secLeft, secRight] = String(seconds).padStart(2, '0').split('')

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
      {hasFinished ? (
        <CountdownButton disabled>Ciclo Encerrado</CountdownButton>
      ) : (
        <CountdownButton
          type="button"
          onClick={isActive ? resetCountdown : startCountdown}
          active={isActive}
        >
          {isActive ? 'Abandonar Ciclo' : 'Iniciar um ciclo'}
        </CountdownButton>
      )}
    </div>
  )
}

export default Countdown
