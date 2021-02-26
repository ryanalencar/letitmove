import { useContext } from 'react'
import styled from 'styled-components'
import { ChallengeContext } from '../../contexts/ChallengeContext'

const ChallengesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 3.5rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid #d7d8da;
  font-weight: 500;

  & > span:first-child {
    font-size: 1.25rem;
  }

  & > span:last-child {
    font-size: 1.5rem;
  }
`

function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengeContext)

  return (
    <ChallengesContainer>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </ChallengesContainer>
  )
}

export default CompletedChallenges
