import React from 'react'
import "./Dish.css"

export const Dish = ({item, restaurantInfo}) => {
  return (
    <div className='dish-card'>
        <img src={item.imgSrc} />
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <p>{restaurantInfo.name}</p>
    </div>
  )
}
