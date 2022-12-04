import React from "react"
import { Link } from "react-router-dom"
import { urlFor } from "../../client"
import { withAnimation } from '../HOCs/withAnimation'

const  SpecialityCard = (props) => {

  return (
    
      <div className="card" >
          <h3 className="card--h3">{props.item.name}</h3>
          <Link to={`/specialities/${props.item.slug.current}`}>
            {props.item.img &&
              <img height="160px" src={urlFor(props.item.img).url()} alt='cover' className="card--image" />}
          </Link>
      </div>
  )
}

export default withAnimation(SpecialityCard)