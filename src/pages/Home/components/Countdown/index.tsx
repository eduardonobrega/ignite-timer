import { useEffect } from 'react'
import { differenceInSeconds } from 'date-fns'

import { useCycleContext } from '../../../../context/CyclesContext'
import { CountdownContainer, Separator } from './styles'
import { useFormContext } from 'react-hook-form'

export function Countdown() {
  const {
    activeCycle,
    amountSecondsPassed,
    setSecondsPassed,
    markCycleAsFinished,
  } = useCycleContext()

  const { reset } = useFormContext()

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0
  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const difference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (difference >= totalSeconds) {
          markCycleAsFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
          reset()
          document.title = 'Ignite Timer'
        } else {
          setSecondsPassed(difference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, setSecondsPassed, markCycleAsFinished, totalSeconds, reset])

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [activeCycle, minutes, seconds])

  return (
    <CountdownContainer>
      <div>
        <span>{minutes[0]}</span>
        <span>{minutes[1]}</span>
      </div>
      <Separator>:</Separator>
      <div>
        <span>{seconds[0]}</span>
        <span>{seconds[1]}</span>
      </div>
    </CountdownContainer>
  )
}
