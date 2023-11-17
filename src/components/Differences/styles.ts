import { Breakpoints, Fonts } from '@/styles'
import styled from 'styled-components'

export const Container = styled.div`
  h3 {
    span {
      font-family: ${Fonts.bungeeOutline};
      font-weight: normal;
    }

    margin-top: 10.25rem;
    font-family: ${Fonts.bebasNeue};
    font-size: 5.125rem;
    text-align: center;

    @media (max-width: ${Breakpoints.desktop}) {
      font-size: 3rem;
    }

    @media (max-width: ${Breakpoints.tablet}) {
      font-size: 2rem;
      margin-top: 5rem;
    }
  }
`
