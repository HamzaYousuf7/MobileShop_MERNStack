import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "./components/Narbar/Narbar";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MoreStuff from "./components/MoreStuff/MoreStuff";
import Home from "./containers/Home/Home";
import Products from "./containers/Products/Products";
import UserLogOrSing from "./containers/UserLogOrSing/UserLogOrSing";
import UserCart from "./containers/UserCart/UserCart";
import ContactUs from "./containers/ContactUs/ContactUs";
import ProductDetails from "./containers/ProductDetails/ProductDetails";
import AdminAddnewProd from "./containers/Admin/AdminAddnewProd/AdminAddnewProp";
import AdminShowAllProd from "./containers/Admin/AdminShowAllProd/AdminShowAllProd";
import AdminLogin from "./containers/Admin/AdminLogin/AdminLogin";

import * as actionCreator from "./store/action/actionCreator/userActionCreator";

import "./App.css";

const App = (props) => {
  useEffect(() => {
    props.autoLogin();
  }, []);

  let routes;

  if (props.isAuth) {
    routes = (
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
        <Route exact path="/admin/addNewProduct" component={AdminAddnewProd} />
        <Route
          exact
          path="/admin/showAllProducts"
          component={AdminShowAllProd}
        />
        <Route component={PageNotFound} />
      </Switch>
    );
  } else {
    routes = (
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
        <Route exact path="/admin/login" component={AdminLogin} />
        <Route component={PageNotFound} />
      </Switch>
    );
  }
  return (
    <React.Fragment>
      <Navbar />
      {routes}
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.adminReducer.isAuth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(actionCreator.autoLogin()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
