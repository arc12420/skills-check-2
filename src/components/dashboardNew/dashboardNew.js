import React, { Component } from 'react';
import axios from 'axios';

class DashboardNew extends Component{
    constructor(){
        super()
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        this.getProducts()
      };
      getProducts = () => {
          axios.get("/api/products")
          .then( res => {
              console.log(res.data)
              this.setState({
                  products: res.data
              })
          })
      }


    render(){
        const arr = this.state.products.map( (element, index) => {
            return (
                <div>{element.name}</div>
            )
        })
        return(
            <div>
                {arr}

            </div>
        )
    }
};

export default DashboardNew;








