import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";
import NavbarLogin from "../components/navbarlogin";

export default function DetailWebinarPage() {
  const [webinar, setWebinar] = useState([])
  const [user, setUser] = useState()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("credential");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  useEffect(() => {
    axios.get(`https://be-cureit.herokuapp.com/webinar/${id}`)
    .then (res => {
      const fetch = res.data
      setWebinar(fetch)
    })
  },[webinar])
  let {id} = useParams()

  return (
    <div className="bg-white">
      {user ? <NavbarLogin/> : <Navbar />}
      <div className="container mt-16 px-5 lg:px-16 mb-8 lg:mb-12 mx-auto text-black font-poppins">
        <img src={webinar.gambar} className="w-58 mx-auto my-5"/>
        <div className="capitalize font-montserrat font-bold text-xl lg:text-4xl">deskripsi</div>
        <div className="text-sm lg:text-lg whitespace-pre-line align-bottom my-5">{webinar.deskripsi}</div>
      </div>
      <Footer />
    </div>
  )
}