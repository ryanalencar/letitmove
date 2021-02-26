import { useContext } from 'react'
import styled from 'styled-components'
import { ChallengeContext } from '../../contexts/ChallengeContext'

const Overlay = styled.div`
  background: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`
const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);
  text-align: center;
  position: relative;

  header {
    font-size: 8.75rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.blue};
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: 2.25rem;
    color: ${({ theme }) => theme.colors.title};
  }

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: transparent;
    border: 0;
    font-size: 0px;
  }
`

function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengeContext)
  return (
    <Overlay>
      <ModalContainer>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo nível</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </ModalContainer>
    </Overlay>
  )
}

export default LevelUpModal
