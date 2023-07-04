import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: Roboto Mono;
  font-weight: 700;

  margin-top: 6rem;
  display: grid;
  grid-template-columns: 1fr 5rem 1fr;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    > span {
      background-color: ${({ theme }) => theme['gray-700']};
      border-radius: 0.8rem;
      font-size: clamp(10rem, 7.6rem + 7.5vw, 16rem);

      display: flex;
      align-items: center;
      justify-content: center;
      width: min(50%, 12.8rem);
    }

    @media (min-width: 450px) {
      gap: 1.6rem;
    }
  }
`
export const Separator = styled.div`
  color: ${({ theme }) => theme['green-500']};

  text-align: center;
  font-size: clamp(8rem, 4.8rem + 10vw, 16rem);
`
