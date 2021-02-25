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
  activeChallenge: IChallenge
  levelUp: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
  completeChallenge: () => void
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

  const completeChallenge = () => {
    if (!activeChallenge) return

    const { amount } = activeChallenge

    let finalExperience = currentExp + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel
      levelUp()
    }

    setCurrentExp(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
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
        experienceToNextLevel,
        completeChallenge
      }}
    >
      {children}
    </ChallengeContext.Provider>
  )
}
