import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { HandPalm, Play } from '@phosphor-icons/react'
import * as zod from 'zod'

import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'

import { StartButton, HomeContainer, InterruptButton } from './styles'
import { useCycleContext } from '../../context/CyclesContext'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
})

export type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { interruptCycle, activeCycle } = useCycleContext()
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 1,
    },
  })

  const { watch, reset } = newCycleForm

  const task = watch('task')
  const isSubmitDisabled = !task

  function handleInterruptCycle() {
    interruptCycle()
    reset()
    document.title = 'Ignite Timer'
  }

  return (
    <HomeContainer>
      <FormProvider {...newCycleForm}>
        <NewCycleForm />
        <Countdown />
      </FormProvider>

      {activeCycle ? (
        <InterruptButton onClick={handleInterruptCycle}>
          <HandPalm />
          Interromper
        </InterruptButton>
      ) : (
        <StartButton
          type="submit"
          form="newCycleForm"
          disabled={isSubmitDisabled}
        >
          <Play />
          Começar
        </StartButton>
      )}
    </HomeContainer>
  )
}
