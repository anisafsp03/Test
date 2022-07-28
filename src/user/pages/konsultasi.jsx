import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CardPaket from "../components/cardPaket";
import NavbarLogin from "../components/navbarlogin";

export default function KonsultasiPage() {
  const [user, setUser] = useState()
  const [paket, setPaket] = useState([])
  
  useEffect(() => {
    axios.get("https://be-cureit.herokuapp.com/paket")
    .then (res => {
      const fetch = res.data
      setPaket(fetch)
    })
  },[])

  useEffect(() => {
    const loggedInUser = localStorage.getItem("credential");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);
  return (
    <div className="bg-white">
      {user ? <NavbarLogin/>:<Navbar />}
      <div className="container mx-auto mt-16 px-5 mb-12">
        <h1 className="font-montserrat font-bold text-dark-green text-2xl lg:text-4xl capitalize text-center mb-4">konseling online</h1>
        <p className="font-poppins text-sm lg:text-base text-black text-center">Efektif  karena bisa bicara langsung dengan konselor melalui chat/video call. </p>
        <p className="font-poppins text-sm lg:text-base text-black text-center">Nyaman dengan harga terjangkau</p>
        <div className='lg:mx-36 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-8 p-5 text-black'>
          {paket.map((paket) => (
            <CardPaket name={paket.name} desc={paket.deskripsi} price={paket.harga} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}