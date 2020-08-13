import React from 'react';
import routes from './routes';
import HeaderNew from './components/headerNew/headerNew';
import "./App.css";


function App (props){
    return (
        
            <div className="page">
            <HeaderNew/>
            {routes}
            </div>
    )
}

export default App;