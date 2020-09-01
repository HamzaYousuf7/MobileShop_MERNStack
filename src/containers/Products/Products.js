import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import * as actionCreator from "../../store/action/actionCreator/productsActionCreator";

import tempImg from "../../assets/images/iphone.png";
import Pagination from "../../components/Pagination/Pagination";
import Spinner from "../../components/UI/Spinner/Spinner";

const Products = (props) => {
  const [paginationDataState, setpaginationDataState] = useState({
    pageSize: 9,
    currentPage: 1,
    maxProductsCount: 20,
  });
  const [productSecOne, setproductSecOne] = useState();
  const [productSecTwo, setproductSecTwo] = useState();
  const [productSecThree, setproductSecThree] = useState();

  //life cycle method
  useEffect(() => {
    props.getAllProducs(
      paginationDataState.pageSize,
      paginationDataState.currentPage
    );
  }, []);

  //when we finaly get all the product update the state
  useEffect(() => {
    const temp1 = props.allProducts.slice(0, 3);
    const temp2 = props.allProducts.slice(3, 6);
    const temp3 = props.allProducts.slice(6, 9);

    setproductSecOne(temp1);
    setproductSecTwo(temp2);
    setproductSecThree(temp3);
    setpaginationDataState({
      pageSize: 9,
      currentPage: paginationDataState.currentPage,
      maxProductsCount: props.maxProductCount,
    });
  }, [props.allProducts]);
  //function start
  const paginationChangeHandler = (pageNo) => {
    console.log(pageNo);
    setpaginationDataState({
      pageSize: 9,
      currentPage: pageNo,
      maxProductsCount: props.maxProductCount,
    });
    props.getAllProducs(paginationDataState.pageSize, pageNo);
  };

  const calculateDiscountPrice = (orgPrice) => {
    return orgPrice - 100;
  };

  const addingToCart = ({
    _id,
    name,
    brandName,
    price,
    mainImg,
    availableColor,
  }) => {
    props.addToCart({
      _id,
      name,
      brandName,
      price,
      mainImg,
      availableColor,
      quantity: 1,
    });
  };

  return (
    <div id="page-content" className="single-page">
      {props.isLoading === true ? <Spinner /> : null}
      {props.isLoading === false &&
      props.allProducts &&
      props.allProducts.length > 0 ? (
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="breadcrumb">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Category : Mobile</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div id="main-content" className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <div className="products">
                    {/**FIRST SECTION START */}
                    {productSecOne &&
                      productSecOne.map((singleProd, index) => (
                        <div
                          className="col-lg-4 col-md-4 col-xs-12"
                          key={index}
                        >
                          <div className="product">
                            <div className="image">
                              <Link to={"/productDetails/" + singleProd._id}>
                                <img
                                  src={`http://localhost:5000/${singleProd.mainImg}`}
                                  alt="nothing"
                                  width="156px"
                                  height="300px"
                                />
                              </Link>
                            </div>
                            <div className="buttons">
                              <a className="btn cart"  onClick={() => addingToCart(singleProd)}>
                                <span className="glyphicon glyphicon-shopping-cart"></span>
                              </a>
                              <Link className="btn wishlist" to="/moreStuff">
                                <span className="glyphicon glyphicon-heart"></span>
                              </Link>
                              <Link
                                className="btn compare"
                                to={"/productDetails/" + singleProd._id}
                              >
                                <span className="glyphicon glyphicon-search"></span>
                              </Link>
                            </div>
                            <div className="caption">
                              <div className="name">
                                <h3>
                                  <Link
                                    to={"/productDetails/" + singleProd._id}
                                  >
                                    {singleProd.name}
                                  </Link>
                                </h3>
                              </div>
                              <div className="price">
                                ${calculateDiscountPrice(singleProd.price)}
                                <span>${singleProd.price}</span>
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
                      ))}
                    {/**FIRST SECTION END */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="products">
                    {/**SECOND SECTION START */}
                    {productSecTwo &&
                      productSecTwo.map((singleProd, index) => (
                        <div
                          className="col-lg-4 col-md-4 col-xs-12"
                          key={index}
                        >
                          <div className="product">
                            <div className="image">
                              <Link to={"/productDetails/" + singleProd._id}>
                                <img
                                  src={`http://localhost:5000/${singleProd.mainImg}`}
                                  alt="nothing"
                                  width="156px"
                                  height="300px"
                                />
                              </Link>
                            </div>
                            <div className="buttons">
                              <a className="btn cart"  onClick={() => addingToCart(singleProd)}>
                                <span className="glyphicon glyphicon-shopping-cart"></span>
                              </a>
                              <Link className="btn wishlist" to="/moreStuff">
                                <span className="glyphicon glyphicon-heart"></span>
                              </Link>
                              <Link
                                className="btn compare"
                                to={"/productDetails/" + singleProd._id}
                              >
                                <span className="glyphicon glyphicon-search"></span>
                              </Link>
                            </div>
                            <div className="caption">
                              <div className="name">
                                <h3>
                                  <Link
                                    to={"/productDetails/" + singleProd._id}
                                  >
                                    {singleProd.name}
                                  </Link>
                                </h3>
                              </div>
                              <div className="price">
                                ${calculateDiscountPrice(singleProd.price)}
                                <span>${singleProd.price}</span>
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
                      ))}
                    {/**SECOND SECTION END */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="products">
                    {/**THIRD SECTION START */}
                    {productSecThree &&
                      productSecThree.map((singleProd, index) => (
                        <div
                          className="col-lg-4 col-md-4 col-xs-12"
                          key={index}
                        >
                          <div className="product">
                            <div className="image">
                              <Link to={"/productDetails/" + singleProd._id}>
                                <img
                                  src={`http://localhost:5000/${singleProd.mainImg}`}
                                  alt="nothing"
                                  width="156px"
                                  height="300px"
                                />
                              </Link>
                            </div>
                            <div className="buttons">
                              <a className="btn cart"  onClick={() => addingToCart(singleProd)}>
                                <span className="glyphicon glyphicon-shopping-cart"></span>
                              </a>
                              <Link className="btn wishlist" to="/moreStuff">
                                <span className="glyphicon glyphicon-heart"></span>
                              </Link>
                              <Link
                                className="btn compare"
                                to={"/productDetails/" + singleProd._id}
                              >
                                <span className="glyphicon glyphicon-search"></span>
                              </Link>
                            </div>
                            <div className="caption">
                              <div className="name">
                                <h3>
                                  <Link
                                    to={"/productDetails/" + singleProd._id}
                                  >
                                    {singleProd.name}
                                  </Link>
                                </h3>
                              </div>
                              <div className="price">
                                ${calculateDiscountPrice(singleProd.price)}
                                <span>${singleProd.price}</span>
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
                      ))}
                    {/**THIRD SECTION END */}
                  </div>
                </div>
              </div>
              <div className="row text-center">
                <Pagination
                  maxProductsCount={paginationDataState.maxProductsCount}
                  pageSize={paginationDataState.pageSize}
                  currentPage={paginationDataState.currentPage}
                  paginationChangeHandler={paginationChangeHandler}
                />
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
                      <Link to="/moreStuff">PC Computers</Link>
                    </li>
                    <li>
                      <Link to="/moreStuff">Laptops & Notebooks</Link>
                    </li>
                    <li>
                      <Link to="/moreStuff">Mobiles & Tablet</Link>
                    </li>
                    <li>
                      <Link to="/moreStuff">Software</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget wid-type">
                <div className="heading">
                  <h4>TYPE</h4>
                </div>
                <div className="content">
                  <select defaultValue="x">
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
                    <Link to="/moreStuff">
                      <img src={tempImg} alt="nothing" />
                    </Link>
                    <div className="wrapper">
                      <h5>
                        <Link to="/moreStuff">Samsung Galaxy Tab</Link>
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
                    <Link to="/moreStuff">
                      <img src={tempImg} alt="nothing" />
                    </Link>
                    <div className="wrapper">
                      <h5>
                        <Link to="/moreStuff">Samsung Galaxy Tab</Link>
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
                    <Link to="/moreStuff">
                      <img src={tempImg} alt="nothing" />
                    </Link>
                    <div className="wrapper">
                      <h5>
                        <Link to="/moreStuff">Samsung Galaxy Tab</Link>
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
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    maxProductCount: state.productsReducer.maxProductCount,
    allProducts: state.productsReducer.products,
    isLoading: state.productsReducer.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProducs: (pageSize, currentPage) =>
      dispatch(actionCreator.fetch_all_products_start(pageSize, currentPage)),
    addToCart: (product) =>
      dispatch(actionCreator.adding_product_in_cart(product)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
