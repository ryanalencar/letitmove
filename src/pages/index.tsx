import ExperienceBar from '../components/ExperienceBar'
import { Content, Section } from '../components/common/Homepage'
import Profile from '../components/Profile'
import CompletedChallenges from '../components/CompletedChallenges'

export default function Home() {
  return (
    <Content>
      <ExperienceBar />

      <Section>
        <div>
          <Profile />
          <CompletedChallenges />
        </div>
        <div>aaaaa</div>
      </Section>
    </Content>
  )
}
