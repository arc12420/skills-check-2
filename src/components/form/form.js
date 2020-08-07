import React from 'react';


 export default class Form extends React.Component{   
//     const productAdd = (props) => {
//         const {id, name, price, image_url} = props.data;
     render(){
    return(
        <div className="addMerch">
            <input className="image_UrlInput" placeholder = "Image_URL"/>
            <input className="nameInput" placeholder = "Name"/>
            <input className="priceInput" placeholder = "Price"/>
            <button className="submitButton"
            //  onClick={props.addProduct}
             > Submit </button>
            <button className="cancelButton" > Cancel </button>
        </div>
        );
     }
    }
//  };