import { createContext, ReactNode, useState } from 'react'

interface ChallengeProviderProps {
  children: ReactNode
}

interface ChallengeContextData {
  level: number
  currentExp: number
  challengesCompleted: number
  levelUp: () => void
  startNewChallenge: () => void
}

export const ChallengeContext = createContext({} as ChallengeContextData)

export function ChallengeProvider({ children }: ChallengeProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExp, setCurrentExp] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)

  const levelUp = () => setLevel(level + 1)
  const startNewChallenge = () => console.log('New Challenge')

  return (
    <ChallengeContext.Provider
      value={{ level, currentExp, challengesCompleted, levelUp, startNewChallenge }}
    >
      {children}
    </ChallengeContext.Provider>
  )
}
