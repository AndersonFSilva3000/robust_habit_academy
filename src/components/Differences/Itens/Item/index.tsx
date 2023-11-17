import { Button } from '@/styles'
import * as S from './styles'
import itemsList from '@/components/Differences/Itens/items.json'
import Arrow from '@/assets/Arrow.png'

type Props = (typeof itemsList)[0]

const Item = (props: Props) => {
  const { image, title, description, button } = props

  return (
    <S.ContainerItem>
      <img src={image} alt="" />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <Button>
        {button} <img src={Arrow} alt="" />
      </Button>
    </S.ContainerItem>
  )
}

export default Item
