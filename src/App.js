import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Narbar/Narbar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MoreStuff from "./components/MoreStuff/MoreStuff";
import Home from "./containers/Home/Home";
import Products from "./containers/Products/Products";
import UserLogOrSing from "./containers/UserLogOrSing/UserLogOrSing";
import UserCart from "./containers/UserCart/UserCart";
import ContactUs from "./containers/ContactUs/ContactUs";
import ProductDetails from "./containers/ProductDetails/ProductDetails";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/contactus" component={ContactUs} />
        <Route exact path="/userLogOrSing" component={UserLogOrSing} />
        <Route exact path="/userCart" component={UserCart} />
        <Route exact path="/moreStuff" component={MoreStuff} />
        <Route
          exact
          path="/productDetails/:productID"
          component={ProductDetails}
        />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;