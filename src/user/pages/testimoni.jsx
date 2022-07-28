import { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from 'react-player'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";
import NavbarLogin from "../components/navbarlogin";

export default function DetailTestimoniPage() {
  const [testimoni, setTestimoni] = useState([])
  const [testiId, setTestiId] = useState([])
  const [user, setUser] = useState()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("credential");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  useEffect(() => {
    axios.get(`https://be-cureit.herokuapp.com/pengalaman/`)
    .then (res => {
      const fetch = res.data
      setTestimoni(fetch)
    })
  },[testimoni])

  useEffect(() => {
    axios.get(`https://be-cureit.herokuapp.com/pengalaman/${id}`)
    .then (res => {
      const fetch = res.data
      setTestiId(fetch)
    })
  },[testiId])

  let {id} = useParams()

  return (
    <div className="bg-white">
      {user ? <NavbarLogin/>:<Navbar />}
      <div className="container mt-16 px-5 lg:px-16 mb-12 mx-auto text-black">
        <div className="carousel rounded-box">
          {testimoni.map((testimoni) => (
          <div className="w-full carousel-item grid" key={testimoni._id}>
            <h1 className="font-montserrat font-bold text-dark-green text-2xl lg:text-4xl capitalize mb-4">{testimoni.judul}</h1>
            <p className="font-poppins text-sm lg:text-base">Problema: {testimoni.problema}</p>
            <div className="grid grid-cols-1 lg:grid-cols-6">
              <div className="col-span-1 lg:col-span-3 my-8 lg:my-8 font-poppins" data-aos="fade-right" data-aos-duration="1500">
                <div className="player-wrapper">
                  <ReactPlayer className='react-player' url={testimoni.video} controls={true} width="100%" height="100%"/>
                </div>
              </div>
              <div className="lg:col-span-3 lg:my-auto lg:ml-20" data-aos="fade-left" data-aos-duration="1000">
                <div className="font-montserrat font-bold text-lg lg:text-2xl text-dark-green mb-5">
                  Jangan Pernah Lari dari Masalah
                </div>
                <div className="font-poppins text-xs lg:text-sm">
                {testimoni.deskripsi}
                </div>
              </div>
            </div> 
          </div>
          ))}
        </div>
        <div className="flex justify-center w-full py-4 space-x-2">
          <div className="text-3xl text-dark-green">•</div> 
          <div className="text-3xl text-dark-green">•</div> 
          <div className="text-3xl text-dark-green">•</div> 
        </div>
      </div>
      <Footer />
    </div>
  )
}