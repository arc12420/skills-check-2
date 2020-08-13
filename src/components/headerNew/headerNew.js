import React from 'react';
import {withRouter} from 'react-router-dom';

function Header (props){
    console.log(props)
    return (
        <div className= "heads">
                <div className="infobox">
                <h3> SHELFIE </h3>
                <button className="btnzH" onClick = {() =>  props.history.push('/')}> Dashboard </button>
                <button className="btnzH" onClick = {() => props.history.push('/form')}> Add Inventory </button>
            </div>
        </div>
    )
}

export default withRouter(Header);


