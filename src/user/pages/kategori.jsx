import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CardKategori from "../components/cardKategori";
import Button from "../components/button";
import { Link } from "react-router-dom";
import NavbarLogin from "../components/navbarlogin";

export default function KategoriPage() {
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
    axios.get("https://be-cureit.herokuapp.com/kategori")
    .then (res => {
      const fetch = res.data
      setKategori(fetch)
    })
  },[])
  
  return (
    <div className="bg-white">
      {user ? <NavbarLogin/>:<Navbar />}
      <div className="container px-5 lg:px-16 mx-auto pt-8 lg:py-12">
        <div data-aos="fade-up" data-aos-duration="1500">
          <h1 className="font-bold font-montserrat text-dark-green text-2xl lg:text-4xl capitalize">Pilih Kategori Masalah</h1>
          <div className='grid grid-cols-2 lg:grid-cols-4 text-black gap-6 lg:gap-16 my-6 lg:my-12'>
            {kategori.map((kategori) => (
              <CardKategori img={kategori.gambar} title={kategori.judul} desc={kategori.deskripsi} link={`/kategori/${kategori._id}`}/>
            ))}         
          </div>
        </div>
        <div className="my-16 lg:my-24">
          <h1 className="font-bold font-montserrat text-dark-green text-xl lg:text-3xl capitalize text-center -mb-5">ingin cari tau masalahmu?</h1>
          <Link className="justify-center card-actions" to="/">
            <Button def="default" type="pilihPaket">Klik disini</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}