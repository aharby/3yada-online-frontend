import React from "react"
import { Link } from "react-router-dom"

import { urlFor } from "../../client"
import { withAnimation } from "../HOCs/withAnimation"

const OfferCard = (props) => {
    const adr =props.item.location.formatted_address.split(",")

    return (
      <div className="card">
          <h3 className="card--h3">{props.item.name}</h3>
          {props.item.coverImg &&
          <Link to={`/doctors/${props.item.slug.current}`}>
              <img height="160px" src={urlFor(props.item.coverImg).url()} alt='cover' className="card--image" />
          </Link>}
          <div className="card--stats">
          <span className="fa fa-star card--star"></span>
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