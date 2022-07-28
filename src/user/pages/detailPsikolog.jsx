import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Button from "../components/button";
import CardTestimoniPsikolog from "../components/cardTesti";
import { Link, useParams } from "react-router-dom";
import NavbarLogin from "../components/navbarlogin";

export default function DetailPsikologPage() {
  const [psikolog, setPsikolog] = useState([])
  const [testi, setTesti] = useState([])
  const [user, setUser] = useState()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("credential");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  useEffect(() => {
    axios.get(`https://be-cureit.herokuapp.com/psikolog/${id}`)
    .then (res => {
      const fetch = res.data
      setPsikolog(fetch)
      setTesti(fetch.testimoni)
    })
  },[psikolog])
  let {id} = useParams()


  return (
    <div className="bg-white">
      {user ? <NavbarLogin/> : <Navbar />}
      <div className="container mt-16 px-5 lg:px-16 mb-12 mx-auto text-black">
        <h1 className="font-montserrat font-bold text-dark-green text-2xl lg:text-4xl capitalize mb-4">profil psikolog</h1>
        <p className="font-poppins text-sm lg:text-base">Ramah, Profesional, dan non-judgemental </p>
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:mx-12">
          <div className="col-span-1 lg:col-span-2 my-8 lg:my-20 font-poppins" data-aos="fade-right" data-aos-duration="1500">
            <img className="mx-auto w-80 h-80 object-scale-down" src={psikolog.gambar} alt="gambar"/>
          </div>
          <div className="lg:col-span-3 lg:my-auto lg:ml-20" data-aos="fade-left" data-aos-duration="1000">
            <div className="font-montserrat font-bold text-lg lg:text-2xl text-dark-green">
              {psikolog.name}
            </div>
            <div className="font-montserrat font-bold text-sm lg:text-base my-3">
            {psikolog.spesialis}
            </div>
            <div className="font-poppins text-xs lg:text-sm mb-8">
            {psikolog.deskripsi}
            </div>
            <Link className="my-8" to='/konsultasi'>
              <Button type='pilihPaket' def='default'>jadwalkan konsultasi</Button>
            </Link>
          </div>
        </div>
        <div className="font-poppins text-sm lg:text-base text-center font-bold mt-5">Testimoni  Konsultasi Untuk {psikolog.name}</div>
        <div className='lg:mx-36 grid grid-cols-1 md:grid-cols-2 p-5 shadow-2xl rounded-xl'>
          {testi.slice(0,4).map((testi) => (
            <CardTestimoniPsikolog img={testi.gambar} title={testi.patientname} desc={testi.deskripsi}/>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}