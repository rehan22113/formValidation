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
![Screen Shot 2022-08-11 at 12 05 09](https://user-images.githubusercontent.com/59451476/184082153-42430c2e-e173-4479-8166-00bf27153cd1.png)


//mobile view

![Screen Shot 2022-08-11 at 11 48 42](https://user-images.githubusercontent.com/59451476/184080203-e1f2b4f5-ccb9-48bd-8c91-b85e72b0ffec.png)

