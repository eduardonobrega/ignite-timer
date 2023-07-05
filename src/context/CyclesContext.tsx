import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { differenceInSeconds } from 'date-fns'
import { version } from '../../package.json'
import { Cycle, cyclesReducer } from '../reducers/cycles/reducer'
import {
  createNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycles/action'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

interface CyclesContextType {
  cycles: Cycle[]
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
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    } as CyclesState,
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        `@ignite-timer:cycles-state-${version}`,
      )
      if (storedStateAsJSON) {
        const parsedState: CyclesState = JSON.parse(storedStateAsJSON)

        parsedState.cycles.forEach((cycle) => {
          cycle.startDate = new Date(cycle.startDate)
          if (cycle.finishedDate) {
            cycle.finishedDate = new Date(cycle.finishedDate)
          } else if (cycle.interruptDate) {
            cycle.interruptDate = new Date(cycle.interruptDate)
          }
        })

        return parsedState
      }

      return initialState
    },
  )
  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), activeCycle.startDate)
    }

    return 0
  })

  function createNewCycle({ minutesAmount, task }: CreateCycleData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task,
      minutesAmount,
      startDate: new Date(),
    }
    dispatch(createNewCycleAction(newCycle))
    setAmountSecondsPassed(0)
  }

  function interruptCycle() {
    dispatch(interruptCurrentCycleAction())
  }

  function markCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction())
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem(`@ignite-timer:cycles-state-${version}`, stateJSON)
  }, [cyclesState])

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        interruptCycle,
        createNewCycle,
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
