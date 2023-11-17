import { Colors, Fonts } from '@/styles'
import styled from 'styled-components'

export const ContainerSlick = styled.div`
  background-color: ${Colors.backgroundBlack};
  max-height: 3.5rem;
  font-family: ${Fonts.bebasNeue};
  font-size: 2rem;
  align-items: center;
  display: flex;
  align-items: center;

  img {
    margin: 0 2.75rem;
    display: inline;
  }
`
