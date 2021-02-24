import ThemeContainer from '../components/ThemeContainer'
import { ChallengeProvider } from '../contexts/Challenge'

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeContainer>
      <ChallengeProvider>
        <Component {...pageProps} />
      </ChallengeProvider>
    </ThemeContainer>
  )
}

export default MyApp
