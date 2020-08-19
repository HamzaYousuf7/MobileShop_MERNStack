import React from "react";
import { Link } from "react-router-dom";

import tempImg from "../../assets/images/galaxy-note.jpg";

const productDetails = (props) => {
  console.log(props);
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
                <Link to="category.html">Category</Link>
              </li>
              <li>
                <Link to="#">Samsung Galaxy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div id="main-content" className="col-md-8">
            <div className="product">
              <div className="col-md-6">
                <div className="image">
                  <img src={tempImg} alt="nothing"/>
                  <div className="image-more">
                    <ul className="row">
                      <li className="col-lg-3 col-sm-3 col-xs-4">
                        <Link to="#">
                          <img
                            className="img-responsive"
                            src={tempImg}
                            alt="nothing"
                          />
                        </Link>
                      </li>
                      <li className="col-lg-3 col-sm-3 col-xs-4">
                        <Link to="#">
                          <img
                            className="img-responsive"
                            src={tempImg}
                            alt="nothing"
                          />
                        </Link>
                      </li>
                      <li className="col-lg-3 col-sm-3 col-xs-4">
                        <Link to="#">
                          <img
                            className="img-responsive"
                            src={tempImg}
                            alt="nothing"
                          />
                        </Link>
                      </li>
                      <li className="col-lg-3 col-sm-3 col-xs-4">
                        <Link to="#">
                          <img
                            className="img-responsive"
                            src={tempImg}
                            alt="nothing"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="caption">
                  <div className="name">
                    <h3>Aliquam erat volutpat</h3>
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
                  <div className="options">
                    AVAILABLE OPTIONS
                    <select>
                      <option value="" selected>
                        ----Please Select----
                      </option>
                      <option value="red">RED</option>
                      <option value="black">BLACK</option>
                    </select>
                  </div>
                  <div className="rating">
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star-empty"></span>
                  </div>
                  <div className="well">
                    <label>Qty: </label>{" "}
                    <input className="form-inline quantity" type="text" value="1" />
                    <Link to="#" className="btn btn-2 ">
                      ADD
                    </Link>
                  </div>
                  <div className="share well">
                    <strong>Share :</strong>
                    <Link to="#" className="share-btn" target="_blank">
                      <i className="fa fa-twitter"></i>
                    </Link>
                    <Link to="#" className="share-btn" target="_blank">
                      <i className="fa fa-facebook"></i>
                    </Link>
                    <Link to="#" className="share-btn" target="_blank">
                      <i className="fa fa-linkedin"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="clear"></div>
            </div>
            <div className="product-desc">
              <ul className="nav nav-tabs">
                <li className="active">
                  <Link to="#description">Description</Link>
                </li>
              </ul>
              <div className="tab-content">
                <div id="description" className="tab-pane fade in active">
                  <h4>Sample Lorem Ipsum Text</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    at ante. Mauris eleifend, quam Link vulputate dictum, massa
                    quam dapibus leo, eget vulputate orci purus ut lorem. In
                    fringilla mi in ligula. Pellentesque aliquam quam vel dolor.
                    Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie,
                    varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum
                    interdum. Pellentesque lorem. Curabitur sit amet erat quis
                    risus feugiat viverra. Pellentesque augue justo, sagittis
                    et, lacinia at, venenatis non, arcu. Nunc nec libero. In
                    cursus dictum risus. Etiam tristique nisl Link
                    Sed eget turpis Link pede tempor malesuada. Vivamus quis mi at
                    leo pulvinar hendrerit. Cum sociis natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                    Pellentesque aliquet lacus vitae pede. Nullam mollis dolor
                    ac nisi. Phasellus sit amet urna. Praesent pellentesque
                    sapien sed lacus. Donec lacinia odio in odio. In sit amet
                    elit. Maecenas gravida interdum urna. Integer pretium, arcu
                    vitae imperdiet facilisis, elit tellus tempor nisi, vel
                    feugiat ante velit sit amet mauris. Vivamus arcu. Integer
                    pharetra magna ac lacus. Aliquam vitae sapien in nibh
                    vehicula auctor. Suspendisse leo mauris, pulvinar sed,
                    tempor et, consequat ac, lacus. Proin velit. Nulla semper
                    lobortis mauris. Duis urna erat, ornare et, imperdiet eu,
                    suscipit sit amet, massa. Nulla nulla nisi, pellentesque at,
                    egestas quis, fringilla eu, diam.
                  </p>
                  
                  
                </div>
              </div>
            </div>
            <div className="product-related">
              <div className="heading">
                <h2>RELATED PRODUCTS</h2>
              </div>
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
                        <img src={tempImg} alt="nothing"/>
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
                        <img src={tempImg} alt="nothing"/>
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
                        </h3>{" "}
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
              <div className="clear"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productDetails;
