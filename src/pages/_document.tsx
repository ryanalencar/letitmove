import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const styledComponentSheet = new StyledComponentSheets()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => styledComponentSheet.collectStyles(<App {...props} />)
        })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {styledComponentSheet.getStyleElement()}
          </>
        )
      }
    } finally {
      styledComponentSheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
