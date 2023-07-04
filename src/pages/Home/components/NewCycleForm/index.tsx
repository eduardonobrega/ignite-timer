import { MinutesAmountInput, FormContainer, TaskInput } from './styles'

export function NewCycleForm() {
  return (
    <FormContainer id="newCycleForm">
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        placeholder="Dê um nome para o seu projeto"
        id="task"
        list="task-suggestions"
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
          min={5}
          max={60}
          step={5}
        />
        <span>minutos.</span>
      </div>
    </FormContainer>
  )
}
