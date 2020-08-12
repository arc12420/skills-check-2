import React from 'react';
import {withRouter} from 'react-router-dom';

function Header (props){
    console.log(props)
    return (
        <div>
            <button onClick = {() =>  props.history.push('/')}> Dashboard </button>
            <button onClick = {() => props.history.push('/form')}> Add Inventory </button>
        </div>
    )
}

export default withRouter(Header);


