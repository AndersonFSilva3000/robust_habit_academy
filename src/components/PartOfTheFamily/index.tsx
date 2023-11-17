import Contact from '../Contact'
import * as S from './style'
import img from '@/assets/pngwing2.png'
import img3 from '@/assets/pngwing3.png'

const PartOfTheFamily = () => {
  return (
    <div style={{ position: 'relative' }}>
      <S.ContainerFamily className="container">
        <img src={img} alt="" />
        <S.ContainerDescriptions>
          <div>
            <h3>
              <span>faça parte</span> da família
            </h3>
            <p>
              Nossa academia tem milhares de clientes satisfeitos com resultados
              surpreendentes. Junte-se a nós e comece a transformar seu corpo
              agora!
            </p>
          </div>

          <S.ContainerSecondary>
            <div>
              <h4>+15</h4>
              <p>Unidades na cidade de São Paulo.</p>
            </div>
            <div>
              <h4>+2000</h4>
              <p>Alunos matriculados em nossas unidades.</p>
            </div>
            <div>
              <h4>+100</h4>
              <p>Professores altamente qualificados.</p>
            </div>
          </S.ContainerSecondary>
        </S.ContainerDescriptions>
      </S.ContainerFamily>
      <Contact />
      <S.ImageAbsolut src={img3} alt="" />
    </div>
  )
}

export default PartOfTheFamily
