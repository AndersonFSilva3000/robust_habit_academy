import { Breakpoints, Button, Colors, Fonts } from '@/styles'
import styled from 'styled-components'

export const ContainerContact = styled.div`
  background-color: ${Colors.backgroundBlack};
  display: flex;

  position: relative;

  h3 {
    font-family: ${Fonts.bebasNeue};
    font-size: 5.125rem;
    font-weight: normal;
    padding-top: 4.375rem;

    @media (max-width: ${Breakpoints.desktop}) {
      font-size: 3rem;
    }

    @media (max-width: ${Breakpoints.tablet}) {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }

    @media (max-width: ${Breakpoints.mobile}) {
      text-align: center;
    }
  }

  p {
    font-family: ${Fonts.montserrot};
    font-size: 1.5rem;

    @media (max-width: ${Breakpoints.desktop}) {
      font-size: 1rem;
    }
  }

  ${Button} {
    background-color: red;
    display: block;
    margin-bottom: 7.5rem;

    @media (max-width: ${Breakpoints.desktop}) {
      font-size: 1.5rem;
    }
  }
`

export const ContainerInput = styled.div`
  display: flex;

  div {
    position: relative;
    padding: 1.875rem 1.875rem 1.875rem 0;

    @media (max-width: ${Breakpoints.mobile}) {
      padding-bottom: 1rem;
    }
  }

  @media (max-width: ${Breakpoints.mobile}) {
    flex-direction: column;
  }
`

export const InputContact = styled.input`
  font-size: 1.125rem;
  border: none;
  color: #fff;
  font-family: ${Fonts.montserrot};
  text-transform: uppercase;
  background-color: ${Colors.backgroundBlack};
  position: absolute;
  top: 40px;
  left: 18px;
  max-width: 195px;
  outline: none;
`
