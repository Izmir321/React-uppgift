import React from 'react'

const StarRating = ({ rating }) => {
  return (
    <div style={{ display: 'flex'}}>
      {[...Array(5)].map((_,index) =>(
        <span key ={index} style={{color: index < rating ? '#FFD700' : '#e4e5e9'}}>
           ★
        </span>
      )
      )}
    </div>
  )
}

export default StarRating