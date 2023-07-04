import styled from 'styled-components'

export const HistoryContainer = styled.div`
  width: min(95%, 93.1rem);
  margin: 5rem auto 0;
  > h1 {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 3.2rem;
  }
`

export const TableWrapping = styled.div`
  overflow: auto;
  height: 48rem;

  &:has(.tbody:empty) {
    background-color: ${({ theme }) => theme['gray-700']};
  }
  > table {
    font-size: 1.4rem;
    border-collapse: collapse;
    width: 100%;
    min-width: 50rem;

    th,
    td {
      padding-block: 1.6rem;
    }

    th:first-child,
    td:first-child {
      padding-left: 2.4rem;
    }
    th:last-child,
    td:last-child {
      padding-right: 2.4rem;
    }

    th {
      font-weight: 700;
      text-align: start;
      background-color: ${({ theme }) => theme['gray-600']};

      &:first-child {
        width: 50%;
        border-top-left-radius: 0.8rem;
      }
      &:last-child {
        border-top-right-radius: 0.8rem;
      }
    }

    td {
      border-top: 4px solid ${({ theme }) => theme['gray-800']};
      background-color: ${({ theme }) => theme['gray-700']};
    }

    @media (max-width: 650px) {
      font-size: 1.2rem;
      th:first-child {
        width: 40%;
      }
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow-500',
  red: 'red-500',
  green: 'green-500',
} as const

interface StatusColor {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusColor>`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  &::before {
    background-color: ${({ theme, statusColor }) =>
      theme[STATUS_COLORS[statusColor]]};
    content: '';
    border-radius: 50%;
    width: 0.8rem;
    height: 0.8rem;
  }
`
