import React from "react";
import Home from "./Pages/HomePage/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DataProvider } from "./Context/ProductContext/ProductContext";

import SignUp from "./Pages/SignUp/SignUp";
import CartPage from "./Pages/CartPage/CartPage";
import Header from "./Components/Header/Header";
import Details from "./Pages/Details/Details";
import CategoryPage from "./Pages/CategoryPage/CatagoryPage";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <DataProvider>
      <div className="bg-gray-100 ">
        <Router>
          <Header />
          <Switch>
            <Route path="/sign-up">
              <SignUp />
            </Route>

            <Route path="/details/:id" children={<Details />}></Route>
            <Route path="/category/:cat" children={<CategoryPage />}></Route>
            <Route path="/cart">
              <CartPage />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
