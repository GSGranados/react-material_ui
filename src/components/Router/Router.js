import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from '../../App'
const Router = () =>  {
    
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component= {App}></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
}

export default Router;
