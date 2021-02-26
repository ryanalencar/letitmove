import { createContext, ReactNode, useEffect, useState } from 'react'
import Cookies from 'js-cookie'

import LevelUpModal from '../components/LevelUpModal'

import challenges from '../../challenges.json'

interface IChallengeProviderProps {
  children: ReactNode
  level: number
  currentExp: number
  challengesCompleted: number
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

export function ChallengeProvider({ children, ...rest }: IChallengeProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1)
  const [currentExp, setCurrentExp] = useState(rest.currentExp ?? 0)
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0)
  const [activeChallenge, setActiveChallenge] = useState(null)
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('challengesCompleted', String(challengesCompleted))
    Cookies.set('currentExp', String(currentExp))
  }, [level, challengesCompleted, currentExp])

  const levelUp = () => {
    setLevel(level + 1)
    setIsLevelUpModalOpen(true)
  }

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('novo desafio🎉', {
        body: `Valendo ${challenge.amount}xp!`,
        silent: true
      })
    }
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
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengeContext.Provider>
  )
}
