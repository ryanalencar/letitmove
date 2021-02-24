import styled, { css } from 'styled-components'

const ChallengeBoxContainer = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.4;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 1.5rem;
    text-align: left;

    p {
      line-height: 1.4;
    }

    img {
      width: 38%;
      height: 38%;
    }
  }
`

const ChallengeActive = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      font-weight: 600;
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.title};
      margin: 1.5rem 0 1rem;
    }

    p {
      line-height: 1.5;
    }
  }

  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`

const ChallengeHeader = styled.header`
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 600;
  font-size: 1.25rem;
  padding: 0 2rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.grayLine};
`

const ChallengeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  border: 0;
  outline: 0;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;

  ${({ success, theme }) =>
    success
      ? css`
          background: ${theme.colors.green};
        `
      : css`
          background: ${theme.colors.red};
        `}

  &:hover {
    filter: brightness(0.9);
  }
`

function ChallengeBox() {
  const hasActiveChallenge = true

  return (
    <ChallengeBoxContainer>
      {hasActiveChallenge ? (
        <ChallengeActive>
          <ChallengeHeader>Ganhe 400 xp</ChallengeHeader>
          <main>
            <img src="icons/body.svg" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos</p>
          </main>
          <footer>
            <ChallengeButton type="button">Falhei</ChallengeButton>
            <ChallengeButton success type="button">
              Completei
            </ChallengeButton>
          </footer>
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
