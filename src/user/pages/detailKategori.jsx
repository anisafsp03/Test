import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Button from "../components/button";
import { useParams, Link } from "react-router-dom";
import NavbarLogin from "../components/navbarlogin";

export default function DetailKategoriPage() {
  const [kategori, setKategori] = useState([])
  const [user, setUser] = useState()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("credential");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  useEffect(() => {
    axios.get(`https://be-cureit.herokuapp.com/kategori/${id}`)
    .then (res => {
      const fetch = res.data
      setKategori(fetch)
    })
  },[kategori])
  
  let {id} = useParams()

  return (
    <div className="bg-white">
      {user ? <NavbarLogin/> : <Navbar />}
      <div className="container mt-8 lg:mt-16 px-5 lg:px-16 mb-12 mx-auto text-black">
        <h1 className="text-center lg:text-left font-montserrat font-bold text-dark-green text-2xl lg:text-4xl capitalize mb-5 lg:mb-12">pilih kategori masalah</h1>
        <h1 className="font-montserrat text-center font-bold text-dark-green text-xl lg:text-3xl capitalize mb-5 lg:mb-12">{kategori.judul}</h1>
        <img className="mx-auto mb-5" src={kategori.gambar} alt="gambar"/>
        <div className="font-poppins text-xs lg:text-base whitespace-pre-line align-bottom">
        {kategori.deskripsi}
        </div>
        <div className="mt-12">
          <Link className="justify-center card-actions mb-32" to="/konsultasi">
            <Button def="default" type="pilihPaket">pilih kategori ini</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}