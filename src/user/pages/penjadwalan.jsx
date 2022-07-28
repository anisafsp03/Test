import React, { useState, useEffect } from "react";
import axios from "axios";
import validation from "../components/validation";
import Button from "../components/button";
import { useHistory } from "react-router-dom";
import Footer from "../components/footer";
import NavbarLogin from "../components/navbarlogin";

export default function PenjadwalanPage() {
  const [values, setValues] = useState({
    name: "",
    psikolog:"",
    gender:"",
    phone: "",
    date: "",
    message: ""
  });
  const [user, setUser] = useState()
  const history = useHistory()

  const [psikolog, setPsikolog] = useState([])

  useEffect(() => {
    const loggedInUser = localStorage.getItem("credential");
    const logged = JSON.parse(loggedInUser);
    const { token } = logged.data
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    if (logged.data.role == 'user') {
      axios.get("https://be-cureit.herokuapp.com/list-psikolog/", config)
      .then (res => {
        const fetch = res.data
        setPsikolog(fetch)
        console.log(psikolog);
    })}
  },[])

  useEffect(() => {
    const loggedInUser = localStorage.getItem("credential");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    } else {
      history.push('/login')
    }
  }, []);

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    const loggedInUser = localStorage.getItem("credential")
    const logged = JSON.parse(loggedInUser);
    const {token, id, role, email, gender, name, no_hp, email_Ortu} = logged.data
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    if (role === 'user') {
      axios.post(`https://be-cureit.herokuapp.com/konsultasi/add-konsultasi`, {
        no_hp: values.phone || no_hp,
        name: id,
        gender: values.gender || gender,
        email: email,
        email_Ortu: email_Ortu,
        psikolog: values.psikolog,
        date: values.date,
        keluhan: values.message
      }, config)
      .then(response => {
        console.log(response,"Sukses menjadwalkan")
        history.push('/profil')
      })
      .catch(err => console.log(err.response.data.msg))
    } else {
      history.push('/403')
    }
    setErrors(validation(values));
  }
  
  return (
    <div>
      { user &&
        <div className=" bg-white font-poppins text-black">
          <NavbarLogin />
          <div className="container mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-6">            
              <div className="lg:col-span-3" data-aos="fade-right" data-aos-duration="1500">
                <div className="">
                  <h1 className="text-2xl lg:text-4xl font-bold mt-10">
                    Siap untuk membicarakan masalahmu dengan konselor pilihan mu?
                  </h1>
                  <h3 className="text-base lg:text-xl font-bold mt-10">Silahkan isi form singkat di samping dan klik “Kirim”</h3>
                  <p className="text-sm lg:text-base mt-5">*Privasi dan kerahasiaanmu aman dalam lindungan Kode Etik Psikologi.</p>
                  <p className="text-sm lg:text-base mt-5">**Jaminan Efektivitas Konseling: Apabila konseling dengan kami ternyata tidak membantu, kami akan mengembalikan uangmu sepenuhnya.</p>
                </div>
              </div>
              <div className="col-span-1 lg:col-span-3 my-10 border-4 border-dark-green rounded-lg" data-aos="fade-left" data-aos-duration="1500">
              {/* form */}
              <form className="w-full px-5 lg:px-12 py-8">
                {/* name */}
                <div>
                  <label className="label text-sm font-bold text-black block">
                    Nama Lengkap
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

                {/* psikolog */}
                <div className="mt-4">
                  <label className="label text-sm font-bold text-black block">
                    Psikolog Pilihan
                  </label>
                  <select name="psikolog" id="psikolog" className="w-full font-poppins text-sm" onChange={handleChange} >
                    {psikolog.map((psikolog) => (
                      <option value={psikolog._id} selected>{psikolog.name}</option>
                    ))}
                  </select>
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
                      value="laki-laki"
                      onChange={handleChange}
                    />
                    <label className="ml-2 text-xs">Laki-laki</label>
                  </label>
                  <label className="inline-flex items-center ml-4 label text-sm font-bold text-black">
                    <input
                      type="radio"
                      className="form-radio"
                      name="gender"
                      value="perempuan"
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
  
                {/* phone number */}
                <div className="mt-3">
                  <label className="label text-sm font-bold text-black block">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
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
  
                {/* date */}
                <div className="mt-3">
                  <label className="label text-sm font-bold text-black block">
                    Pilih Tanggal Konsultasi
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
  
                {/* keluhan */}
                <div class="mt-3">
                  <label for="message"
                    className="label text-sm lg:text-sm font-bold text-black block font-montserrat">Keluhan</label>
                  <textarea id="message" name="message" value={values.message} onChange={handleChange}
                    placeholder="Write a message..."
                    class="w-full bg-white rounded-lg border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-56 text-sm outline-none text-gray-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                  <div className="text-xs text-red-600">
                    {errors.message && <p className="error">{errors.message}</p>}
                  </div>
                </div>
  
                {/* submit */}
                <div>
                  <Button
                    def="default"
                    type="buyNow"
                    onClick={handleFormSubmit}
                  >
                    Kirim 
                  </Button>
                </div>
              </form>
              </div>
            </div>
          </div>
          <Footer />
        </div> 
      }
    </div>
  );
}