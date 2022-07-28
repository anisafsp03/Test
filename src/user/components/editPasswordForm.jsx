import validation from "./validation";
import Button from "./button";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import login from "../images/login.gif"

export default function EditPassword() {
  const [values, setValues] = useState({
    password:""
  });

  
  const [passwordShown, setPasswordShown] = useState(false);
  const [errors, setErrors] = useState({});
  const history = useHistory()

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const loggedInUser = localStorage.getItem("credential")
    const logged = JSON.parse(loggedInUser);
    const {token, id, role} = logged.data
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    if (role === 'user') {
      axios.patch(`https://be-cureit.herokuapp.com/password-user/${id}`, {
        password : values.password
      }, config)
      .then(response => {
        console.log(response,"Sukses mengupdate")
        history.push('/login')
      })
      .catch(err => console.log(err))
    } else {
      history.push('/403')
    }
  }

  return (
  <div className="bg-light-green font-poppins p-3 lg:p-12 rounded-lg">
    <div className="mb-8">
      <h1 className="text-dark-green text-xl lg:text-3xl capitalize font-montserrat font-bold">Edit Profil</h1>
    </div>
    <form className="w-full mx-auto my-5 text-black">
      <div className="mt-4">
        <label className="label text-sm font-bold text-gray-700 block">
          Password Baru
        </label>
        <input
          type={passwordShown ? "text" : "password"} 
          name="password"
          className=" input text-xs w-full p-2 border border-gray-300 rounded mt-1 hover:border-dark-green bg-transparent"
          value={values.password}
          onChange={handleChange}
          placeholder="Enter Your New Password"
        ></input>
        <input
          className="mt-2"
          type="checkbox"
          id="pw"
          onClick={() => setPasswordShown(prevState => !prevState)}
        />
        <label className="text-xs ml-2" for='pw'>Lihat password</label>
        <div className="text-xs text-red-600	">
          {errors.password && (
            <p className="error">{errors.password}</p>
          )}
        </div>
      </div>

      {/* submit */}
      <a href="#my-modal" className="btn bg-dark-green hover:btn-accent border-0 w-full" >simpan</a> 
      <div id="my-modal" className="modal">
        <div className="modal-box bg-light-green">
          <img src={login} className="mx-auto w-1/2 my-3"/>
          <p className="text-black">Harap masuk kembali untuk menyimpan perubahan</p> 
          <div className="modal-action">
            <a href="#" className="btn btn-accent" onClick={handleFormSubmit}>Masuk</a> 
            <a href="#" className="btn">Tutup</a> 
          </div>
        </div>
      </div>  
      
    </form>
  </div>
  )
}