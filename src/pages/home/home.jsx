import React, { useState } from 'react'
import "./home.css"
import { useAppContext } from '../../contexts/AppContext'
import { Dish } from '../../components/dish/Dish';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const {cuisineList, data} = useAppContext();
  const navigate = useNavigate();

  const [ cuisineType, setCuisineType] = useState(false);
 
  const filter = cuisineType ? data.filter(item =>+item.cuisine_id === +cuisineType) : data;


  return (
    <div className='home-page'>
      <h1>Food Ordering App</h1>
      <h2>Select Your Cuisine:</h2>
      {
        cuisineList?.map((item) => {
          return(
            <div  onClick ={() => setCuisineType(+item.id)} className='cuisine-item'>
              <p >{item.name}</p>
            </div>
          )
        })
      }

      {
        filter?.map((restaurant) => {

          return(
            <div>
              <h2 onClick={() => navigate(`/restaurant/${restaurant.id}`)}>{restaurant.name}</h2>
              {
                restaurant.menu.map((item) => {

                  return(
                    <Dish item={item} restaurantInfo={restaurant}/>

                  )
                })
              }
            </div>
          )
        })
      }




    </div>
  )
}
