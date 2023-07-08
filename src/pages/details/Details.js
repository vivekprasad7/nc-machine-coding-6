import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../../contexts/AppContext';
import "./Details.css"
import { Review } from '../../components/review/Review';

export const Details = () => {
    const {ID} = useParams();
    const {data} = useAppContext();
    const [singleRestaurant, setSingleRestaurant] = useState({})
    const [showReviewModal, setShowReviewModal] = useState(false)

    useEffect(()=> {
        setSingleRestaurant(data.find((item) => +item.id === +ID))
    }, [ID])

   

  return (
    <div>
        {
            showReviewModal && (<Review showReviewModal={showReviewModal} setShowReviewModal={setShowReviewModal} resID={ID}/>)
        }
        <h1>{singleRestaurant.name}</h1>
        <div>{singleRestaurant?.menu?.map((item) => {
            return(<>{item.name}, </>)
        })}</div>
        <p>Address: {singleRestaurant.address}</p>
        <p>Phone: {singleRestaurant.phone}</p>
        <button onClick={() => setShowReviewModal(!showReviewModal)}>Add Review</button>
        <hr></hr>

        <div>
            <h2>Ratings</h2>
            {
                singleRestaurant?.ratings?.map((person) => {
                    return(
                        <div>
                            <div className='person'>
                                <img src={person.pp}/>
                                <p>{person.name}</p>
                            </div>
                            <p>Rating: {person.rating}</p>
                            <p>{person.comment}</p>
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}
