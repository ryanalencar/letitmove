import styled, { css } from 'styled-components'

interface IButtonProps {
  active?: boolean
}

export const CountdownContainer = styled.div`
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

export const CountdownButton = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  outline: 0;
  border: 0;
  border-radius: 5px;
  font-size: 1.25rem;
  font-weight: 600;
  transition: all 0.3s ease;

  ${({ active, theme }) =>
    active
      ? css`
          background: ${theme.colors.white};
          color: ${theme.colors.title};
          border: 1px solid ${({ theme }) => theme.grayLine};
          &:hover {
            background: ${theme.colors.red};
            color: ${theme.colors.white};
            border: none;
          }
        `
      : css`
          color: ${({ theme }) => theme.colors.white};
          background: ${theme.colors.blue};
          &:hover {
            background: ${({ theme }) => theme.colors.blueDark};
          }
        `}

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};
    cursor: not-allowed;
    border: 1px solid ${({ theme }) => theme.grayLine};
  }
`
