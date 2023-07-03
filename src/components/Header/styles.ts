import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 4rem 4rem 0;

  display: flex;
  justify-content: space-between;
  > nav {
    display: flex;
    gap: 0.8rem;
    > a {
      display: grid;
      place-items: center;
      width: 4.8rem;
      color: ${({ theme }) => theme['gray-100']};

      border-block: 3px solid transparent;

      &:hover {
        border-bottom-color: ${({ theme }) => theme['green-500']};
      }

      &.active,
      &:active {
        color: ${({ theme }) => theme['green-500']};
      }

      > svg {
        width: 2.7rem;
        height: 2.7rem;
      }
    }
  }
`
