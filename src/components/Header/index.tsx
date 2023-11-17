import rhfitness from '@/assets/gsmLogo.png'
import * as S from '@/components/Header/styles'
import { Button } from '@/styles'

const Header = () => {
  return (
    <S.Links className="container">
      <div>
        <img src={rhfitness} alt="" />
      </div>
      <div>
        <S.Link href="#">Sobre</S.Link>
        <S.Link href="#">Serviços</S.Link>
        <S.Link href="#">Preços</S.Link>
        <S.Link href="#">Equipamentos</S.Link>
        <Button>Registre-se</Button>
      </div>
    </S.Links>
  )
}

export default Header
