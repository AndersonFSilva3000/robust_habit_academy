import { Breakpoints, Button, Colors, Fonts } from '@/styles'
import styled from 'styled-components'

export const ContainerItem = styled.div`
  padding: 1.5rem;
  max-width: 20rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  img {
    max-width: 4.813rem;
    width: 100%;
  }

  h4 {
    font-size: 1.75rem;
    font-family: ${Fonts.bebasNeue};
    margin: 0.75rem 0;

    @media (max-width: ${Breakpoints.tablet}) {
      font-size: 1.5rem;
    }
  }

  p {
    font-family: ${Fonts.montserrot};
    font-size: 1.125rem;
    margin-bottom: 1.125rem;

    @media (max-width: ${Breakpoints.tablet}) {
      font-size: 1rem;
    }
  }

  ${Button} {
    font-size: 1rem;
    display: flex;
    align-items: center;
    max-width: 11.75rem;
    width: 100%;
    margin-top: auto;

    img {
      max-width: 1.219rem;
      margin-left: 1.125rem;
    }
  }

  &:hover {
    background-color: ${Colors.backgroundBlack};

    ${Button} {
      background-color: ${Colors.backgroundRed};
    }
  }
`
