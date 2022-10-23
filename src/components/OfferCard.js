import React from "react"
import star from '../assets/star.png'
import { urlFor } from "../client"

export default function OfferCard(props) {
  return (
      <div className="card">
          <h3 className="card--h3">{props.item.name}</h3>
          <img src={urlFor(props.item.coverImg).url()} alt='cover' className="card--image" />
          <div className="card--stats">
              <img src={star} alt="star" className='card--star' />
              <span>{props.item.rating}</span>
              <span className='gray'>({props.item.reviewCount})</span>
              <span className='gray'>{props.item.location}</span>
          </div>
          <p>{props.title}</p>
          <p><span className='bold'>From ${props.item.price}</span></p>
      </div>
  )
}