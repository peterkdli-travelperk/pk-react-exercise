import {Route, Routes, Switch, Redirect} from "react-router-dom";
import React from 'react';
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
    return (
        <div>
            <header>
                <MainHeader></MainHeader>
            </header>
            <main>
                <Switch>
                    <Route path='/' exact>
                        <Redirect to='/welcome'></Redirect>
                    </Route>
                    <Route path='/welcome'>
                        <Welcome> </Welcome>
                    </Route>
                    <Route path='/products' exact>
                        <Products> </Products>
                    </Route>
                    <Route path='/products/:productId'>
                        <ProductDetail/>
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;
