import React, { Component } from 'react';
import axios from 'axios';

class FormNew extends Component{
    constructor(){
        super()
        this.state = {
            name: "",
            price: "",
            image_url: ""
        }
    }

handleImage = (value) => {
    this.setState({image_url: value})
};
handleName = (value) => {
    this.setState({name: value})
};
handlePrice = (value) => {
    this.setState({price: value})
};

sendProduct = () => {
    axios.post('/api/products', {...this.state})
    .then( res => {
        this.props.history.push('/')
    })


}

    render(){
        return(
            <div>FormNew
                <input onChange = {(event) => this.handleImage(event.target.value)} placeholder = "Image_url"/>
                <input onChange = {(event) => this.handleName(event.target.value)} placeholder = "Name"/>
                <input onChange = {(event) => this.handlePrice(event.target.value)} placeholder = "Price"/>
                <button onClick = {() => this.props.history.push('/')}> Cancel </button>
                <button onClick = {() => this.sendProduct()}> Add to Inventory </button>
            </div>
        )
    }
}








export default FormNew;