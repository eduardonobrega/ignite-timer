import { Play } from '@phosphor-icons/react'
import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'
import { StartButton, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <NewCycleForm />
      <Countdown />

      <StartButton type="submit" form="newCycleForm">
        <Play />
        Começar
      </StartButton>

      {/* <InterruptButton>
        <HandPalm />
        Interromper
      </InterruptButton> */}
    </HomeContainer>
  )
}
