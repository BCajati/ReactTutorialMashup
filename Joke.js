import React from "react"

// function Joke(props)
// {
//     return(
//         <div>
//         <h2>Question: {props.question} </h2>
//         <p>Answer: {props.punchline}</p>
//         <hr/>
//         </div>
//     )
// }

class Joke extends React.Component{
    constructor(){
        super()
        this.state = {
            isFunny : false
        }
    }
    render(){
        let goodJoke = this.state.isFunny ? "yes" : "no"
        return(
            <div>
            <h2>Question: {this.props.question} </h2>
            <p>Answer: {this.props.punchline}</p>
            <hr/>
            <p>This joke is funny: {goodJoke}</p>
            </div>
        ) 
    }
}

export default Joke