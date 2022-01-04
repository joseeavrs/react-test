import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import AddTestimonios from '../pages/AddTestimonios';

const App = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Layout
                    ComponentEl={Home}
                />
            </Route>
            <Route exact path="/home">
                <Layout
                    ComponentEl={Home}
                />
            </Route>
            <Route exact path="/add/testimonio">
                <Layout
                    ComponentEl={AddTestimonios}
                />
            </Route>
        </Switch>
    </BrowserRouter>
)

export default App;
