import { useFormContext } from 'react-hook-form'
import { MinutesAmountInput, FormContainer, TaskInput } from './styles'
import { NewCycleFormData } from '../..'
import { useCycleContext } from '../../../../context/CyclesContext'

export function NewCycleForm() {
  const { createNewCycle, activeCycle } = useCycleContext()
  const { register, handleSubmit } = useFormContext<NewCycleFormData>()

  return (
    <FormContainer id="newCycleForm" onSubmit={handleSubmit(createNewCycle)}>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        placeholder="Dê um nome para o seu projeto"
        id="task"
        list="task-suggestions"
        required
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Banana" />
      </datalist>

      <div>
        <label htmlFor="minutesAmount">durante</label>
        <MinutesAmountInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          min={1}
          max={60}
          step={5}
          required
          disabled={!!activeCycle}
          {...register('minutesAmount', { valueAsNumber: true })}
        />
        <span>minutos.</span>
      </div>
    </FormContainer>
  )
}
