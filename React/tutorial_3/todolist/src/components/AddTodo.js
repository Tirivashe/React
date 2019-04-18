import React, { Component } from 'react'

class AddTodo extends Component{

    state ={
        content: ""
    }

    handleChange = (e) =>{
        const { value } = e.target;
        this.setState({
            content: value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ""
        })
    }

    render(){
        return(
            <div>
               <form onSubmit={this.handleSubmit}>
                <label>Add new Todo</label>
                <input type="text" onChange={this.handleChange} value={this.state.content}></input>
               </form> 
            </div>
        )
    }
}

export default AddTodo