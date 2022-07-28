import React, { useState, useEffect } from "react";
import axios from "axios";
import validation from "../components/validation";
import Button from "../components/button";
import ilustrasilogin from "../images/ilustrasilogin.png"
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

export default function LoginPage() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [userLogged, setUserLogged] = useState(false)
  const [passwordShown, setPasswordShown] = useState(false);
  const [adminLogged, setAdminLogged] = useState(false)
  const [isFailed, setIsFailed] = useState(false)
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  // axios post
  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post("https://be-cureit.herokuapp.com/login", {
      email: values.email,
      password: values.password
    })
      .then(response => {
        localStorage.setItem("credential", JSON.stringify(response))
        const loggedInUser = JSON.parse(localStorage.getItem("credential"));
        const foundUser = loggedInUser.data.role
        console.log(foundUser)
        switch(foundUser) {
          case "admin":
            setAdminLogged(true)
            break;
          case "user":
            setUserLogged(true)
            break;
          default:
            alert('tidak valid')
            break;
        }
      })
      .catch(err => {
        const error = err.response.data.error
        const msg = error.toLowerCase()
        switch(msg) {
          case 'incorrect password!' :
            alert('password salah!')
            break;
          default : 
            alert('user tidak ditemukan')
            break;
        }
      })
    setErrors(validation(values));
  }

  
  return (
      <div className="h-screen lg:h-auto bg-white font-poppins text-black">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-6">            
            <div className="hidden lg:block lg:col-span-3 bg-light-green" data-aos="fade-right" data-aos-duration="1500">
              <div className="">
                <h1 className="text-center text-dark-green lg:mx-40 text-3xl font-bold mt-20">
                  Hi, Welcome Back!
                </h1>
                <img className="hidden mx-auto lg:flex w-9/12 py-12" src={ilustrasilogin} alt="gambar"/>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-3 lg:my-6 mx-auto  py-10" data-aos="fade-left" data-aos-duration="1500">
            <h1 className="text-center text-dark-green lg:mx-40 text-3xl mt-10 font-bold">
            Masuk
            </h1>
            {/* form */}
            <form className=" w-full mx-auto">
              {/* email */}
              <div className="mt-3">
                <label className="label text-sm font-bold text-gray-700 block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="input text-xs w-full p-2 border border-gray-300 rounded mt-1 hover:border-dark-green bg-transparent"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                ></input>
                <div className="text-xs text-red-600">
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
              </div>

              {/* password */}
              <div className="mt-4">
                <label className="label text-sm font-bold text-gray-700 block">
                  Password
                </label>
                <input
                  type={passwordShown ? "text" : "password"} 
                  name="password"
                  className=" input text-xs w-full p-2 border border-gray-300 rounded mt-1 hover:border-dark-green bg-transparent"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Enter Your Password"
                ></input>
                {/* <button onClick={togglePassword}>Show Password</button> */}
                <div className="text-xs text-red-600	">
                  {errors.password && (
                    <p className="error">{errors.password}</p>
                  )}
                </div>
              </div>
              <div className="my-4 cursor-pointer">
                <input className="mr-2 leading-tight checkbox checkbox-sm checkbox-accent" type="checkbox" id="checkbox_id" 
                onClick={() => setPasswordShown(prevState => !prevState)} />
                <span className="text-sm" htmlFor="checkbox_id">
                  Lihat Password
                </span>
              </div>
              {/* submit */}
              <div>
                {isFailed && (<div className="text-xs text-red-600 my-3">No Such Data</div>)}
                <Button
                  def="default"
                  type="buyNow"
                  onClick={handleFormSubmit}
                >
                  Masuk 
                  { userLogged && (<Redirect to="/"/>) }
                  { adminLogged && (<Redirect to="/admin"/>) }
                </Button>
              </div>
              <div className="text-center my-3">
            <Link to="/login"
          className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
          Lupa password?
            </Link>
        </div>
              <div className="text-center lg:flex lg:justify-center my-4">
                <p className="inline-block text-sm text-black-500">
                  Belum punya akun?
                  <Link
                    className="px-2 inline-block text-sm text-blue-500 hover:text-blue-800"
                    to="/daftar"
                  >
                    Daftar
                  </Link>
                </p>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    
  );
}