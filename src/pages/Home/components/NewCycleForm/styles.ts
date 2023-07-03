import styled from 'styled-components'

export const FormContainer = styled.form`
  line-height: 2.9rem;
  width: 100%;

  display: flex;
  align-items: baseline;
  gap: 0.8rem;
  flex-wrap: wrap;

  font-size: 1.8rem;
  font-weight: 700;

  > div {
    display: flex;
    align-items: baseline;

    gap: 0.8rem;
  }

  @media (max-width: 390px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`

const BaseInput = styled.input`
  background: transparent;
  font-size: 1.8rem;
  font-weight: 700;

  padding: 0 0.8rem;
  color: ${({ theme }) => theme['gray-100']};
  background-color: transparent;
  height: 4rem;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme['gray-500']};

  line-height: 1.8rem;

  &:focus-visible {
    box-shadow: none;
    border-bottom-color: ${({ theme }) => theme['green-500']};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  @media (max-width: 600px) {
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 7.2rem;
`
