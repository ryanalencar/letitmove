import styled from 'styled-components'

interface ICurrentExp {
  left: number
}

interface IProgressExp {
  width: number
}

export const ExpBar = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }
`

export const GrayLine = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: ${({ theme }) => theme.grayLine};
  margin: 0 1.5rem;
  position: relative;
`

export const ProgressExp = styled.div<IProgressExp>`
  width: ${({ width }) => width}%;
  height: 100%;
  background: ${({ theme }) => theme.colors.green};
`
export const CurrentExp = styled.span<ICurrentExp>`
  position: absolute;
  top: 12px;
  left: ${({ left }) => left}%;
  transform: translateX(-50%);
`
