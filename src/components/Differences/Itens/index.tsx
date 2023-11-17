import Item from './Item'
import ItemList from '@/components/Differences/Itens/items.json'
import * as S from './styles'

const Items = () => {
  return (
    <S.ContainerItems>
      {ItemList.map((item) => (
        <Item key={item.title} {...item} />
      ))}
    </S.ContainerItems>
  )
}

export default Items
