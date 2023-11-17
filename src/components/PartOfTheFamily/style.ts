import styled from 'styled-components'
import frame2 from '@/assets/Frame2.png'
import { Breakpoints, Fonts } from '@/styles'

export const ContainerFamily = styled.div`
  background-image: url(${frame2});
  background-repeat: no-repeat;
  background-position: left;
  display: flex;
  background-size: contain;

  @media (max-width: ${Breakpoints.tablet}) {
    background-image: none;
  }

  img {
    margin-top: 4.875rem;
    max-height: 36.375rem;
    max-width: 27.125rem;
    align-self: end;

    @media (max-width: ${Breakpoints.tablet}) {
      display: none;
    }
  }
`

export const ContainerDescriptions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 11.25rem;
  margin-left: 2rem;

  @media (max-width: ${Breakpoints.desktop}) {
    margin-top: 8rem;
  }

  @media (max-width: ${Breakpoints.tablet}) {
    margin-top: 5rem;
  }

  h3 {
    font-family: ${Fonts.bebasNeue};
    font-size: 3.875rem;

    @media (max-width: ${Breakpoints.desktop}) {
      font-size: 3rem;
      margin-bottom: 1.5rem;
    }

    @media (max-width: ${Breakpoints.tablet}) {
      font-size: 2rem;
      text-align: center;
    }
  }

  span {
    font-family: ${Fonts.bungeeOutline};
    font-weight: normal;

    @media (max-width: ${Breakpoints.desktop}) {
      display: block;
    }

    @media (max-width: ${Breakpoints.tablet}) {
      display: inline-block;
    }
  }

  p {
    font-family: ${Fonts.montserrot};
    font-size: 1.125rem;

    @media (max-width: ${Breakpoints.desktop}) {
      font-size: 1rem;
    }

    @media (max-width: ${Breakpoints.tablet}) {
      text-align: center;
    }
  }
`

export const ContainerSecondary = styled.div`
  display: flex;
  margin-top: 4.375rem;
  column-gap: 3rem;
  margin-bottom: 10.375rem;

  @media (max-width: ${Breakpoints.tablet}) {
    margin-bottom: 5rem;
  }

  h4 {
    font-family: ${Fonts.bebasNeue};
    font-size: 2.25rem;
    text-align: center;

    @media (max-width: ${Breakpoints.desktop}) {
      font-size: 2rem;
    }

    @media (max-width: ${Breakpoints.tablet}) {
      font-size: 1.5rem;
    }
  }

  p {
    text-align: center;
  }
`

export const ImageAbsolut = styled.img`
  position: absolute;
  bottom: 0;
  right: 0px;
  max-height: 100%;

  @media (max-width: ${Breakpoints.desktop}) {
    height: 50%;
  }

  @media (max-width: ${Breakpoints.tablet}) {
    display: none;
  }
`
