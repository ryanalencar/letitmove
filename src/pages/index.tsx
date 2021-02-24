import Head from 'next/head'

import ExperienceBar from '../components/ExperienceBar'
import { Content, Section } from '../components/common/Homepage'
import Profile from '../components/Profile'
import CompletedChallenges from '../components/CompletedChallenges'
import ChallengeBox from '../components/ChallengeBox'
import Countdown from '../components/Countdown'

export default function Home() {
  return (
    <Content>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />

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
    </Content>
  )
}
