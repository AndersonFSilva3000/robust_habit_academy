import itemList from '@/components/Plans/ItemsPlan/itemPlan.json'
import * as S from './styles'

type Props = (typeof itemList)[0]

const ItemPlan = (props: Props) => {
  const { image, select, title, recommended } = props

  return (
    <S.ContainerItemPlan className={recommended ? 'recommended' : ''}>
      <span>RECOMENDADO POR USUÁRIOS</span>
      <img src={image} alt="" />
      <h4>{title}</h4>
      {select.prince ? (
        <S.ContainerSelect>
          <p>
            {select.description} <span>{select.prince}</span>
          </p>
          <S.ButtonItemPlan>Selecionar</S.ButtonItemPlan>
        </S.ContainerSelect>
      ) : (
        <S.ContainerSelect>
          <p>{select.description}</p>
          <S.ButtonItemPlan>Selecionar</S.ButtonItemPlan>
        </S.ContainerSelect>
      )}
    </S.ContainerItemPlan>
  )
}

export default ItemPlan
