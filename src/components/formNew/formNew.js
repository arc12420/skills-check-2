import React, { Component } from 'react';
import axios from 'axios';

class FormNew extends Component{
    constructor(){
        super()
        this.state = {
            name: "",
            price: "",
            image_url: "",
            edit: false
        }
    }

    componentDidMount() {
        console.log(this.props)
        if(this.props.match.params.id)
        {
            axios.get(`/api/single/product/${this.props.match.params.id}`)
            .then( res => {
                this.setState({
                    edit: true,
                    name: res.data.name,
                    price: res.data.price,
                    image_url: res.data.image_url
                })
            })
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
};

saveProduct = () => {
    axios.put(`/api/products/${this.props.match.params.id}`, {...this.state})
    .then( res => {
        this.props.history.push('/')
    })
};

    render(){
        return(
            <div className = "mngAdd">
            <div className = "addItemz">
                <h3> Image URL: </h3>
                <input onChange = {(event) => this.handleImage(event.target.value)} placeholder = "Image_url" value = {this.state.image_url} />
                <h3> Product Name </h3>
                <input onChange = {(event) => this.handleName(event.target.value)} placeholder = "Product Name" value = {this.state.name}/>
                <h3> Price </h3>
                <input onChange = {(event) => this.handlePrice(event.target.value)} placeholder = "Price" value = {this.state.price} />
                <button className='btnza' onClick = {() => this.props.history.push('/')}> Cancel </button>
                {!this.state.edit ? <button className='btnza' onClick = {() => this.sendProduct()}> Add to Inventory </button> :
                <button className='btnza' onClick = {() => this.saveProduct()}> Save </button>}
            </div>
            </div>
        )
    }
}








export default FormNew;