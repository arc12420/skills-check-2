import React from 'react';

const products = (props) => {
    const {name, price, image_url} = props.data;
    
export default class Product extends React.Component{  
    render(){  
    return(
            <div className="merch" onClick={() => props.addProduct(`/single/product/${id}`)}>
                <img className="merchImage" src={image_url} alt = "Product"/>
                <p>{name}</p>
                <h3>${price}</h3>
            </div>
            );
        };
    }
}

