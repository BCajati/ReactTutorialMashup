import React from "react"

function Hello()
{
    const date = new Date()
    const hours = date.getHours()
    const styles = {
        fontsize: 30,
        color:"red"
    }
    let timeOfDay
    if (hours < 12){
        timeOfDay = "morning"
        styles.color = "DodgerBlue"
    } else if(hours >= 12 && hours < 17){
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
        styles.color = "DarkBlue"
        styles.fontsize = 50
    }

    return(
        <p style ={styles}>Good {timeOfDay}</p>
    )
    
}

export default Hello