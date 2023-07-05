import { ReactNode, createContext, useContext, useState } from 'react'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptDate?: Date
  finishedDate?: Date
}

interface CyclesContextType {
  activeCycle: Cycle | undefined
  amountSecondsPassed: number
  createNewCycle: (data: CreateCycleData) => void
  setSecondsPassed: (seconds: number) => void
  interruptCycle: () => void
  markCycleAsFinished: () => void
}

interface CyclesContextProviderProps {
  children: ReactNode
}

const CyclesContext = createContext({} as CyclesContextType)

function CyclesContextProvider({ children }: CyclesContextProviderProps) {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function createNewCycle({ minutesAmount, task }: CreateCycleData) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      task,
      minutesAmount,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)
  }

  function interruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptDate: new Date() }
        }

        return cycle
      }),
    )
    setActiveCycleId(null)
  }

  function markCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        }

        return cycle
      }),
    )
    setActiveCycleId(null)
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  return (
    <CyclesContext.Provider
      value={{
        interruptCycle,
        createNewCycle,
        activeCycle,
        amountSecondsPassed,
        setSecondsPassed,
        markCycleAsFinished,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}

function useCycleContext() {
  const context = useContext(CyclesContext)
  return context
}

export { CyclesContextProvider, useCycleContext }
