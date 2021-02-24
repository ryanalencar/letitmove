import { useEffect, useState } from 'react'
import { CountdownButton, CountdownContainer } from './styles'

let countdownTimeout: NodeJS.Timeout

function Countdown() {
  const [time, setTime] = useState(0.1 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minLeft, minRight] = String(minutes).padStart(2, '0').split('')
  const [secLeft, secRight] = String(seconds).padStart(2, '0').split('')

  const startCountdown = () => {
    setIsActive(true)
  }

  const resetCountdown = () => {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(0.1 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
    }
  }, [isActive, time])

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
