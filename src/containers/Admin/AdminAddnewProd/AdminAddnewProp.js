import React, { useState, useEffect } from "react";

import Input from "../../../components/UI/Input/Input";

const AdminAddnewProd = () => {
  const [addNewProdForm, setaddNewProdForm] = useState({
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Add Product Name :",
        name: "name",
        id: "name",
      },
      value: "",
      validation: {
        required: true,
      },
      isValid: false,
      isTouched: false,
      invalidMessage: "",
      title: "Name",
    },
    brandName: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Add Product Brand Name :",
        name: "brandName",
        id: "brandName",
      },
      value: "",
      validation: {
        required: true,
      },
      isValid: false,
      isTouched: false,
      invalidMessage: "",
      title: "Brand Name",
    },
    price: {
      elementType: "input",
      elementConfig: {
        type: "number",
        placeholder: "Add Product Price :",
        name: "price",
        id: "price",
      },
      value: "",
      validation: {
        required: true,
      },
      isValid: false,
      isTouched: false,
      invalidMessage: "",
      title: "Price ",
    },
    description: {
      elementType: "textarea",
      elementConfig: {
        type: "text",
        placeholder: "Add Product Description :",
        name: "description",
        id: "description",
      },
      value: "",
      validation: {
        required: true,
      },
      isValid: false,
      isTouched: false,
      invalidMessage: "",
      title: "Description ",
    },
    rating: {
      elementType: "input",
      elementConfig: {
        type: "number",
        placeholder: "Add Product Rating :",
        name: "rating",
        id: "rating",
      },
      value: "",
      validation: {
        required: true,
      },
      isValid: false,
      isTouched: false,
      invalidMessage: "",
      title: "Rating ",
    },
    availableColor: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Add Product available Color :",
        name: "availableColor",
        id: "availableColor",
      },
      value: "",
      validation: {
        required: true,
      },
      isValid: false,
      isTouched: false,
      invalidMessage: "",
      title: "Available Color",
    },
  });
  const [mainImg, setmainImg] = useState({
    value: null,
    isValid: false,
  });
  const [additionalImages, setadditionalImages] = useState({
    value: null,
    isValid: false,
  });
  const [previewUrl, setPreviewUrl] = useState();
  const [addtionalImgPreview, setaddtionalImgPreview] = useState([]);
  const [isAddNewProdValid, setisaddNewProdValid] = useState(false);
  const [isValidImagesPick, setisValidImagesPick] = useState(false);

  //function
  const addNewProductrHandler = (event) => {
    event.preventDefault();
    let tempObj = {};
    for (let formElementIdentifier in addNewProdForm) {
      tempObj[formElementIdentifier] =
        addNewProdForm[formElementIdentifier].value;
    }

    console.log("TEMP obj me kia he ", tempObj);
  };

  const inputValidation = (value, rules) => {
    let isValid = true;
    let invalidMessage = "";

    if (!rules) return true;

    if (rules.required) {
      if (value.length === 0) {
        isValid = false;
        invalidMessage = "This field is required";
      } else {
        isValid = true;
      }
    }

    return [isValid, invalidMessage];
  };

  //when user type something
  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...addNewProdForm,
    };
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier],
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
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    let mainImgValid = mainImg.isValid;
    let addtionalImgValid = additionalImages.isValid;
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid =
        updatedOrderForm[inputIdentifier].isValid &&
        formIsValid &&
        mainImgValid &&
        addtionalImgValid;
    }

    setaddNewProdForm(updatedOrderForm);
    setisaddNewProdValid(formIsValid);
  };

  //!update over all form validity
  const updateFormValidiry = () => {
    let formIsValid = isAddNewProdValid;
    let mainImgValid = mainImg.isValid;
    let addtionalImgValid = additionalImages.isValid;
    console.log(formIsValid, mainImgValid, addtionalImgValid);
    for (let inputIdentifier in addNewProdForm) {
      formIsValid =
        addNewProdForm[inputIdentifier].isValid &&
        formIsValid &&
        mainImgValid &&
        addtionalImgValid;
    }
    console.log(formIsValid);
    setisaddNewProdValid(formIsValid);
  };
  //!handling main Image
  const mainImageHandler = (event) => {
    const pickedFile = event.target.files[0];

    setmainImg({ value: pickedFile, isValid: true });
    updateFormValidiry(); //updating validity
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };

    fileReader.readAsDataURL(pickedFile);
  };

  const additionalImagesHandler = (event) => {
    const images = event.target.files;
    console.log(images, images.length);
    if (images.length != 4) {
      setisValidImagesPick(true);
      updateFormValidiry(); //updating validity
      setaddtionalImgPreview(null); //!ROLLING BACK
      return;
    }
    setisValidImagesPick(false);
    setadditionalImages({ value: images, isValid: true });
    updateFormValidiry(); //updating validity
    //image preview
    const fileReader0 = new FileReader();
    const fileReader1 = new FileReader();
    const fileReader2 = new FileReader();
    const fileReader3 = new FileReader();
    const tempArr = [];

    //!1
    fileReader0.onload = () => {
      tempArr.push(fileReader0.result);
    };

    fileReader0.readAsDataURL(images[0]);

    //!2
    fileReader1.onload = () => {
      tempArr.push(fileReader1.result);
    };

    fileReader1.readAsDataURL(images[1]);

    //!3
    fileReader2.onload = () => {
      tempArr.push(fileReader2.result);
    };

    fileReader2.readAsDataURL(images[2]);

    //!4
    fileReader3.onload = () => {
      tempArr.push(fileReader3.result);
      setaddtionalImgPreview(tempArr);
      console.log("array me kia a rha after reading multiple images", tempArr);
    };

    fileReader3.readAsDataURL(images[3]);
  };

  //CREATING FORM
  const tempARR = [];
  for (let key in addNewProdForm) {
    tempARR.push({
      id: key,
      config: addNewProdForm[key],
    });
  }

  let AddProductsForm = (
    <form
      className="form-horizontal"
      name="form2"
      id="ff2"
      onSubmit={addNewProductrHandler}
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
          touched={formElement.config.touched}
          changed={(event) => inputChangedHandler(event, formElement.id)}
          invalidMessage={formElement.config.invalidMessage}
        />
      ))}

      <div className="form-group">
        <label className="control-label col-sm-2">Main Image:</label>
        <div className="col-sm-3">
          <input type="file" onChange={mainImageHandler} />
        </div>
        <div className="col-sm-7">
          {previewUrl && <img src={previewUrl} width="150px" height="100px" />}
        </div>
      </div>

      <div className="form-group">
        <label className="control-label col-sm-2">Additional Images:</label>
        <div className="col-sm-3">
          <input type="file" multiple onChange={additionalImagesHandler} />
        </div>
        <div className="col-sm-7">
          {addtionalImgPreview &&
            addtionalImgPreview.map((singleImg, index) => (
              <img src={singleImg} width="150px" height="100px" key={index} />
            ))}

          {isValidImagesPick && <h3>SORRY YOU HAVE TO PICKED 4 IMAGES </h3>}
        </div>
      </div>

      <div className="form-group">
        <div className="col-sm-offset-2 col-sm-10">
          <button
            type="submit"
            className="btn btn-default"
            disabled={!isAddNewProdValid}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
  return (
    <div className="container">
      <h1>ADD NEW PRODUCT:</h1>
      {AddProductsForm}
    </div>
  );
};

export default AdminAddnewProd;
