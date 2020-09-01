import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actionCreator from "../../store/action/actionCreator/productsActionCreator";

import subBanner1 from "../../assets/images/sub-banner1.png";
import subBanner2 from "../../assets/images/sub-banner2.png";
import subBanner3 from "../../assets/images/sub-banner3.png";
import subBanner4 from "../../assets/images/sub-banner4.jpg";
import subBanner5 from "../../assets/images/sub-banner5.png";

import Spinner from "../../components/UI/Spinner/Spinner";

const Home = (props) => {
  const [specialProducts, setspecialProducts] = useState([]);
  const [featuredProducts, setfeaturedProducts] = useState([]);

  // calling the fetch func
  useEffect(() => {
    props.fetchHomeProducts();
  }, []);

  //when the product finally get fetch re run and update the state
  useEffect(() => {
    const temp1 = props.homeProducts.slice(0, 4);
    const temp2 = props.homeProducts.slice(4, 8);
    setspecialProducts(temp1);
    setfeaturedProducts(temp2);
  }, [props.homeProducts]);

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
    <div id="page-content" className="home-page">
      {props.isLoading === true ? <Spinner /> : null}
      {props.isLoading === false && props.homeProducts.length > 0 ? (
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
                {/**NOW SHOWING SINGLE PRODUCTS */}
                {specialProducts &&
                  specialProducts.map((singleProd, index) => (
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 col-xs-12"
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
                          <a
                            className="btn cart"
                            onClick={() => addingToCart(singleProd)}
                          >
                            <span className="glyphicon glyphicon-shopping-cart"></span>
                          </a>
                          <Link className="btn wishlist" to="#">
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
                              <Link to={"/productDetails/" + singleProd._id}>
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
                {/**NOW SHOWING SINGLE PRODUCTS  END*/}
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
                {/**NOW SHOWING FEATURED PRODUCTS START */}
                {featuredProducts &&
                  featuredProducts.map((singleProd, index) => (
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 col-xs-12"
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
                          <a
                            className="btn cart"
                            onClick={() => addingToCart(singleProd)}
                          >
                            <span className="glyphicon glyphicon-shopping-cart"></span>
                          </a>
                          <Link className="btn wishlist" to="#">
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
                              <Link to={"/productDetails/" + singleProd._id}>
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
                {/**NOW SHOWING FEATURED PRODUCTS END*/}
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
    homeProducts: state.productsReducer.products,
    isLoading: state.productsReducer.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHomeProducts: () =>
      dispatch(actionCreator.fetch_home_products_start()),
    addToCart: (product) =>
      dispatch(actionCreator.adding_product_in_cart(product)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
