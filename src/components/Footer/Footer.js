import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import footerLogo from "../../assets/images/logofooter.png";
import paymentMethodPic2 from "../../assets/images/paypal-curved-32px.png";
import paymentMethodPic1 from "../../assets/images/visa-curved-32px.png";
import paymentMethodPic3 from "../../assets/images/discover-curved-32px.png";
import paymentMethodPic4 from "../../assets/images/maestro-curved-32px.png";
import * as actionCreator from "../../store/action/actionCreator/adminActionCreator";

const Footer = (props) => {
  return (
    <footer>
      <div className="container">
        <div className="wrap-footer">
          <div className="row">
            <div className="col-md-3 col-footer footer-1">
              <img src={footerLogo} alt="nothing" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
            </div>
            <div className="col-md-3 col-footer footer-2">
              <div className="heading">
                <h4>Customer Service</h4>
              </div>
              <ul>
                <li>
                  <Link to="/moreStuff">Delivery Information</Link>
                </li>
                <li>
                  <Link to="/moreStuff">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/moreStuff">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/moreStuff">Contact Us</Link>
                </li>
                {props.isAuth ? (
                  <React.Fragment>
                    <li>
                      <a onClick={() => props.logout()}>ADMIN (LOGOUT)</a>
                    </li>
                    <li>
                    <Link to="/admin/showAllProducts">ADMIN (SHOW ALL PRODUCT)</Link>
                    </li>
                    <li>
                    <Link to="/admin/addNewProduct">ADMIN (ADD PRODUCT)</Link>
                    </li>
                  </React.Fragment>
                ) : (
                  <li>
                    <Link to="/admin/login">ADMIN (LOGIN)</Link>
                  </li>
                )}
              </ul>
            </div>
            <div className="col-md-3 col-footer footer-3">
              <div className="heading">
                <h4>My Account</h4>
              </div>
              <ul>
                <li>
                  <Link to="/moreStuff">My Account</Link>
                </li>
                <li>
                  <Link to="/moreStuff">Brands</Link>
                </li>
                <li>
                  <Link to="/moreStuff">Gift Vouchers</Link>
                </li>
                <li>
                  <Link to="/moreStuff">Specials</Link>
                </li>
                <li>
                  <Link to="/moreStuff">Site Map</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-footer footer-4">
              <div className="heading">
                <h4>Contact Us</h4>
              </div>
              <ul>
                <li>
                  <span className="glyphicon glyphicon-home"></span>California,
                  United States 3000009
                </li>
                <li>
                  <span className="glyphicon glyphicon-earphone"></span>+91
                  8866888111
                </li>
                <li>
                  <span className="glyphicon glyphicon-envelope"></span>
                  infor@yoursite.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              Your Store © 20xx -{" "}
              <Link
                to="http://www.365bootstrap.com"
                rel="nofollow"
                target="_blank"
              >
                Ecommerce Themes
              </Link>{" "}
              Designed by{" "}
              <Link
                to="http://www.365bootstrap.com"
                rel="nofollow"
                target="_blank"
              >
                365BOOTSTRAP
              </Link>
            </div>
            <div className="col-md-6">
              <div className="pull-right">
                <ul>
                  <li>
                    <img src={paymentMethodPic1} alt="nothing" />
                  </li>
                  <li>
                    <img src={paymentMethodPic2} alt="nothing" />
                  </li>
                  <li>
                    <img src={paymentMethodPic3} alt="nothing" />
                  </li>
                  <li>
                    <img src={paymentMethodPic4} alt="nothing" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.adminReducer.isAuth,
  };
};

const mapDispatchToPorps = (dispatch) => {
  return {
    logout: () => dispatch(actionCreator.admin_logout_start()),
  };
};

export default connect(mapStateToProps, mapDispatchToPorps)(Footer);
