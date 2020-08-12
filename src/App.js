import React from 'react';
import routes from './routes';
import HeaderNew from './components/headerNew/headerNew';


function App (props){
    return (
        
            <div>
            <HeaderNew/>
            {routes}
            </div>
    )
}

export default App;