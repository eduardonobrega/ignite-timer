import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background-color: ${({ theme }) => theme['gray-800']};

  width: min(95%, 112rem);
  margin: 8.8vh auto;
  border-radius: 8px;
`
