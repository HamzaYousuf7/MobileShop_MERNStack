import React, { useState } from "react";
import { connect } from "react-redux";

import Input from "../../../components/UI/Input/Input";
import { printMessage } from "../../../components/util/printConsoleMessage";
import * as actionCreator from "../../../store/action/actionCreator/adminActionCreator";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Modal from "../../../components/UI/Modal/Modal";

const AdminLogin = (props) => {
  const [adminLoginForm, setadminLoginForm] = useState({
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Enter email :",
        name: "email",
        id: "email",
      },
      value: "",
      validation: {
        isEmail: true,
      },
      isValid: false,
      isTouched: false,
      invalidMessage: "",
    },
    password: {
      elementType: "input",
      elementConfig: {
        type: "password",
        placeholder: "Enter passowrd :",
        name: "passowrd",
        id: "passowrd",
      },
      value: "",
      validation: {
        isPassword: true,
      },
      isValid: false,
      isTouched: false,
      invalidMessage: "",
    },
  });

  const [isAdminLoginFormValid, setisAdminLoginFormValid] = useState(false);
  const [isModelOpenS, setisModelOpenS] = useState(true);
  const closedModalHandler = () => {
    setisModelOpenS(false);
    props.history.replace("/");
  };
  // function start
  const submitLoginForm = (event) => {
    event.preventDefault();
    let sendToServer = {};

    for (let obj in adminLoginForm) {
      sendToServer[obj] = adminLoginForm[obj].value;
    }
    printMessage("server ke object me kia aya ", sendToServer);
    props.login(sendToServer);

    //RESETTING FIELDS
    let tempObj = { ...adminLoginForm };
    for (let obj in tempObj) {
      tempObj[obj].value = "";
      tempObj[obj].isTouched = false;
      tempObj[obj].isValid = false;
    }
    setadminLoginForm(tempObj);
    setisAdminLoginFormValid(false);
  };

  const inputValidation = (value, rules) => {
    let isValid = true;
    let invalidMessage = "";

    if (!rules) return true;

    if (rules.isEmail) {
      const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      isValid = pattern.test(value) && isValid;
      invalidMessage = "EMAIL format is xxx@xxx.com";
    }

    if (rules.isPassword) {
      const pattern = /^[A-Za-z0-9]\w{5,14}$/;
      isValid = true && isValid; //!true chepi laga di
      invalidMessage =
        "Can be Character and Digits and min lenght is 6 Character and max 14";
    }

    return [isValid, invalidMessage];
  };

  const formChangeHandler = (event, identifier) => {
    const updatedOrderForm = {
      ...adminLoginForm,
    };
    const updatedFormElement = {
      ...updatedOrderForm[identifier],
    };
    updatedFormElement.value = event.target.value;

    let [isValid, invalidMessage] = inputValidation(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.isValid = isValid;
    if (isValid) {
      updatedFormElement.invalidMessage = "";
    } else {
      updatedFormElement.invalidMessage = invalidMessage;
    }

    updatedFormElement.isTouched = true;
    updatedOrderForm[identifier] = updatedFormElement;

    let formIsValid = true;

    for (let identifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[identifier].isValid && formIsValid;
    }

    setadminLoginForm(updatedOrderForm);
    setisAdminLoginFormValid(formIsValid);
  };

  //converting form obj
  const tempARR = [];
  for (let key in adminLoginForm) {
    tempARR.push({
      id: key,
      config: adminLoginForm[key],
    });
  }

  let HTMLAdminForm = (
    <form
      className="form-horizontal"
      name="form2"
      id="ff2"
      onSubmit={submitLoginForm}
    >
      {tempARR.map((formElement) => (
        <Input
          key={formElement.id}
          label={formElement.config.title}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.isValid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.isTouched}
          changed={(event) => formChangeHandler(event, formElement.id)}
          invalidMessage={formElement.config.invalidMessage}
        />
      ))}
      <div className="form-group">
        <div className="col-sm-offset-2 col-sm-10">
          <button
            disabled={!isAdminLoginFormValid}
            type="submit"
            className="btn btn-default"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <div className="container">
      {props.isLoading === true ? <Spinner /> : null}
      {(props.isError || props.responseMessage) && (
        <Modal show={isModelOpenS} modalClosed={closedModalHandler}>
          {props.errorMessage || props.responseMessage}
        </Modal>
      )}
      {!props.isLoading && (
        <React.Fragment>
          <h2>Admin Login form</h2>
          {HTMLAdminForm}
        </React.Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.adminReducer.isLoading,
    errorMessage: state.adminReducer.errorMessage,
    isError: state.adminReducer.isError,
    responseMessage: state.adminReducer.responseMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (adminData) => dispatch(actionCreator.admin_login_start(adminData)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);
