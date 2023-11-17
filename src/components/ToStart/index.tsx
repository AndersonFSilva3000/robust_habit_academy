import * as S from './styles'
import buddy from '@/assets/pngwing1.png'
import Arrow from '@/assets/Arrow.png'
import { Button } from '@/styles'

const ToStart = () => {
  return (
    <S.Container className="container">
      <S.ContainerDescription>
        <h2>
          <span>AQUI NÃO SE</span> TREINA FOFO
        </h2>
        <p>
          Transforme-se na nossa academia! Oferecemos equipamentos modernos,
          instrutores qualificados e aulas para todos os níveis. Alcance seus
          objetivos fitness conosco. Experimente hoje!
        </p>
        <Button>
          começar <img src={Arrow} alt="" />
        </Button>
      </S.ContainerDescription>
      <S.ImgSettings src={buddy} alt="" />
    </S.Container>
  )
}

export default ToStart
