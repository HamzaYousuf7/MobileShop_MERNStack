import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actionCreator from "../../store/action/actionCreator/userActionCreator";
import Input from "../../components/UI/Input/Input";
import { printMessage } from "../../components/util/printConsoleMessage";
import Spinner from "../../components/UI/Spinner/Spinner";
import Modal from "../../components/UI/Modal/Modal";

const UserLogOrSing = (props) => {
  //VAR DEC
  let loginFormHTML = null;
  let singupFormHTML = null;

  //! STATE BEGIN
  const [isLoginFormValid, setisLoginFormValid] = useState(false);
  const [isModelOpenS, setisModelOpenS] = useState(true);
  const [isSingupFormValid, setisSingupFormValid] = useState(false);
  const [loginForm, setloginForm] = useState({
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
        placeholder: "Enter password :",
        name: "password",
        id: "password",
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

  const [singupForm, setsingupForm] = useState({
    firstname: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Enter first Name :",
        name: "firstName",
        id: "firstName",
      },
      value: "",
      validation: {
        isName: true,
      },
      isValid: false,
      isTouched: false,
      invalidMessage: "",
    },
    lastname: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Enter last Name :",
        name: "lastName",
        id: "lastName",
      },
      value: "",
      validation: {
        isName: true,
      },
      isValid: false,
      isTouched: false,
      invalidMessage: "",
    },
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
    phone: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Enter phone number :",
        name: "phone",
        id: "phone",
      },
      value: "",
      validation: {
        isPhoneNumber: true,
      },
      isValid: false,
      isTouched: false,
      invalidMessage: "",
    },
  });
  const [singupFormGender, setsingupFormGender] = useState({
    value: "",
    isValid: false,
  });

  const [isAgreeState, setisAgree] = useState({
    value: false,
    isValid: false,
  });

  //!function start
  const inputValidation = (value, rules) => {
    let isValid = true;
    let invalidMessage = "";

    if (!rules) return true;

    if (rules.isName) {
      const pattern = /^[a-zA-Z]{1,8}$/;
      isValid = pattern.test(value) && isValid;
      invalidMessage =
        "Name can not containe number or space and max lenght is 8chr";
    }

    if (rules.isEmail) {
      const pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      isValid = pattern.test(value) && isValid;
      invalidMessage = "EMAIL format is xxx@xxx.com";
    }

    if (rules.isPhoneNumber) {
      const pattern = /^[0-9]{11}$/;
      isValid = pattern.test(value) && isValid;
      invalidMessage = "Only Digits and length shoudl be 11";
    }

    if (rules.isPassword) {
      const pattern = /^[A-Za-z0-9]\w{5,14}$/;
      isValid = pattern.test(value) && isValid;
      invalidMessage =
        "Can be Character and Digits and min lenght is 6 Character and max 14";
    }

    return [isValid, invalidMessage];
  };

  const loginFormInputChangeHandler = (
    event,
    identifier,
    state,
    updateState,
    updateValidationOfForm
  ) => {
    const tempLoginForm = { ...state };
    const formFiled = { ...tempLoginForm[identifier] };

    //updating the value
    formFiled.value = event.target.value;

    let [isValid, invalidMessage] = inputValidation(
      formFiled.value,
      formFiled.validation
    );
    //if dont have message dont set else set message
    if (isValid) {
      formFiled.invalidMessage = "";
    } else {
      formFiled.invalidMessage = invalidMessage;
    }

    //updating other thing
    formFiled.isValid = isValid;
    formFiled.touched = true;
    tempLoginForm[identifier] = formFiled;

    let isLoginFormValid = true;
    for (let inputIdentifier in tempLoginForm) {
      isLoginFormValid =
        tempLoginForm[inputIdentifier].isValid && isLoginFormValid;
    }

    updateState(tempLoginForm);
    updateValidationOfForm(isLoginFormValid);
  };

  const submitLoginFormHandler = (event) => {
    event.preventDefault();
    let sendToServer = {};

    for (let obj in loginForm) {
      sendToServer[obj] = loginForm[obj].value;
    }
    //printMessage("server ke object me kia aya ", sendToServer);
    //calling the backend
    props.login(sendToServer);
    //RESETTING FIELDS
    let tempObj = { ...loginForm };
    for (let obj in tempObj) {
      tempObj[obj].value = "";
      tempObj[obj].isTouched = false;
      tempObj[obj].isValid = false;
    }
    setloginForm(tempObj);
    setisLoginFormValid(false);
  };

  //handling gender and i agree option
  const genderHandler = (event) => {
    //console.log(event.target.value);
    setsingupFormGender({
      value: event.target.value,
      isValid: true,
    });
  };

  const isAgreeHandler = (event) => {
    //console.log(event.target.checked);

    const isAgree = event.target.checked;
    setisAgree({
      value: isAgree,
      isValid: isAgree,
    });
  };

  const submitSingupFormHandler = (event) => {
    event.preventDefault();
    let sendToServer = { gender: singupFormGender.value };

    for (let obj in singupForm) {
      sendToServer[obj] = singupForm[obj].value;
    }
    //printMessage("server ke object me kia aya ", sendToServer);
    props.singup(sendToServer);
    
    //RESETTING FIELDS
    let tempObj = { ...singupForm };
    for (let obj in tempObj) {
      tempObj[obj].value = "";
      tempObj[obj].isTouched = false;
      tempObj[obj].isValid = false;
    }
    setsingupForm(tempObj);
    setisSingupFormValid(false);
  };
  //form ko convert kar rha he
  const converForm = (state, ...addtionalText) => {
    const tempArr = [];
    let tempForm = null;
    for (let key in state) {
      tempArr.push({
        id: key,
        config: state[key],
      });
    }

    //now HTML work
    tempForm = (
      <form
        className="form-horizontal"
        name="form1"
        id="ff1"
        onSubmit={addtionalText[0]}
      >
        {tempArr.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.isValid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.isTouched}
            changed={(event) =>
              addtionalText[1](
                event,
                formElement.id,
                state,
                addtionalText[4],
                addtionalText[5]
              )
            }
            invalidMessage={formElement.config.invalidMessage}
          />
        ))}

        {addtionalText[6] && (
          <div className="form-group">
            <input
              name="gender"
              onChange={genderHandler}
              type="radio"
              value="male"
            />
            Male
            <input
              name="gender"
              onChange={genderHandler}
              style={{ marginLeft: "10px" }}
              type="radio"
              value="female"
            />
            Female
          </div>
        )}
        {addtionalText[6] && (
          <div className="form-group">
            <input
              name="agree"
              id="agree"
              type="checkbox"
              value="true"
              onChange={isAgreeHandler}
            />{" "}
            I agree to your website.
          </div>
        )}

        <div className="form-group">
          <button
            type="submit"
            className="btn btn-1"
            name="login"
            id="login"
            disabled={!addtionalText[2]}
          >
            {addtionalText[3]}
          </button>
        </div>
      </form>
    );

    return tempForm;
  };

  const closedModalHandler = () => {
    setisModelOpenS(false);
    if (props.isAuthenticated) {
      props.history.replace("/");
    }
  };

  loginFormHTML = converForm(
    loginForm,
    submitLoginFormHandler,
    loginFormInputChangeHandler,
    isLoginFormValid,
    "Login",
    setloginForm,
    setisLoginFormValid
  );

  singupFormHTML = converForm(
    singupForm,
    submitSingupFormHandler,
    loginFormInputChangeHandler,
    isSingupFormValid,
    "Create",
    setsingupForm,
    setisSingupFormValid,
    true
  );
  return (
    <div id="page-content" className="single-page">
      {/**SHOWIG SPINNER */}
      {props.isLoading && <Spinner />}

      {/** SHOWING MODEL */}
      {props.responseMessage && (
        <Modal show={isModelOpenS} modalClosed={closedModalHandler}>
          {props.responseMessage}
        </Modal>
      )}
      {!props.isLoading && (
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="breadcrumb">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/userLogOrSing">Account</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="heading">
                <h2>Login</h2>
              </div>
              {loginFormHTML}
              <Link to="#">Forgot Your Password ?</Link>
            </div>
            <div className="col-md-6">
              <div className="heading">
                <h2>New User ? Create An Account.</h2>
              </div>
              {singupFormHTML}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.userReducer.isLoading,
    responseMessage: state.userReducer.responseMessage,
    isAuthenticated: state.userReducer.isAuthenticated,
  };
};

const mapDispatchToProps = (disptach) => {
  return {
    login: (userData) => disptach(actionCreator.login_start(userData)),
    singup : (singupData)=> disptach(actionCreator.singup_start(singupData))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserLogOrSing);
