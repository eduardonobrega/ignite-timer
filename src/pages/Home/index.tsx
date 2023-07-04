import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <NewCycleForm />
      <Countdown />
    </HomeContainer>
  )
}
