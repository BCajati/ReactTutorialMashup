import React from "react"

function TodoItem(){
    return(
        <div className="todo-item">
        <input type="checkbox" id="id1" name="todo1" value="todo1"/>
        <label for="id1">Learn React</label>
        <br/>
        </div>
    )
}

export default TodoItem