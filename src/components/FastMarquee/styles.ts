import { Colors, Fonts } from '@/styles'
import styled from 'styled-components'

export const ContainerSlick = styled.div`
  background-color: ${Colors.backgroundBlack};
  font-family: ${Fonts.bebasNeue};
  font-size: 2rem;
  display: flex;
  align-items: center;

  img {
    margin: 0 2.75rem;
    display: inline;
  }
`
