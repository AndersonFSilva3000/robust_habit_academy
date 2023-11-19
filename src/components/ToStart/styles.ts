import { Breakpoints, Button, Fonts } from '@/styles'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  column-gap: 7.75rem;
  align-items: center;
`

export const ContainerDescription = styled.div`
  h2 {
    font-family: ${Fonts.bebasNeue};
    font-size: 5.125rem;

    span {
      font-family: ${Fonts.bungeeOutline};
      font-weight: normal;
      line-height: 1rem;
    }

    @media (max-width: 1279px) {
      font-size: 3rem;
    }

    @media (max-width: ${Breakpoints.tablet}) {
      font-size: 2rem;
      margin-top: 3rem;
    }
  }

  p {
    font-family: ${Fonts.montserrot};
    font-size: 1.125rem;
    margin-top: 1.75rem;
    margin-bottom: 2.25rem;

    @media (max-width: ${Breakpoints.tablet}) {
      font-size: 1rem;
    }
  }

  ${Button} {
    display: flex;
    align-items: center;

    img {
      margin-left: 1rem;
      max-width: 1.3rem;
    }

    @media (max-width: ${Breakpoints.tablet}) {
      font-size: 1.5rem;
      margin-bottom: 3rem;
    }
  }
`

export const ImgSettings = styled.img`
  max-height: 39.25rem;
  height: 100%;
  align-self: end;

  @media (max-width: ${Breakpoints.tablet}) {
    max-width: 18.75rem;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    display: none;
  }
`
