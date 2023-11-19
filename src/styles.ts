import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const Colors = {
  backgroundRed: '#a03333',
  backgroundBlack: '#222222',
  fontColor: '#ffffff',
  darkGray: '#787878',
  lightGray: '#B4B4B4'
}

export const Fonts = {
  bebasNeue: "'Bebas Neue', sans-serif",
  bungeeOutline: "'Bungee Outline', sans-serif",
  montserrot: "'Montserrat', sans-serif"
}

export const Breakpoints = {
  desktop: '79.938rem',
  tablet: '62rem',
  mobile: '47.938rem'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: ${Colors.backgroundRed};
    color: ${Colors.fontColor};
  }

  .container {
    padding-left: 5rem;
    padding-right: 5rem;

    @media (max-width: ${Breakpoints.mobile}) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  }
`

export const Button = styled.button`
  font-family: ${Fonts.bebasNeue};
  font-size: 2rem;
  color: ${Colors.fontColor};
  background-color: ${Colors.backgroundBlack};
  padding: 0.5rem 2.5rem 0.5rem 1.5rem;
  border: none;
  clip-path: polygon(
    20% 0%,
    85% 0,
    100% 45%,
    100% 100%,
    80% 100%,
    20% 100%,
    0 100%,
    0 0
  );
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`
