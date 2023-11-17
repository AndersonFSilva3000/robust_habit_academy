import { Breakpoints } from '@/styles'
import styled from 'styled-components'

export const ContainerItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 6.75rem;
  margin-bottom: 9.5rem;

  @media (max-width: ${Breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }

  @media (max-width: ${Breakpoints.tablet}) {
    margin: 5rem 0;
  }
`
