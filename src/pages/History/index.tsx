import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useCycleContext } from '../../context/CyclesContext'
import { HistoryContainer, Status, TableWrapping } from './styles'

export function History() {
  const { cycles } = useCycleContext()
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <TableWrapping>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>
                  {formatDistanceToNow(cycle.startDate, {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </td>
                <td>
                  {cycle.interruptDate && (
                    <Status statusColor="red">Interrompido</Status>
                  )}
                  {cycle.finishedDate && (
                    <Status statusColor="green">Concluído</Status>
                  )}
                  {!cycle.finishedDate && !cycle.interruptDate && (
                    <Status statusColor="yellow">Em andamento</Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWrapping>
    </HistoryContainer>
  )
}
