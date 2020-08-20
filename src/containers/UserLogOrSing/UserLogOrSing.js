import React, { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../../components/UI/Input/Input";
import { printMessage } from "../../components/util/printConsoleMessage";

const UserLogOrSing = () => {
  //VAR DEC
  let loginFormHTML = null;
  let singupFormHTML = null;

  const [isLoginFormValid, setisLoginFormValid] = useState(false);
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
    firstName: {
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
    lastName: {
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
    passowrd: {
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
    gender: {
      elementType: "radio",
      elementConfig: {
        type: "radio",
        name: "gender",
        id: "gender",
      },
      value: "male",
      validation: {},
      isValid: false,
      isTouched: false,
      invalidMessage: "",
    },
    isAgree: {
      elementType: "checkbox",
      elementConfig: {
        type: "checkbox",
        name: "gender",
        id: "gender",
      },
      value: "male",
      validation: {},
      isValid: false,
      isTouched: false,
      invalidMessage: "",
    },
  });

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
      const pattern = /^[A-Za-z0-9]\w{6,14}$/;
      isValid = pattern.test(value) && isValid;
      invalidMessage =
        "Can be Character and Digits and min lenght is 7 Character and max 14";
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
    printMessage("server ke object me kia aya ", sendToServer);

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

  const submitSingupFormHandler = (event) => {
    event.preventDefault();
    let sendToServer = {};

    for (let obj in singupForm) {
      sendToServer[obj] = singupForm[obj].value;
    }
    printMessage("server ke object me kia aya ", sendToServer);

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
    setisSingupFormValid
  );
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
                <Link to="account.html">Account</Link>
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
    </div>
  );
};

export default UserLogOrSing;
