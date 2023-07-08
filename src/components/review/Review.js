import { Modal } from '@mui/material'
import React, { useState } from 'react'
import "./Review.css"
import { useAppContext } from '../../contexts/AppContext'

export const Review = ({showReviewModal, setShowReviewModal, resID}) => {
    const {data, setData, reviewInput, setReviewInput} = useAppContext();


    const addReviewHandler = () => {
        data.find((item) => + item.id  === +resID).ratings.push(reviewInput);
        setData([...data]);
        setShowReviewModal(false);
    }


    return (
        <Modal open={showReviewModal} onClose={() => setShowReviewModal(false)}>
            <div className='review-modal' style={{display:showReviewModal ? "block" : "none"}}>
                <h1> Add Your Review</h1>
                <div className='rating-input'>
                    <div className='form-unit'>
          <label>Rating:
            <select value={reviewInput?.rating} onChange={(e) => setReviewInput({...reviewInput, rating: e.target.value})}>
              <option value="Select a Rating">Select a Rating</option>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          </label>
        </div>
                    
                </div>

                <div className='comment-input'>
                <label> Comment:
          <input value={reviewInput?.comment}  onChange={(e) => setReviewInput({...reviewInput, comment: e.target.value})} />
        </label>

                </div>

                <button onClick={() => {
                    setShowReviewModal(false);
                    addReviewHandler();
                }}>Submit</button>
                

            </div>
        </Modal>

    )
}
