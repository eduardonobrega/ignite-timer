import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: min(90%, 64.8rem);
  margin: 7.2rem auto 0;
`

const Button = styled.button`
  color: ${({ theme }) => theme['gray-100']};
  font-weight: 700;

  width: 100%;
  height: 6.4rem;
  margin-top: 6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  cursor: pointer;
  border: none;
  border-radius: 8px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  &:focus-visible {
    box-shadow: none;
  }

  > svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`

export const StartButton = styled(Button)`
  background-color: ${({ theme }) => theme['green-500']};

  &:not(:disabled):hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme['green-700']};
  }
`

export const InterruptButton = styled(Button)`
  background-color: ${({ theme }) => theme['red-500']};

  &:not(:disabled):hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme['red-700']};
  }
`
