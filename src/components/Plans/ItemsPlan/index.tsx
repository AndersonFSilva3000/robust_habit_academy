import ItemPlan from './ItemPlam'
import itemList from './itemPlan.json'

import * as S from './styles'

const ItemsPlan = () => {
  return (
    <S.ContainerItemsPlan>
      {itemList.map((item) => (
        <div className={`grid${item.id}`} key={item.id}>
          <ItemPlan {...item} />
        </div>
      ))}
    </S.ContainerItemsPlan>
  )
}

export default ItemsPlan
