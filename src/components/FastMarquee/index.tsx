import * as S from './styles'
import weight from '@/assets/icons8-barbell-64 1.png'

import Marquee from 'react-fast-marquee'

const FastMarquee = () => {
  return (
    <Marquee style={{ marginTop: '-1rem' }}>
      <S.ContainerSlick>
        <p>consultoria individual </p>
        <img src={weight} alt="" />
        <p>+20 professores</p>

        <img src={weight} alt="" />
        <p>treine da sua forma</p>

        <img src={weight} alt="" />
        <p>+15 unidades</p>

        <img src={weight} alt="" />
        <p>montamos seu treino</p>

        <img src={weight} alt="" />
      </S.ContainerSlick>
    </Marquee>
  )
}

export default FastMarquee
