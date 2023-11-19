import { Breakpoints, Button, Colors, Fonts } from '@/styles'
import styled from 'styled-components'

export const HeaderBar = styled.div`
  font-family: ${Fonts.bebasNeue};

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

export const Links = styled.ul`
  display: flex;

  @media (max-width: ${Breakpoints.tablet}) {
    display: block;
    text-align: center;
    background-color: ${Colors.backgroundBlack};
    border-radius: 5px;
    border: 1px solid #595959;
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header__links {
    display: flex;
    align-items: center;

    @media (max-width: ${Breakpoints.tablet}) {
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`

export const LinkItens = styled.li`
  a {
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
      display: block;
      border-bottom: 1px solid #595959;
      width: 100%;
      padding: 0.3rem 0;

      a {
      }

      &::before {
        width: 0;
      }

      &:hover::before {
        width: 0;
      }

      &:hover {
        background-color: #595959;
      }
    }
  }
`

export const NavMobile = styled.div`
  display: none;
  transition: block 0.3s ease;

  &.is-open {
    display: block;
  }
`
export const Hamgurguer = styled.div`
  width: 32px;
  cursor: pointer;

  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: #fff;
    margin-bottom: 4px;
  }

  @media (min-width: ${Breakpoints.tablet}) {
    display: none;
  }
`
