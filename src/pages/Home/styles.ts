import styled from 'styled-components'
import frame from '@/assets/Frame1.png'
import { Breakpoints } from '@/styles'

export const ContainerFrame = styled.div`
  background-image: url(${frame});
  background-repeat: no-repeat;
  background-position: right;
  padding-top: 1rem;
  background-size: contain;

  @media (max-width: ${Breakpoints.tablet}) {
    background-image: none;
  }
`
