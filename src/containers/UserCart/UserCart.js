import React from "react";
import { Link } from "react-router-dom";

import tempImg from "../../assets/images/galaxy-note.jpg";

const userCart = () => {
  return (
    <div id="page-content" className="single-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="breadcrumb">
              <li>
                <Link to="index.html">Home</Link>
              </li>
              <li>
                <Link to="cart.html">Cart</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="product well">
            <div className="col-md-3">
              <div className="image">
                <img src={tempImg} alt="nothing"/>
              </div>
            </div>
            <div className="col-md-9">
              <div className="caption">
                <div className="name">
                  <h3>
                    <Link to="product.html">Aliquam erat volutpat</Link>
                  </h3>
                </div>
                <div className="info">
                  <ul>
                    <li>Brand: text</li>
                    <li>ID: 0122222</li>
                  </ul>
                </div>
                <div className="price">
                  $122<span>$98</span>
                </div>
                <label>Qty: </label>{" "}
                <input className="form-inline quantity" type="text" value="1" />
                <Link to="#" className="btn btn-2 ">
                  Update
                </Link>
                <hr />
                <Link to="#" className="btn btn-default pull-right">
                  REMOVE
                </Link>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
        <div className="row">
          <div className="product well">
            <div className="col-md-3">
              <div className="image">
                <img src={tempImg} alt="nothing"/>
              </div>
            </div>
            <div className="col-md-9">
              <div className="caption">
                <div className="name">
                  <h3>
                    <Link to="product.html">Aliquam erat volutpat</Link>
                  </h3>
                </div>
                <div className="info">
                  <ul>
                    <li>Brand: text</li>
                    <li>ID: 0122222</li>
                  </ul>
                </div>
                <div className="price">
                  $122<span>$98</span>
                </div>
                <label>Qty: </label>{" "}
                <input className="form-inline quantity" type="text" value="1" />
                <Link to="#" className="btn btn-2 ">
                  Update
                </Link>
                <hr />
                <Link to="#" className="btn btn-default pull-right">
                  REMOVE
                </Link>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-md-offset-8 ">
            <center>
              <Link to="#" className="btn btn-1">
                Continue To Shopping
              </Link>
            </center>
          </div>
        </div>
        <div className="row">
          <div className="pricedetails">
            <div className="col-md-4 col-md-offset-8">
              <table>
                <h6>Price Details</h6>
                <tr>
                  <td>Total</td>
                  <td>350.00</td>
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
                  <td>400.00</td>
                </tr>
              </table>
              <center>
                <Link to="#" className="btn btn-1">
                  Checkout
                </Link>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userCart;
