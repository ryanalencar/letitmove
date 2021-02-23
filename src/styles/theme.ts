export interface ITheme {
  colors: {
    white: string
    text: string
    textHighlight: string
    title: string
    red: string
    green: string
    blue: string
    blueDark: string
    blueTwitter: string
  }
  background: string
  grayLine: string
}

const theme = {
  colors: {
    white: '#FFF',
    text: '#666666',
    textHighlight: '#B3B9FF',
    title: '#2E384D',
    red: '#E83F5B',
    green: '#4CD62B',
    blue: '#5965E0',
    blueDark: '#4953B8',
    blueTwitter: '#2AA9E0'
  },
  background: '#F2F3F5',
  grayLine: '#DCDDE0'
}

export default theme
