import { createContext, ReactNode, useState } from 'react'
import challenges from '../../challenges.json'

interface IChallengeProviderProps {
  children: ReactNode
}

interface IChallenge {
  type: 'body' | 'eye'
  description: string
  amount: number
}

interface IChallengeContextData {
  level: number
  currentExp: number
  challengesCompleted: number
  experienceToNextLevel: number
  levelUp: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
  activeChallenge: IChallenge
}

export const ChallengeContext = createContext({} as IChallengeContextData)

export function ChallengeProvider({ children }: IChallengeProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExp, setCurrentExp] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  const levelUp = () => setLevel(level + 1)

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)
  }

  const resetChallenge = () => {
    setActiveChallenge(null)
  }

  return (
    <ChallengeContext.Provider
      value={{
        level,
        currentExp,
        challengesCompleted,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel
      }}
    >
      {children}
    </ChallengeContext.Provider>
  )
}
