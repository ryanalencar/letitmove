import { useContext } from 'react'
import { ChallengeContext } from '../../contexts/Challenge'
import {
  ChallengeBoxContainer,
  ChallengeActive,
  ChallengeHeader,
  ChallengeMain,
  ChallengeButton,
  ChallengeNotActive,
  ChallengeFooter
} from './styles'

function ChallengeBox() {
  const contextData = useContext(ChallengeContext)
  const hasActiveChallenge = true

  // console.log(contextData)

  return (
    <ChallengeBoxContainer>
      {hasActiveChallenge ? (
        <ChallengeActive>
          <ChallengeHeader>Ganhe 400 xp</ChallengeHeader>
          <ChallengeMain>
            <img src="icons/body.svg" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos</p>
          </ChallengeMain>
          <ChallengeFooter>
            <ChallengeButton type="button">Falhei</ChallengeButton>
            <ChallengeButton success type="button">
              Completei
            </ChallengeButton>
          </ChallengeFooter>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Inicie um ciclo para receber desafios a serem completados</strong>
          <div>
            <img src="icons/level-up.svg" alt="Level Up" />
            <p>Complete-os e ganhe experiência e avance de level</p>
          </div>
        </ChallengeNotActive>
      )}
    </ChallengeBoxContainer>
  )
}

export default ChallengeBox
