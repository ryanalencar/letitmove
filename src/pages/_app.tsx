import ThemeContainer from '../components/ThemeContainer'

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
  )
}

export default MyApp
