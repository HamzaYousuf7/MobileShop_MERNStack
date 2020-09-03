import React, { useState } from "react";
import {Link} from "react-router-dom";
import { printMessage } from "../../components/util/printConsoleMessage";
import Input from "../../components/UI/Input/Input";

const ContactUs = () => {
  let contactFormHTML = null;
  const [isContactusFormValidState, setisContactusFormValidState] = useState(
    false
  );

  const [contactusFormState, setcontactusFormState] = useState({
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Enter Name :",
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
    message: {
      elementType: "textarea",
      elementConfig: {
        type: "textarea",
        placeholder: "Enter Your message:",
        name: "message",
        id: "message",
      },
      value: "",
      validation: {
        isRequired: true,
      },
      isValid: false,
      isTouched: false,
      invalidMessage: "",
    },
  });

  const inputValidation = (value, rules) => {
    let isValid = true;
    let invalidMessage = "";

    if (!rules) return true;

    if (rules.isRequired) {
      const pattern = /^[a-zA-Z0-9]{1,40}$/;
      isValid = pattern.test(value) && isValid;
      invalidMessage = "This fields is required";
    }
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

  const submitContactFormHandler = (event) => {
    event.preventDefault();
    let sendToServer = {};

    for (let obj in contactusFormState) {
      sendToServer[obj] = contactusFormState[obj].value;
    }
    //printMessage("server ke object me kia aya ", sendToServer);

    //RESETTING FIELDS
    let tempObj = { ...contactusFormState };
    for (let obj in tempObj) {
      tempObj[obj].value = "";
      tempObj[obj].isTouched = false;
      tempObj[obj].isValid = false;
    }
    setcontactusFormState(tempObj);
    setisContactusFormValidState(false);
  };

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

  contactFormHTML = converForm(
    contactusFormState,
    submitContactFormHandler,
    loginFormInputChangeHandler,
    isContactusFormValidState,
    "Send Message",
    setcontactusFormState,
    setisContactusFormValidState
  );

  return (
    <div id="page-content" className="single-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contactus">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="heading">
              <h1>CONTACT US</h1>
            </div>
          </div>
          <div className="col-md-6" style={{ marginBottom: "30px" }}>
            {contactFormHTML}
          </div>
          <div className="col-md-6">
            <p>
              <span className="glyphicon glyphicon-home"></span> California,
              United States 3000009
            </p>
            <p>
              <span className="glyphicon glyphicon-earphone"></span> +6221 888
              888 90 , +6221 888 88891
            </p>
            <p>
              <span className="glyphicon glyphicon-envelope"></span>{" "}
              info@yourdomain.com
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.289259162295!2d-120.7989351!3d37.5246781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8091042b3386acd7%3A0x3b4a4cedc60363dd!2sMain+St%2C+Denair%2C+CA+95316%2C+Hoa+K%E1%BB%B3!5e0!3m2!1svi!2s!4v1434016649434"
              width="95%"
              height="230"
              frameBorder="0"
              style={{ border: "0px" }}
              title="nothing"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
