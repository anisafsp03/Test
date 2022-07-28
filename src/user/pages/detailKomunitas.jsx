import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";
import CardDokumentasi from "../components/cardDokumentasi";
import NavbarLogin from "../components/navbarlogin";

export default function DetailKomunitasPage() {
  const [komunitas, setKomunitas] = useState([])
  let {id} = useParams()
  const [user, setUser] = useState()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("credential");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  useEffect(() => {
    axios.get(`https://be-cureit.herokuapp.com/komunitas/${id}`)
    .then (res => {
      const fetch = res.data
      setKomunitas(fetch)
    })
  },[komunitas])
  

  return (
    <div className="bg-white">
      {user ? <NavbarLogin/> : <Navbar />}
      <div className="container mt-8 lg:mt-16 px-5 lg:px-16 mb-12 mx-auto text-black">
        <div className="mb-5 lg:mb-12">
          <h1 className="font-montserrat font-bold text-dark-green text-2xl lg:text-4xl capitalize mb-5">{komunitas.judul}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-6 lg:mx-12">
          <div className="col-span-3 lg:mt-8" data-aos="fade-right" data-aos-duration="1000">
            <img className="mx-auto mb-5" src={komunitas.gambar} alt="gambar"/>
          </div>
          <div className="col-span-3 my-8 lg:my-auto font-poppins lg:ml-8" data-aos="fade-left" data-aos-duration="1500">
            <div className="font-poppins text-xs lg:text-lg whitespace-pre-line align-bottom">
            {komunitas.deskripsi}
            </div>
          </div>
          </div>
        </div>
        <div>
          <h1 className="font-montserrat font-bold text-dark-green text-xl lg:text-2xl capitalize mb-5 lg:mb-12">dokumentasi kegiatan kami</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-black">
            <CardDokumentasi title={komunitas.judul_dokumentasi} desc={komunitas.desk_dokumentasi} img={komunitas.gambar_dokumentasi} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}