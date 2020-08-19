import React from "react";
import { Link } from "react-router-dom";

import tempImg from "../../assets/images/iphone.png";

const products = () => {
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
                <Link to="category.html">Category : Mobile</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div id="main-content" className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <div className="products">
                  <div className="col-lg-4 col-md-4 col-xs-12">
                    <div className="product">
                      <div className="image">
                        <Link to="product.html">
                          <img src={tempImg} alt="nothing" />
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
                  <div className="col-lg-4 col-md-4 col-xs-12">
                    <div className="product">
                      <div className="image">
                        <Link to="product.html">
                          <img src={tempImg} alt="nothing" />
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
                  <div className="col-lg-4 col-md-4 col-xs-12">
                    <div className="product">
                      <div className="image">
                        <Link to="product.html">
                          <img src={tempImg} alt="nothing" />
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
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="products">
                  <div className="col-lg-4 col-md-4 col-xs-12">
                    <div className="product">
                      <div className="image">
                        <Link to="product.html">
                          <img src={tempImg} alt="nothing" />
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
                  <div className="col-lg-4 col-md-4 col-xs-12">
                    <div className="product">
                      <div className="image">
                        <Link to="product.html">
                          <img src={tempImg} alt="nothing" />
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
                  <div className="col-lg-4 col-md-4 col-xs-12">
                    <div className="product">
                      <div className="image">
                        <Link to="product.html">
                          <img src={tempImg} alt="nothing" />
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
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="products">
                  <div className="col-lg-4 col-md-4 col-xs-12">
                    <div className="product">
                      <div className="image">
                        <Link to="product.html">
                          <img src={tempImg} alt="nothing" />
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
                  <div className="col-lg-4 col-md-4 col-xs-12">
                    <div className="product">
                      <div className="image">
                        <Link to="product.html">
                          <img src={tempImg} alt="nothing" />
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
                  <div className="col-lg-4 col-md-4 col-xs-12">
                    <div className="product">
                      <div className="image">
                        <Link to="product.html">
                          <img src={tempImg} alt="nothing" />
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
                </div>
              </div>
            </div>
            <div className="row text-center">
              <ul className="pagination">
                <li className="active">
                  <Link to="#">1</Link>
                </li>
                <li>
                  <Link to="#">2</Link>
                </li>
                <li>
                  <Link to="#">3</Link>
                </li>
                <li>
                  <Link to="#">4</Link>
                </li>
                <li>
                  <Link to="#">5</Link>
                </li>
              </ul>
            </div>
          </div>
          <div id="sidebar" className="col-md-4">
            <div className="widget wid-categories">
              <div className="heading">
                <h4>CATEGORIES</h4>
              </div>
              <div className="content">
                <ul>
                  <li>
                    <Link to="#">PC Computers</Link>
                  </li>
                  <li>
                    <Link to="#">Laptops & Notebooks</Link>
                  </li>
                  <li>
                    <Link to="#">Mobiles & Tablet</Link>
                  </li>
                  <li>
                    <Link to="#">Software</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="widget wid-type">
              <div className="heading">
                <h4>TYPE</h4>
              </div>
              <div className="content">
                <select>
                  <option value="EL" selected>
                    Electronics
                  </option>
                  <option value="MT">Mice and Trackballs</option>
                  <option value="WC">Web Cameras</option>
                  <option value="TA">Tablates</option>
                  <option value="AP">Audio Parts</option>
                </select>
              </div>
            </div>
            <div className="widget wid-discouts">
              <div className="heading">
                <h4>DISCOUNTS</h4>
              </div>
              <div className="content">
                <label className="checkbox">
                  <input type="checkbox" name="discount" checked="" />
                  Upto - 10% (20)
                </label>
                <label className="checkbox">
                  <input type="checkbox" name="discount" />
                  40% - 50% (5)
                </label>
                <label className="checkbox">
                  <input type="checkbox" name="discount" />
                  30% - 20% (7)
                </label>
                <label className="checkbox">
                  <input type="checkbox" name="discount" />
                  10% - 5% (2)
                </label>
                <label className="checkbox">
                  <input type="checkbox" name="discount" />
                  Other(50)
                </label>
              </div>
            </div>
            <div className="widget wid-brand">
              <div className="heading">
                <h4>BRAND</h4>
              </div>
              <div className="content">
                <label className="checkbox">
                  <input type="checkbox" name="brand" />
                  Nokia
                </label>
                <label className="checkbox">
                  <input type="checkbox" name="brand" />
                  Samsung
                </label>
                <label className="checkbox">
                  <input type="checkbox" name="brand" />
                  Iphone
                </label>
                <label className="checkbox">
                  <input type="checkbox" name="brand" />
                  HTC
                </label>
                <label className="checkbox">
                  <input type="checkbox" name="brand" />
                  Oppo
                </label>
                <label className="checkbox">
                  <input type="checkbox" name="brand" />
                  Kings
                </label>
                <label className="checkbox">
                  <input type="checkbox" name="brand" />
                  Zumba
                </label>
              </div>
            </div>
            <div className="widget wid-product">
              <div className="heading">
                <h4>LATEST</h4>
              </div>
              <div className="content">
                <div className="product">
                  <Link to="#">
                    <img src={tempImg} alt="nothing" />
                  </Link>
                  <div className="wrapper">
                    <h5>
                      <Link to="#">Samsung Galaxy Tab</Link>
                    </h5>
                    <div className="price">$122</div>
                    <div className="rating">
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star-empty"></span>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <Link to="#">
                    <img src={tempImg} alt="nothing" />
                  </Link>
                  <div className="wrapper">
                    <h5>
                      <Link to="#">Samsung Galaxy Tab</Link>
                    </h5>
                    <div className="price">$122</div>
                    <div className="rating">
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star"></span>
                      <span className="glyphicon glyphicon-star-empty"></span>
                    </div>
                  </div>
                </div>
                <div className="product">
                  <Link to="#">
                    <img src={tempImg} alt="nothing" />
                  </Link>
                  <div className="wrapper">
                    <h5>
                      <Link to="#">Samsung Galaxy Tab</Link>
                    </h5>
                    <div className="price">$122</div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default products;
