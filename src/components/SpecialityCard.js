import React from "react"

import { urlFor } from "../client"
import { withAnimation } from './withAnimation'

const  SpecialityCard = (props) => {
console.log("specialitycard props")
console.log(props)
  return (
    
      <div className="card" >
          <h3 className="card--h3">{props.item.name}</h3>
         {props.item.img && <img src={urlFor(props.item.img).url()} alt='cover' className="card--image" />}
      </div>
  )
}

export default withAnimation(SpecialityCard)