import React, { Component } from 'react';
class AddTodo extends Component {
    state = { 
        content: ''
     }

     handleChange = (event)=>{
        this.setState({content: event.target.value})
     }

     handleSubmit =(e)=>{
         e.preventDefault();
         this.props.addTodo(this.state);
         this.setState({content:''})
     }
    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Add new todo: </label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}></input>
                    <button style={{width:'20px', height:'20px', margin:'auto'}}></button>
                </form>
            </div>
         );
    }
}
 
export default AddTodo;