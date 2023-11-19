import React from 'react'
import rhfitness from '@/assets/gsmLogo.png'
import * as S from '@/components/Header/styles'
import { Button } from '@/styles'

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <S.HeaderBar className="container">
      <S.HeaderRow>
        <S.Hamgurguer onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </S.Hamgurguer>
        <div>
          <img src={rhfitness} alt="" />
        </div>
        <div className="header__links">
          <nav>
            <S.Links>
              <S.LinkItens>
                <a href="#">Sobre</a>{' '}
              </S.LinkItens>
              <S.LinkItens>
                <a href="#">Serviços</a>
              </S.LinkItens>
              <S.LinkItens>
                <a href="#">Preços</a>
              </S.LinkItens>
              <S.LinkItens>
                <a href="#">Equipamentos</a>
              </S.LinkItens>
            </S.Links>
          </nav>
          <Button>Registre-se</Button>
        </div>
      </S.HeaderRow>
      <S.NavMobile className={isOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItens>
            <a href="#">Sobre</a>{' '}
          </S.LinkItens>
          <S.LinkItens>
            <a href="#">Serviços</a>
          </S.LinkItens>
          <S.LinkItens>
            <a href="#">Preços</a>
          </S.LinkItens>
          <S.LinkItens>
            <a href="#">Equipamentos</a>
          </S.LinkItens>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
