import React from 'react';


function Prod (props){
    return (
        <div>
            <div>{props.product.name}</div>
            <div>{props.product.price}</div>
            <img src = {props.product.image_url} alt = "Image"/>
            <button onClick = {() => props.dlt(props.product.id)} > Delete </button>
        </div>
    )
}

export default Prod;