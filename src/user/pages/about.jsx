import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import about from "../images/about.png"
import CardTim from "../components/cardTimKami";
import Button from "../components/button";
import { gmail, location, telp } from "../icons";
import NavbarLogin from "../components/navbarlogin";

export default function AboutPage() {
  const [user, setUser] = useState()
  const [showModal, setShowModal] = useState(false);
  const [listUser, setListUser] = useState([])
  const [tim, setTim] = useState([])
  
  useEffect(() => {
    axios.get("https://be-cureit.herokuapp.com/tim")
    .then (res => {
      const fetch = res.data
      setTim(fetch)
    })
  },[])

  useEffect(() => {
      const loggedInUser = localStorage.getItem("credential");
      if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      }
  }, []);

  const [values, setValues] = useState({
      name: "",
      message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
      setValues({
      ...values,
      [event.target.name]: event.target.value,
      });
  };

  const handleFormSubmit = (event) => {
      event.preventDefault();
      if (values.name.length >= 1 && values.message.length >= 1) {
        setShowModal(true)
      } else {
        console.log("pesan gagal")
        // setErrors(validation(values));
      }
  };

  return (
    <div className="bg-white">
      {/* header */}
      {user? <NavbarLogin/>:<Navbar />}
      <div className="mb-12 lg:mb-24">
        <img src={about}/>
      </div>
      {/* tim */}
      <div className="container px-5 lg:px-16 mb-20 lg:mb-36 mx-auto text-black">
        <div data-aos="fade-up" data-aos-duration="1500">
          <h1 className="text-center lg:text-left font-bold font-montserrat text-dark-green text-2xl lg:text-4xl capitalize">tim kami</h1>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-8 lg:p-0 text-black lg:my-8'>
            {tim.map((tim) => (
              <CardTim title={tim.nama} img={tim.gambar} desc={tim.deskripsi} position={tim.posisi}/>
            ))}
          </div>
        </div>
      </div>
      {/* hubungi */}
      <div className="bg-light-green py-16 lg:py-36">
        <div data-aos="fade-up" data-aos-duration="1500">
          <h1 className="text-center font-bold font-montserrat text-dark-green text-sm lg:text-xl capitalize px-2">Ingin menjalin kerjasama bisnis/organisasi?</h1>
          <h1 className="text-center font-bold font-montserrat text-dark-green text-sm lg:text-xl capitalize px-2">Hubungi Farrel (Founder & CEO kami) untuk diskusi lebih lanjut.</h1>
          <div className="flex justify-center mt-3">
            <Button def='default' type='pilihPaket'>hubungi kami</Button>
          </div>
        </div>
      </div>
      {/* kontak */}
      <div className="container px-5 lg:px-16 my-20 mx-auto text-black">
        <div data-aos="fade-up" data-aos-duration="1500">
          <h1 className="text-center lg:text-left font-bold font-montserrat text-dark-green text-2xl lg:text-4xl capitalize">hubungi kami</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 lg:p-0 text-black my-8 border-2 border-dark-green rounded-lg'>
            <div className="col-span-1 p-6 my-2 font-poppins">
              <form className="flex flex-col justify-center mx-2">
                <div className="flex flex-col mb-4 mt-5 lg:mt-0">
                  <label htmlFor="name" className="label text-sm lg:text-lg font-bold text-gray-700 block font-montserrat">Email</label>
                  <input type="name" name="name" id="name" value={values.name} onChange={handleChange}
                    placeholder="Enter Your Email"
                    className="w-100 py-2 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 focus:border-indigo-500 focus:outline-none" />
                  <div className="text-xs text-red-600">
                    {errors.email && <p className="error">{errors.name}</p>}
                  </div>
                </div>
                <div className="relative mb-4">
                  <label htmlFor="message"
                    className="label text-sm lg:text-lg font-bold text-gray-700 block font-montserrat">Message</label>
                  <textarea id="message" name="message" value={values.message} onChange={handleChange}
                    placeholder="Write a message..."
                    className="w-full bg-white rounded-lg border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-56 text-base outline-none text-gray-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                  <div className="text-xs text-red-600">
                    {errors.message && <p className="error">{errors.message}</p>}
                  </div>
                </div>
                
                <div className="mt-2">
                  <Button def="default" type="buyNow" onClick={handleFormSubmit} >Submit</Button>
                </div>

              </form>
            </div>
            <div className="col-span-1 p-6 my-2">
              <div className="flex flex-col">
                <div className="lg:my-3">
                  <h3 className="text-sm lg:text-lg font-bold text-gray-700 block font-montserrat">Tentang Kami</h3>
                  <p className="text-xs lg:text-base text-gray-700 font-poppins mt-2">
                  Kami adalah psikolog klinis dan konsultan psikologi pendidikan dengan klinik yang nyaman. Kami bekerja dengan orang tua, guru dan anak dalam ranah perkembangan.
                  </p>
                </div>
                <div className="my-3">
                  <h3 className="text-sm lg:text-lg font-bold text-gray-700 block font-montserrat">MS Wellbeing Center</h3>
                  <div className="grid grid-cols-12 my-4">
                    <div className="col-span-1">
                      <img className="w-10" src={gmail} alt="gmail" />
                    </div>
                    <div className="col-span-11 text-gray-700 font-poppins">
                      <p className="text-xs lg:text-base ml-2 lg:mt-2">Mswellbeing53@gmail.com</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 my-4">
                    <div className="col-span-1">
                      <img className="w-10" src={telp} alt="telp" />
                    </div>
                    <div className="col-span-11 text-gray-700 font-poppins">
                      <p className="text-xs lg:text-base ml-2 lg:mt-2">081317902408</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 my-4">
                    <div className="col-span-1">
                      <img className="w-10" src={location} alt="location" />
                    </div>
                    <div className="col-span-11 text-gray-700 font-poppins">
                      <p className="text-xs lg:text-base ml-2 ">Gedung Multi Jl. KH Abdullah Syafei no 3 Tebet-Jakarta Selatan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}