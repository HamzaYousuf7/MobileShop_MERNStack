import React from "react";
import { Link } from "react-router-dom";

import subBanner1 from "../../assets/images/sub-banner1.png";
import subBanner2 from "../../assets/images/sub-banner2.png";
import subBanner3 from "../../assets/images/sub-banner3.png";
import subBanner4 from "../../assets/images/sub-banner4.jpg";
import subBanner5 from "../../assets/images/sub-banner5.png";

import tempPicOfMob from "../../assets/images/iphone.png";

const Home = () => {
  return (
    <div id="page-content" className="home-page">
      <div className="container">
        <div className="row">
          <div className="banner">
            <div className="col-sm-4">
              <img src={subBanner1} alt="nothing" />
            </div>
            <div className="col-sm-4">
              <img src={subBanner2} alt="nothing" />
            </div>
            <div className="col-sm-4">
              <img src={subBanner3} alt="nothing" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="heading">
              <h2>SPECIAL PRODUCTS</h2>
            </div>
            <div className="products">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="product">
                  <div className="image">
                    <Link to={"/productDetails/" + 15}>
                      <img src={tempPicOfMob} alt="nothing" />
                    </Link>
                  </div>
                  <div className="buttons">
                    <Link className="btn cart" to="#">
                      <span className="glyphicon glyphicon-shopping-cart"></span>
                    </Link>
                    <Link className="btn wishlist" to="#">
                      <span className="glyphicon glyphicon-heart"></span>
                    </Link>
                    <Link className="btn compare" to="#">
                      <span className="glyphicon glyphicon-transfer"></span>
                    </Link>
                  </div>
                  <div className="caption">
                    <div className="name">
                      <h3>
                        <Link to="product.html">Aliquam erat volutpat</Link>
                      </h3>
                    </div>
                    <div className="price">
                      $122<span>$98</span>
                    </div>
                    <div className="rating">
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star-empty"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="product">
                  <div className="image">
                    <Link to="product.html">
                      <img src={tempPicOfMob} alt="nothing" />
                    </Link>
                  </div>
                  <div className="buttons">
                    <Link className="btn cart" to="#">
                      <span className="glyphicon glyphicon-shopping-cart"></span>
                    </Link>
                    <Link className="btn wishlist" to="#">
                      <span className="glyphicon glyphicon-heart"></span>
                    </Link>
                    <Link className="btn compare" to="#">
                      <span className="glyphicon glyphicon-transfer"></span>
                    </Link>
                  </div>
                  <div className="caption">
                    <div className="name">
                      <h3>
                        <Link to="product.html">Aliquam erat volutpat</Link>
                      </h3>
                    </div>
                    <div className="price">
                      $122<span>$98</span>
                    </div>
                    <div className="rating">
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star-empty"></span>
                      <span className="glyphicon glyphicon-star-empty"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="product">
                  <div className="image">
                    <Link to="product.html">
                      <img src={tempPicOfMob} alt="nothing" />
                    </Link>
                  </div>
                  <div className="buttons">
                    <Link className="btn cart" to="#">
                      <span className="glyphicon glyphicon-shopping-cart"></span>
                    </Link>
                    <Link className="btn wishlist" to="#">
                      <span className="glyphicon glyphicon-heart"></span>
                    </Link>
                    <Link className="btn compare" to="#">
                      <span className="glyphicon glyphicon-transfer"></span>
                    </Link>
                  </div>
                  <div className="caption">
                    <div className="name">
                      <h3>
                        <Link to="product.html">Aliquam erat volutpat</Link>
                      </h3>
                    </div>
                    <div className="price">
                      $122<span>$98</span>
                    </div>
                    <div className="rating">
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star-empty"></span>
                      <span className="glyphicon glyphicon-star-empty"></span>
                      <span className="glyphicon glyphicon-star-empty"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="product">
                  <div className="image">
                    <Link to="product.html">
                      <img src={tempPicOfMob} alt="nothing" />
                    </Link>
                  </div>
                  <div className="buttons">
                    <Link className="btn cart" to="#">
                      <span className="glyphicon glyphicon-shopping-cart"></span>
                    </Link>
                    <Link className="btn wishlist" to="#">
                      <span className="glyphicon glyphicon-heart"></span>
                    </Link>
                    <Link className="btn compare" to="#">
                      <span className="glyphicon glyphicon-transfer"></span>
                    </Link>
                  </div>
                  <div className="caption">
                    <div className="name">
                      <h3>
                        <Link to="product.html">Aliquam erat volutpat</Link>
                      </h3>
                    </div>
                    <div className="price">
                      $122<span>$98</span>
                    </div>
                    <div className="rating">
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="banner">
            <div className="col-sm-6">
              <img src={subBanner4} alt="nothing" />
            </div>
            <div className="col-sm-6">
              <img src={subBanner5} alt="nothing" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="heading">
              <h2>FEATURED PRODUCTS</h2>
            </div>
            <div className="products">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="product">
                  <div className="image">
                    <Link to="product.html">
                      <img src={tempPicOfMob} alt="nothing" />
                    </Link>
                  </div>
                  <div className="buttons">
                    <Link className="btn cart" to="#">
                      <span className="glyphicon glyphicon-shopping-cart"></span>
                    </Link>
                    <Link className="btn wishlist" to="#">
                      <span className="glyphicon glyphicon-heart"></span>
                    </Link>
                    <Link className="btn compare" to="#">
                      <span className="glyphicon glyphicon-transfer"></span>
                    </Link>
                  </div>
                  <div className="caption">
                    <div className="name">
                      <h3>
                        <Link to="product.html">Aliquam erat volutpat</Link>
                      </h3>
                    </div>
                    <div className="price">
                      $122<span>$98</span>
                    </div>
                    <div className="rating">
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star-empty"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="product">
                  <div className="image">
                    <Link to="product.html">
                      <img src={tempPicOfMob} alt="nothing" />
                    </Link>
                  </div>
                  <div className="buttons">
                    <Link className="btn cart" to="#">
                      <span className="glyphicon glyphicon-shopping-cart"></span>
                    </Link>
                    <Link className="btn wishlist" to="#">
                      <span className="glyphicon glyphicon-heart"></span>
                    </Link>
                    <Link className="btn compare" to="#">
                      <span className="glyphicon glyphicon-transfer"></span>
                    </Link>
                  </div>
                  <div className="caption">
                    <div className="name">
                      <h3>
                        <Link to="product.html">Aliquam erat volutpat</Link>
                      </h3>
                    </div>
                    <div className="price">
                      $122<span>$98</span>
                    </div>
                    <div className="rating">
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star-empty"></span>
                      <span className="glyphicon glyphicon-star-empty"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="product">
                  <div className="image">
                    <Link to="product.html">
                      <img src={tempPicOfMob} alt="nothing" />
                    </Link>
                  </div>
                  <div className="buttons">
                    <Link className="btn cart" to="#">
                      <span className="glyphicon glyphicon-shopping-cart"></span>
                    </Link>
                    <Link className="btn wishlist" to="#">
                      <span className="glyphicon glyphicon-heart"></span>
                    </Link>
                    <Link className="btn compare" to="#">
                      <span className="glyphicon glyphicon-transfer"></span>
                    </Link>
                  </div>
                  <div className="caption">
                    <div className="name">
                      <h3>
                        <Link to="product.html">Aliquam erat volutpat</Link>
                      </h3>
                    </div>
                    <div className="price">
                      $122<span>$98</span>
                    </div>
                    <div className="rating">
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star-empty"></span>
                      <span className="glyphicon glyphicon-star-empty"></span>
                      <span className="glyphicon glyphicon-star-empty"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="product">
                  <div className="image">
                    <Link to="product.html">
                      <img src={tempPicOfMob} alt="nothing" />
                    </Link>
                  </div>
                  <div className="buttons">
                    <Link className="btn cart" to="#">
                      <span className="glyphicon glyphicon-shopping-cart"></span>
                    </Link>
                    <Link className="btn wishlist" to="#">
                      <span className="glyphicon glyphicon-heart"></span>
                    </Link>
                    <Link className="btn compare" to="#">
                      <span className="glyphicon glyphicon-transfer"></span>
                    </Link>
                  </div>
                  <div className="caption">
                    <div className="name">
                      <h3>
                        <Link to="product.html">Aliquam erat volutpat</Link>
                      </h3>
                    </div>
                    <div className="price">
                      $122<span>$98</span>
                    </div>
                    <div className="rating">
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
