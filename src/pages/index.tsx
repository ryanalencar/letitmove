import ExperienceBar from '../components/ExperienceBar'
import { Content, Section } from '../components/common/Homepage'
import Profile from '../components/Profile'

export default function Home() {
  return (
    <Content>
      <ExperienceBar />

      <Section>
        <div>
          <Profile />
        </div>
        <div>aaaaa</div>
      </Section>
    </Content>
  )
}
