const validation = (values) => {
  let errors = {};

  const namaValidator = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  if (!values.name) {
    errors.name = "Name is required";
  } else if (!values.name.match(namaValidator)) {
    errors.name = "Name must contain letters";
  }
  if (!values.gender) {
    errors.gender = "Gender is required";
  }
  if(!values.score) {
    errors.score = "semua soal harus diisi"
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "email invalid";
  }
  // const phoneValidator = /^(\+62|62|0)8[1-9][0-9]{6,}$/;
  if (!values.phone) {
    errors.phone = "Phone is required";
  } else if (!/^(\+62|62|0)8[1-9][0-9]{6,}$/.test(values.phone)) {
    errors.phone = "Phone must contain numbers, min 9 digit";
  }
  const passwordValidator =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (!values.password) {
    errors.password = "Password is required";
  } else if (!values.password.match(passwordValidator)) {
    errors.password =
      "password invalid";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password is required";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Confirm password must be the same";
  }if (!values.message) {
    errors.message = "Message is required";
  }

  return errors;
};
export default validation;
