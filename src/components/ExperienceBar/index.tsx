import React from 'react'
import styled from 'styled-components'

interface ICurrentExp {
  left: number
}

interface IProgressExp {
  width: number
}

const ExpBar = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }
`

const GrayLine = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: ${({ theme }) => theme.grayLine};
  margin: 0 1.5rem;
  position: relative;
`

const ProgressExp = styled.div<IProgressExp>`
  width: ${({ width }) => width}%;
  height: 100%;
  background: ${({ theme }) => theme.colors.green};
`
const CurrentExp = styled.span<ICurrentExp>`
  position: absolute;
  top: 12px;
  left: ${({ left }) => left}%;
  transform: translateX(-50%);
`

const ExperienceBar: React.FC = () => {
  return (
    <ExpBar>
      <span>0 xp</span>
      <GrayLine>
        <ProgressExp width={50} />
        <CurrentExp left={50}>300xp</CurrentExp>
      </GrayLine>
      <span>600 xp</span>
    </ExpBar>
  )
}

export default ExperienceBar
