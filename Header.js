import React from "react"
import './index.css'

function Header(props){
    return(
        <header className="navbar">{props.motto}</header>
    )
}

export default Header