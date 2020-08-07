import React from 'react';
import {withRouter} from 'react-router-dom';

const products = (props) => {
    const {id, name, price, image_url} = props.data;
    
    return(
        <div className="merch" onClick={() => props.getOneProduct}>
            <img className="merchImage" src={image_url} alt = "Product"/>
            <p>{name}</p>
            <h3>${price}</h3>
        </div>
    );
};

export default withRouter(products);