import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import * as actionCreator from "../../../store/action/actionCreator";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Modal from "../../../components/UI/Modal/Modal";

const AdminShowAllProd = (props) => {
  //fetching all data from the server
  useEffect(() => {
    props.fetchAllProd();
    console.log(props.errorMessage);
  }, []);

  const [isModelOpenS, setisModelOpenS] = useState(true);
  const closedModalHandler = () => {
    setisModelOpenS(false);
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
        {(props.isLoading === false  && props.isError === false) ? (
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
                      class="btn btn-warning btn-lg"
                    >
                      UPDATE
                    </button>
                    <button type="button" class="btn btn-danger btn-lg">
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    isLoading: state.isLoading,
    errorMessage: state.errorMessage,
    isError: state.isError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProd: () => dispatch(actionCreator.get_all_data_start()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminShowAllProd);
