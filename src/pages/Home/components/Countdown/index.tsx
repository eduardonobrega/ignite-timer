import { CountdownContainer, Separator } from './styles'

export function Countdown() {
  return (
    <CountdownContainer>
      <div>
        <span>0</span>
        <span>0</span>
      </div>
      <Separator>:</Separator>
      <div>
        <span>0</span>
        <span>0</span>
      </div>
    </CountdownContainer>
  )
}
