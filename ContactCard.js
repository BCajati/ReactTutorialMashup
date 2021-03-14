import React from "react"

function ContactCard(props){
    return(
        <div>
            <img src={props.imgUrl}></img>
            <h3>{props.name}</h3>
            <p>Phone: {props.name}</p>

        </div>
    )
}

export default ContactCard