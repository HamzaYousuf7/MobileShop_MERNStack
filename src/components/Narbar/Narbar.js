import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import * as actionCreator from "../../store/action/actionCreator/userActionCreator";
import mainLogo from "../../assets/images/logo.png";

const Navbar = (props) => {
  const [itemInCart, setitemInCart] = useState(0);

  useEffect(() => {
    setitemInCart(props.itemsInCart.length);
  }, [props.itemsInCart.length]);
  return (
    <React.Fragment>
      <nav id="top">
        <div className="container">
          <div className="row">
            <div className="col-xs-6"></div>
            <div className="col-xs-6">
              <ul className="top-link">
                <li>
                  {props.isAuthenticated ? (
                    <a onClick={props.logout}>
                      <span className="glyphicon glyphicon-user"></span> Logout
                    </a>
                  ) : (
                    <NavLink to="/userLogOrSing">
                      <span className="glyphicon glyphicon-user"></span> My
                      Account
                    </NavLink>
                  )}
                </li>
                <li>
                  <NavLink to="/contactus">
                    <span className="glyphicon glyphicon-envelope"></span>{" "}
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <header className="container">
        <div className="row">
          <div className="col-md-4">
            <div id="logo">
              <img src={mainLogo} alt="nothing" />
            </div>
          </div>
          <div className="col-md-4">
            <form className="form-search">
              <input type="text" className="input-medium search-query" />
              <button type="submit" className="btn">
                <span className="glyphicon glyphicon-search"></span>
              </button>
            </form>
          </div>
          <div className="col-md-4">
            <div id="cart">
              <NavLink className="btn btn-1" to="/userCart">
                <span className="glyphicon glyphicon-shopping-cart"></span>CART
                : {itemInCart} ITEM
              </NavLink>
            </div>
          </div>
        </div>
      </header>

      <nav id="menu" className="navbar">
        <div className="container">
          <div className="navbar-header">
            <span id="heading" className="visible-xs">
              Categories
            </span>
            <button
              type="button"
              className="btn btn-navbar navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-ex1-collapse"
            >
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="dropdown">
                <NavLink
                  to="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  PC Computers
                </NavLink>
                <div className="dropdown-menu">
                  <div className="dropdown-inner">
                    <ul className="list-unstyled">
                      <li>
                        <NavLink to="/moreStuff">Window</NavLink>
                      </li>
                      <li>
                        <NavLink to="/moreStuff">MacBook</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="dropdown">
                <NavLink
                  to="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Laptops &amp; Notebooks
                </NavLink>
                <div className="dropdown-menu">
                  <div className="dropdown-inner">
                    <ul className="list-unstyled">
                      <li>
                        <NavLink to="/moreStuff">Dell</NavLink>
                      </li>
                      <li>
                        <NavLink to="/moreStuff">Asus</NavLink>
                      </li>
                      <li>
                        <NavLink to="/moreStuff">Samsung</NavLink>
                      </li>
                      <li>
                        <NavLink to="/moreStuff">Lenovo</NavLink>
                      </li>
                      <li>
                        <NavLink to="/moreStuff">Acer</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="dropdown">
                <NavLink
                  to="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Mobiles &amp; Tablet
                </NavLink>
                <div className="dropdown-menu">
                  <div className="dropdown-inner">
                    <ul className="list-unstyled">
                      <li>
                        <NavLink to="/products">Iphone</NavLink>
                      </li>
                      <li>
                        <NavLink to="/products">Samsung</NavLink>
                      </li>
                      <li>
                        <NavLink to="/products">Nokia</NavLink>
                      </li>
                      <li>
                        <NavLink to="/products">Lenovo</NavLink>
                      </li>
                      <li>
                        <NavLink to="/products">Google</NavLink>
                      </li>
                    </ul>
                    <ul className="list-unstyled">
                      <li>
                        <NavLink to="/products">Nexus</NavLink>
                      </li>
                      <li>
                        <NavLink to="/products">Dell</NavLink>
                      </li>
                      <li>
                        <NavLink to="/products">Oppo</NavLink>
                      </li>
                      <li>
                        <NavLink to="/products">Blackberry</NavLink>
                      </li>
                      <li>
                        <NavLink to="/products">HTC</NavLink>
                      </li>
                    </ul>
                    <ul className="list-unstyled">
                      <li>
                        <NavLink to="/products">LG</NavLink>
                      </li>
                      <li>
                        <NavLink to="/products">Q-Mobiles</NavLink>
                      </li>
                      <li>
                        <NavLink to="/products">Sony</NavLink>
                      </li>
                      <li>
                        <NavLink to="/products">Wiko</NavLink>
                      </li>
                      <li>
                        <NavLink to="/products">T&T</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <NavLink to="/moreStuff">Software</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.userReducer.isAuthenticated,
    itemsInCart: state.productsReducer.userCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actionCreator.logout_start()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
