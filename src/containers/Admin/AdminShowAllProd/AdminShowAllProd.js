import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import * as actionCreator from "../../../store/action/actionCreator/adminActionCreator";

import Spinner from "../../../components/UI/Spinner/Spinner";
import Modal from "../../../components/UI/Modal/Modal";

const AdminShowAllProd = (props) => {
  //fetching all data from the server
  const [isModelOpenS, setisModelOpenS] = useState(true);

  useEffect(() => {
    fetchData();
    console.log(props.errorMessage);
  }, []);

  const fetchData = () => {
    props.fetchAllProd();
  };

  const closedModalHandler = () => {
    setisModelOpenS(false);
    fetchData();
  };
  return (
    <div className="container">
      {props.isError && (
        <Modal show={isModelOpenS} modalClosed={closedModalHandler}>
          {props.errorMessage}
        </Modal>
      )}
      {props.isLoading === true ? <Spinner /> : null}
      <div>
        {props.isLoading === false && props.isError === false ? (
          <React.Fragment>
            {props.responseMessage && (
              <Modal show={isModelOpenS} modalClosed={closedModalHandler}>
                {props.responseMessage}
              </Modal>
            )}
            {props.products.length > 0 ? (
              <table className="table table-responsive">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Product Brand Name</th>
                    <th>Product Price</th>
                    <th>Product Image</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {props.products.map((singlePro, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{singlePro._id}</td>
                      <td>{singlePro.name}</td>
                      <td>{singlePro.brandName}</td>
                      <td>$ {singlePro.price}</td>
                      <td>
                        <img
                          src={`http://localhost:5000/${singlePro.mainImg}`}
                          width="150px"
                          height="150px"
                        />
                      </td>
                      <td>
                        <button
                          style={{ marginRight: "10px" }}
                          type="button"
                          className="btn btn-warning btn-lg"
                        >
                          UPDATE
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger btn-lg"
                          onClick={() => props.deleteProduct(singlePro._id)}
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="container">
                <div className="alert alert-info">
                  <strong>Info!</strong> No product has been added yet.
                </div>
              </div>
            )}
          </React.Fragment>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.adminReducer.products,
    isLoading: state.adminReducer.isLoading,
    errorMessage: state.adminReducer.errorMessage,
    isError: state.adminReducer.isError,
    responseMessage: state.adminReducer.responseMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProd: () => dispatch(actionCreator.get_all_data_start()),
    deleteProduct: (productID) =>
      dispatch(actionCreator.delete_product_start(productID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminShowAllProd);
