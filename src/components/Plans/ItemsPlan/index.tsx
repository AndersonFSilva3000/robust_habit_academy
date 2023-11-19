import React from 'react'

import ItemPlan from './ItemPlam'
import itemList from './itemPlan.json'

import AOS from 'aos'
import 'aos/dist/aos.css'

import * as S from './styles'

const ItemsPlan = () => {
  React.useEffect(() => {
    AOS.init()
  }, [])

  const aosEffects = ['', 'zoom-in-right', 'zoom-in', 'zoom-in-left']

  return (
    <S.ContainerItemsPlan>
      {itemList.map((item) => (
        <div
          className={`grid${item.id}`}
          key={item.id}
          data-aos={aosEffects[item.id]}
        >
          <ItemPlan {...item} />
        </div>
      ))}
    </S.ContainerItemsPlan>
  )
}

export default ItemsPlan
