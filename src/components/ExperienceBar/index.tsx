import React, { useContext } from 'react'
import { ChallengeContext } from '../../contexts/Challenge'
import { CurrentExp, ExpBar, GrayLine, ProgressExp } from './styles'

const ExperienceBar: React.FC = () => {
  const { currentExp, experienceToNextLevel } = useContext(ChallengeContext)

  const percentToNextLevel = Math.round(currentExp * 100) / experienceToNextLevel

  return (
    <ExpBar>
      <span>0 xp</span>
      <GrayLine>
        <ProgressExp width={percentToNextLevel} />
        <CurrentExp left={percentToNextLevel}>{currentExp}xp</CurrentExp>
      </GrayLine>
      <span>{experienceToNextLevel} xp</span>
    </ExpBar>
  )
}

export default ExperienceBar
