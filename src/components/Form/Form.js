import React, { Component } from 'react';
// import './Form.css';
class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            image: "",
            name: "",
            price: "" 
        }
    }
    
    handleImage(value){
        this.setState({image: value});
    }
    handleName(value){
        this.setState({name: value}); 
    }
    handlePrice(value){
        this.setState({value: value});   
    }
    clearScreen(value){   
        this.setState({image: ""});
        this.setState({name: ""});
        this.setState({price: ""});
    }

    render(){    
        return(
            <div>
                <imput value={this.state.image} onChange={ (e) => this.handleImage(e.target.value) }></imput>
                <imput value={this.state.name} onChange={ (e) => this.handleName(e.target.value) }></imput>
                <imput value={this.state.price} onChange={ (e) => this.handlePrice(e.target.value) }></imput>
                <button onClick={e => this.clearScreen()}>Cancel</button>
                <button onClick={e => this.clearAdd()}>Add</button>
            </div>
        );
    }
}

export default Form;