import React from 'react';
import {withRouter} from 'react-router-dom';

function Prod (props){
    return (
        <div className = "itemLine">
            <div className = "test">
                <img src = {props.product.image_url} alt = "Image" className = "imeg"/>
                <div className = "itemTextHome">
                    <div>{props.product.name}</div>
                    <div>${props.product.price}</div>
                </div>
                <button className="btnz" onClick = {() => props.dlt(props.product.id)} > Delete </button>
                <button className="btnz" onClick ={() => props.history.push(`/form/${props.product.id}`)}> Edit </button>
            </div>
        </div>
    )
}

export default withRouter(Prod);