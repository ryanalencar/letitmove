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
  const { activeChallenge, resetChallenge } = useContext(ChallengeContext)

  return (
    <ChallengeBoxContainer>
      {activeChallenge ? (
        <ChallengeActive>
          <ChallengeHeader>Ganhe {activeChallenge.amount} xp</ChallengeHeader>
          <ChallengeMain>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </ChallengeMain>
          <ChallengeFooter>
            <ChallengeButton type="button" onClick={resetChallenge}>
              Falhei
            </ChallengeButton>
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
