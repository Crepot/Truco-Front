import React from 'react';
import { BrowserRouter,Route,Routes as Switch } from 'react-router-dom';
import App from '../Pages/App';
import Menu from '../Pages/Menu';
import Login from '../Pages/Login';
import Games from '../Pages/Games';
import {Provider} from 'react-redux'
import store  from '../reducers/index'

// import {Provider} from 'react-redux'


function Routes(){
    return(
        <BrowserRouter>
        <Provider store={store}>

            <Switch>
                <Route path='/App/:id' element={<App/>}/>
                <Route path='/Menu' element={<Menu/>}/>
                <Route path='/Games' element={<Games/>}/>
                <Route path='/' element={<Login/>}/>

            </Switch>
            </Provider>

        </BrowserRouter>
    );
}


export default Routes