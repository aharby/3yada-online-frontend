import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

export function withAnimation (component) {
    const Component = component;

    return (props) => {

        useEffect(()=> {
            Aos.init()
         },[]);
        
        return (
        <div data-aos={props.animation}>
            <Component  {...props}/>
        </div>
        )
    }
}