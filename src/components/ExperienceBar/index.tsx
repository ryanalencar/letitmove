import React from 'react'
import { CurrentExp, ExpBar, GrayLine, ProgressExp } from './styles'

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
