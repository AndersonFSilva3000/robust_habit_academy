import { Breakpoints, Colors, Fonts } from '@/styles'
import styled from 'styled-components'

export const ContainerPlans = styled.div`
  background-color: ${Colors.backgroundBlack};

  h3 {
    font-family: ${Fonts.bebasNeue};
    font-size: 5.125rem;
    text-align: center;
    padding-top: 5rem;
    padding-bottom: 3.75rem;

    @media (max-width: ${Breakpoints.desktop}) {
      font-size: 3.5rem;
    }
  }
`
