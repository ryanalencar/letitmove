import Head from 'next/head'
import { GetServerSideProps } from 'next'

import ExperienceBar from '../components/ExperienceBar'
import { Content, Section } from '../components/common/Homepage'
import Profile from '../components/Profile'
import CompletedChallenges from '../components/CompletedChallenges'
import ChallengeBox from '../components/ChallengeBox'
import Countdown from '../components/Countdown'
import { CountdownProvider } from '../contexts/CountDown'
import { ChallengeProvider } from '../contexts/Challenge'

interface IHomeProps {
  level: number
  currentExp: number
  challengesCompleted: number
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, currentExp, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExp: Number(currentExp),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}

export default function Home(props: IHomeProps) {
  const { level, currentExp, challengesCompleted } = props

  return (
    <ChallengeProvider
      level={level}
      currentExp={currentExp}
      challengesCompleted={challengesCompleted}
    >
      <Content>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <Section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </Section>
        </CountdownProvider>
      </Content>
    </ChallengeProvider>
  )
}
