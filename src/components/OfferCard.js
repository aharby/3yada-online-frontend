import React from "react"
import star from '../assets/star.png'
import { urlFor } from "../client"
import { withAnimation } from "./withAnimation"

const OfferCard = (props) => {
    const adr =props.item.location.formatted_address.split(",")

    return (
      <div className="card">
          <h3 className="card--h3">{props.item.name}</h3>
          <img height="130px"
            width="130px" src={urlFor(props.item.coverImg).url()} alt='cover' className="card--image" />
          <div className="card--stats">
              <img src={star} alt="star" className='card--star' />
              <span>{props.item.rating}</span>
              <span className='gray'>({props.item.reviewCount})</span>
          </div>
          <span className='gray'>{adr[adr.length-3]}</span>
          <p>{props.title}</p>
          <p><span className='bold'>From ${props.item.price}</span></p>
      </div>
  )
}

export default withAnimation(OfferCard)