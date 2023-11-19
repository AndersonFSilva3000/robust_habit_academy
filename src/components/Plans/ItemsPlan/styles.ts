import { Breakpoints } from '@/styles'
import styled from 'styled-components'

export const ContainerItemsPlan = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2.25rem;
  padding-bottom: 5rem;
  color: #787878;
  align-items: end;

  @media (max-width: ${Breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 2.25rem;

    grid-template-areas:
      'grid2 grid2'
      'grid1 grid3';

    .grid1 {
      grid-area: grid1;
    }
    .grid2 {
      grid-area: grid2;
      justify-self: center;
      max-width: 17.938rem;
    }
    .grid3 {
      grid-area: grid3;
    }
  }

  @media (max-width: ${Breakpoints.mobile}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'grid2'
      'grid1'
      'grid3';
  }

  .grid2 {
    max-width: 100%;
  }
`
