# formValidation
form validation with formik and yup npm package

~ npx create-react-app <your-app-name>
~ npm i formik
~ npm i yup

here i am using formik hook useFormik

const {values,errors,handleSubmit,hanldeBlur,touched ...etc.}=useFormik({
  initialValues,
  validationSchema: <Yup validatoin schema>
  onSubmit:()=>{
  /* after submit function here */
  }
})
![Screen Shot 2022-08-11 at 11 48 35](https://user-images.githubusercontent.com/59451476/184080211-559e4bef-422c-4462-9f8d-c4a3e46e075c.png)

//mobile view

![Screen Shot 2022-08-11 at 11 48 42](https://user-images.githubusercontent.com/59451476/184080203-e1f2b4f5-ccb9-48bd-8c91-b85e72b0ffec.png)

