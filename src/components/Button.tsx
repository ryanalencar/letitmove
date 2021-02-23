interface IButtonProps {
  color: string
  children: string
}

function Button(props: IButtonProps) {
  const { children, color } = props
  return <button style={{ backgroundColor: color }}>{children}</button>
}

export default Button
