import { Breakpoints, Colors, Fonts } from '@/styles'
import styled from 'styled-components'

type recommended = {
  background?: string
}

export const ContainerItemPlan = styled.div<recommended>`
  display: flex;
  flex-direction: column;

  > span {
    display: none;
    color: ${Colors.fontColor};
    text-align: center;
    font-family: ${Fonts.montserrot};
    text-transform: uppercase;
    padding: 0.5rem 0;
  }

  &.recommended {
    > span {
      display: block;
      background-color: red;
    }

    h4 {
      background-color: red;
    }
  }

  img {
    max-width: 24.938rem;
    width: 100%;
    height: 10.5rem;
    object-fit: cover;

    @media (max-width: ${Breakpoints.desktop}) {
      max-width: 100%;
    }
  }

  h4 {
    font-size: 2.5rem;
    font-family: ${Fonts.bebasNeue};
    font-weight: normal;
    color: #fff;
    padding: 0.75rem 1.25rem;
    background-color: #000;

    @media (max-width: ${Breakpoints.desktop}) {
      font-size: 2rem;
    }
  }
`
export const ContainerSelect = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${Colors.lightGray};
  padding: 0.75rem 1.25rem;

  p {
    font-size: 1.5rem;
    font-family: ${Fonts.montserrot};

    @media (max-width: ${Breakpoints.desktop}) {
      font-size: 1.25rem;
    }
  }

  span {
    color: ${Colors.fontColor};
    display: block;
  }
`

export const ButtonItemPlan = styled.button<recommended>`
  font-size: 1.125rem;
  font-family: ${Fonts.montserrot};
  font-weight: bold;
  text-transform: uppercase;
  color: ${Colors.darkGray};
  border: 1px solid ${Colors.darkGray};
  background-color: ${Colors.lightGray};
  border-radius: 50px;
  padding: 0.875rem 0.375rem;
  cursor: pointer;

  &:hover {
    color: red;
    border-color: red;
  }

  @media (max-width: ${Breakpoints.desktop}) {
    font-size: 0.75rem;
    max-height: 2.813rem;
    margin-top: auto;
  }
`
