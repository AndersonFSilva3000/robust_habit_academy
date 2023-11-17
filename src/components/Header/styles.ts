import { Breakpoints, Button, Colors, Fonts } from '@/styles'
import styled from 'styled-components'

export const Links = styled.div`
  font-family: ${Fonts.bebasNeue};
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${Button} {
    padding: 0.5rem 1.25rem;
    font-size: 1.5rem;

    &:hover {
      opacity: 0.8;
    }

    @media (max-width: ${Breakpoints.tablet}) {
      font-size: 1rem;
    }
  }
`

export const Link = styled.a`
  color: ${Colors.fontColor};
  font-size: 1.5rem;
  margin-right: 1.875rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 0px;
    height: 2px;
    background-color: #fff;
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: 1rem;
  }

  @media (max-width: ${Breakpoints.tablet}) {
    font-size: 1rem;
  }
`
