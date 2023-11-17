import { Button } from '@/styles'
import * as S from './styles'
import borderButton from '@/assets/Rectangle.svg'

const Contact = () => {
  return (
    <S.ContainerContact className="container">
      <div>
        <h3>ENTRE EM CONTATO</h3>
        <p>Matricule-se agora mesmo! Fale com um de nossos atendentes</p>
        <S.ContainerInput>
          <div>
            <S.InputContact type="text" placeholder="nome" />
            <S.InputContact type="text" placeholder="telefone" />
            <img src={borderButton} alt="" />
          </div>
          <div>
            <S.InputContact type="text" placeholder="nome" />
            <S.InputContact type="text" placeholder="email" />
            <img src={borderButton} alt="" />
          </div>
        </S.ContainerInput>
        <Button>SOLICITAR CONTATO</Button>
      </div>
    </S.ContainerContact>
  )
}

export default Contact
