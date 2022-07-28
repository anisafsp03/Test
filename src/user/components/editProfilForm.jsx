import validation from "./validation";
import Button from "./button";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import login from "../images/login.gif"

export default function EditProfil() {
  const [values, setValues] = useState({
    phone: "",
    name: "",
    gender: "",
    email: "",
    email_ortu: "",
    date: "",
    gambar: "",
    member : ""
  });

  const [errors, setErrors] = useState({});
  const [updated, setUpdated] = useState(false)
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
    const {token, id, role, email, gender, name, no_hp, profpic, email_Ortu, birthdate, member} = logged.data
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    if (role === 'user') {
      axios.patch(`https://be-cureit.herokuapp.com/update-user/${id}`, {
        no_hp: values.phone || no_hp,
        name: values.name || name,
        gender: values.gender || gender,
        email: values.email || email,
        email_Ortu: values.email_ortu || email_Ortu,
        birthdate: values.date || birthdate,
        profpic: values.gambar || profpic,
        member : values.member || member
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
      {/* name */}
      <div>
        <label className="label text-sm font-bold text-black block">
          Nama
        </label>
        <input
          type="text"
          name="name"
          className="input text-xs w-full p-2 border border-gray-300 rounded mt-1 hover:border-dark-green bg-transparent"
          value={values.name}
          onChange={handleChange}
          placeholder="Enter Your Name"
        ></input>
        <div className="text-xs text-red-600	">
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
      </div>

      {/* gender */}
      <div className="mt-4">
        <label className="label text-sm font-bold text-black block">
          Jenis Kelamin
        </label>
        <label className="inline-flex items-center label text-sm font-bold text-black">
          <input
            type="radio"
            className="form-radio"
            name="gender"
            value="Male"
            onChange={handleChange}
          />
          <label className="ml-2 text-xs">Laki-laki</label>
        </label>
        <label className="inline-flex items-center ml-4 label text-sm font-bold text-black">
          <input
            type="radio"
            className="form-radio"
            name="gender"
            value="Female"
            onChange={handleChange}
          />
          <label className="ml-2 text-xs">Perempuan</label>
        </label>
        <div className="text-xs text-red-600	">
          {errors.gender && (
            <p className="error">{errors.gender}</p>
          )}
        </div>
      </div>

      {/* email */}
      <div className="mt-3">
        <label className="label text-sm font-bold text-black block">
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

      {/* email */}
      <div className="mt-3">
        <label className="label text-sm font-bold text-black block">
          Email Orang Tua
        </label>
        <input
          type="email"
          name="email_ortu"
          className="input text-xs w-full p-2 border border-gray-300 rounded mt-1 hover:border-dark-green bg-transparent"
          value={values.email_ortu}
          onChange={handleChange}
          placeholder="Enter Your Email"
        ></input>
        <div className="text-xs text-red-600">
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
      </div>

      {/* phone number */}
      <div className="mt-3">
        <label className="label text-sm font-bold text-black block">
          Nomor Telepon
        </label>
        <input
          type="text"
          name="phone"
          className="input text-xs w-full p-2 border border-gray-300 rounded mt-1 hover:border-dark-green bg-transparent"
          value={values.phone}
          onChange={handleChange}
          placeholder="08xxxxxxxxxx"
        ></input>
        <div className="text-xs text-red-600">
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
      </div>

      {/* birthdate */}
      <div className="mt-3">
        <label className="label text-sm font-bold text-black block">
          Tanggal Lahir
        </label>
        <input
          type="date"
          name="date"
          className="input text-xs w-full p-2 border border-gray-300 rounded mt-1 hover:border-dark-green bg-transparent"
          value={values.date}
          onChange={handleChange}
          placeholder="08xxxxxxxxxx"
        ></input>
        <div className="text-xs text-red-600">
          {errors.date && <p className="error">{errors.date}</p>}
        </div>
      </div>

      {/* gambar */}
      <div className="my-3">
        <label className="label text-sm font-bold text-black block">Foto Profil</label>
        <input className="input text-xs w-full p-2 border border-gray-300 rounded mt-1 hover:border-dark-green bg-transparent" type="text" id="file"
        name="gambar"
        value={values.gambar}
        onChange={handleChange}
        placeholder="masukkan url gambar kamu"/>
      </div>

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