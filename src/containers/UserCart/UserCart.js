import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actionCreator from "../../store/action/actionCreator/productsActionCreator";
import Spinner from "../../components/UI/Spinner/Spinner";
import Modal from "../../components/UI/Modal/Modal";

const UserCart = (props) => {
  const [userCartProd, setuserCartProd] = useState([]);
  const [totalPrice, settotalPrice] = useState(0);
  const [isModelOpenS, setisModelOpenS] = useState(true);

  useEffect(() => {
    setuserCartProd(props.userCart);
    settotalPrice(props.totalPrice);
  }, []);

  useEffect(() => {
    setuserCartProd(props.userCart);
    settotalPrice(props.totalPrice);
  }, [props.userCart]);

  const closedModalHandler = () => {
    setisModelOpenS(false);
    // only navigate when we successfully place the order
    if (props.responseMessage && !props.isError) {
      props.history.replace("/");
    }
  };

  const checkout = () => {
    const tempArr = [...userCartProd];
    const userID = props.userID;
    const updateFieldsArr = tempArr.map((singleProd) => {
      return {
        productID: singleProd._id,
        name: singleProd.name,
        brandName: singleProd.brandName,
        price: singleProd.price,
        quantity: singleProd.quantity,
        availableColor: singleProd.availableColor,
      };
    });

    // console.log("final obj for cart", {
    //   userID,
    //   orderProducts: updateFieldsArr,
    //   totalPrice: totalPrice,
    // });
    props.checkoutStart({
      userID,
      orderProducts: updateFieldsArr,
      totalPrice: totalPrice,
    });
  };
  return (
    <div id="page-content" className="single-page">
      {(props.isError || props.responseMessage) && (
        <Modal show={isModelOpenS} modalClosed={closedModalHandler}>
          {props.errorMessage || props.responseMessage}
        </Modal>
      )}
      {props.isLoading === true ? <Spinner /> : null}
      {props.isLoading === false && props.isError === false && (
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="breadcrumb">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/userCart">Cart</Link>
                </li>
              </ul>
            </div>
          </div>
          {/**CART FUNC START */}
          {userCartProd.length > 0 ? (
            <React.Fragment>
              {userCartProd.map((singleProd, index) => (
                <div className="row" key={index}>
                  <div className="product well">
                    <div className="col-md-3">
                      <div className="image">
                        <img
                          src={`http://localhost:5000/${singleProd.mainImg}`}
                          alt="nothing"
                          width="165px"
                          height="300px"
                        />
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="caption">
                        <div className="name">
                          <h3>
                            <a> {singleProd.name}</a>
                          </h3>
                        </div>
                        <div className="info">
                          <ul>
                            <li>Brand: {singleProd.brandName}</li>
                            <li>ID: {singleProd._id}</li>
                          </ul>
                        </div>
                        <div className="price">
                          ${singleProd.price - 100}
                          <span>${singleProd.price}</span>
                        </div>
                        <label>Qty: </label>
                        <span> {singleProd.quantity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/**BACK TO SHOPPPIN */}
              <div className="row">
                <div className="col-md-4 col-md-offset-8 ">
                  <center>
                    <Link to="/" className="btn btn-1">
                      Continue To Shopping
                    </Link>
                  </center>
                </div>
              </div>
              {/**AMOUNT CAL */}
              <div className="row">
                <div className="pricedetails">
                  <div className="col-md-4 col-md-offset-8">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <h6>Price Details</h6>
                          </td>
                        </tr>
                        <tr>
                          <td>Total</td>
                          <td>{totalPrice}</td>
                        </tr>
                        <tr>
                          <td>Discount</td>
                          <td>-----</td>
                        </tr>
                        <tr>
                          <td>Delivery Charges</td>
                          <td>100.00</td>
                        </tr>
                        <tr style={{ borderTop: "1px solid #333" }}>
                          <td>
                            <h5>TOTAL</h5>
                          </td>
                          <td>{totalPrice + 100}</td>
                        </tr>
                      </tbody>
                    </table>
                    <center>
                      {/** condtionally showing what  */}
                      {props.isAuthenticated ? (
                        <a onClick={checkout} className="btn btn-1">
                          Checkout
                        </a>
                      ) : (
                        <Link to="/userLogOrSing" className="btn btn-1">
                          Sing up or login to place order
                        </Link>
                      )}
                    </center>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ) : (
            <div className="container">
              <div className="alert alert-info">
                <strong>Info!</strong> You havent selected any thing yet
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userCart: state.productsReducer.userCart,
    totalPrice: state.productsReducer.totalPrice,
    isAuthenticated: state.userReducer.isAuthenticated,
    userID: state.userReducer.userID,
    responseMessage: state.productsReducer.responseMessage,
    isLoading: state.productsReducer.isLoading,
    isError: state.productsReducer.isError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkoutStart: (order) => dispatch(actionCreator.checkout_start(order)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserCart);
