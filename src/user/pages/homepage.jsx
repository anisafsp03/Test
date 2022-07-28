/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import {
  komunitas,
  logo,
  konsul,
  praktis,
  harga,
  test,
  workshop,
  testimoni,
} from '../icons/'
import { useState, useEffect } from 'react'
import axios from 'axios'
import jumbotron from '../images/doctor.png'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Button from '../components/button'
import CardArtikel from '../components/cardArtikel'
import NavbarLogin from '../components/navbarlogin'
import CardBanner from '../components/cardBanner'

export default function HomePage() {
  const [artikel, setArtikel] = useState([])
  const [banner, setBanner] = useState([])
  const [user, setUser] = useState()

  useEffect(() => {
    const loggedInUser = localStorage.getItem('credential')
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      setUser(foundUser)
    }
  }, [])

  useEffect(() => {
    axios.get('http://api-dinas.duniadev.com/api/news/').then((res) => {
      const fetch = res.data.data
      setArtikel(fetch)
    })
  }, [])

  useEffect(() => {
    axios.get('http://api-dinas.duniadev.com/api/banners').then((res) => {
      const fetch = res.data.data
      setBanner(fetch)
    })
  }, [])

  return (
    <>
      {user ? <NavbarLogin /> : <Navbar />}
      {/* section 1 */}
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="bg-white flex flex-row pt-8 lg:py-10">
        {/* berita*/}
        <div className="basis-3/4" data-aos="fade-up" data-aos-duration="1500">
          {/* <h1 className="container mx-5 px-5 lg:px-16 font-bold font-montserrat text-light-brown text-2xl lg:text-4xl capitalize">
            Berita Terkini
          </h1> */}
          {/* <div className="lg:mx-5 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 p-5 text-black">
            {artikel.slice(0,4).map((artikel) => (
              <CardArtikel
                key={artikel.url}
                img={artikel.gambar}
                title={artikel.title}
                desc={artikel.body}
                link={`/artikel/${artikel.url}`}
              />
            ))}
          </div> */}
          <div className="container mx-auto mt-10 px-5">
            <div className="grid grid-cols-1 lg:grid-cols-6 lg:mx-12">
              <div
                className="lg:col-span-3 my-8 lg:my-15"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="grid grid-cols-2 lg:mb-8 gap-2 lg:gap-6">
                  <div className="card justify-center text-black bg-light-green">
                    <img
                      className="w-20 lg:w-32 mx-auto mt-8"
                      src={komunitas}
                      alt="komunitas"
                    />
                    <div className="card-body font-poppins mx-auto">
                      <h3 className="card-title font-montserrat text-sm -mt-9 lg:-mt-14 -mb-4 capitalize text-center">
                        Koleksi Museum
                      </h3>
                      <Link
                        className="card-actions justify-center"
                        to="/koleksi"
                      >
                        <Button type="more2">lihat selengkapnya</Button>
                      </Link>
                    </div>
                  </div>
                  <div className="card justify-center text-black bg-light-green">
                    <img
                      className="w-14 lg:w-20 mx-auto mt-8"
                      src={test}
                      alt="tes"
                    />
                    <div className="card-body font-poppins mx-auto">
                      <h3 className="card-title font-montserrat text-xs lg:text-sm -mt-8 -mb-4 capitalize text-center">
                        Artikel
                      </h3>
                      <div className="mb-4 mt-1">
                        <Link
                          to="/artikel"
                          className="card-actions justify-center"
                        >
                          <Button type="more2">lihat selengkapnya</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card justify-center text-black bg-light-green">
                    <img
                      className="w-14 lg:w-20 mx-auto mt-8"
                      src={workshop}
                      alt="ww"
                    />
                    <div className="card-body font-poppins mx-auto">
                      <h3 className="card-title font-montserrat text-xs lg:text-sm -mt-2 -mb-2 lg:-mb-1 capitalize text-center">
                        Dokumentasi Kegiatan
                      </h3>
                      <Link
                        className="card-actions justify-center"
                        to="/dokumentasi"
                      >
                        <Button type="more2">lihat selengkapnya</Button>
                      </Link>
                    </div>
                  </div>
                  <div className="card justify-center text-black bg-light-green">
                    <img
                      className="w-14 lg:w-20 mx-auto mt-8"
                      src={testimoni}
                      alt="testimoni"
                    />
                    <div className="card-body font-poppins mx-auto">
                      <h3 className="card-title font-montserrat text-xs lg:text-sm -mt-4 -mb-4 capitalize text-center">
                        Struktur Organisasi
                      </h3>
                      <div className="mt-5">
                        <Link
                          className="card-actions justify-center"
                          to="/Banner"
                        >
                          <Button type="more2">lihat selengkapnya</Button>
                        </Link>{' '}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-span-1 lg:col-span-3 lg:my-auto lg:ml-20 my-auto font-poppins"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <h1 className="font-montserrat font-bold text-xl lg:text-5xl text-dark-green mb-4 lg:mb-8">
                  Kami menawarkan pelayanan terbaik
                </h1>
                <p className="text-base lg:text-xl font-thin text-black mb-4 lg:mb-8">
                  Kami menyediakan layanan konsultasi Banneri online yang
                  praktis, efektif, dan biayanya terjangkau. Kami hanya
                  menyediakan produk dengan kualitas terbaik, demi memberikan
                  kenyamanan lebih kepada Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* berita*/}
        <div class="mx-4 mt-10 basis-1/4">
          <h1 class="text-3xl my-5 ml-3 font-bold text-black">Banner</h1>
          {banner.slice(0, 4).map((banner) => (
            <CardBanner
              key={banner.url}
              img={banner.gambar}
              link={`/banner/${banner.url}`}
            />
          ))}
          {/* <img class="basis-1/4 w-64 mx-5 object-cover rounded-t-md" src="https://images.unsplash.com/photo-1509223197845-458d87318791" alt="" />   
      <img class="basis-1/4 w-64 mx-5 mt-5 object-cover rounded-t-md" src="https://images.unsplash.com/photo-1509223197845-458d87318791" alt="" />
      <img class="basis-1/4 w-64 mx-5 mt-5 object-cover rounded-t-md" src="https://images.unsplash.com/photo-1509223197845-458d87318791" alt="" /> 
      <img class="basis-1/4 w-64 mx-5 mt-5 object-cover rounded-t-md" src="https://images.unsplash.com/photo-1509223197845-458d87318791" alt="" />     */}
        </div>
        {/* <div>
        <DiscussionEmbed
                  shortname="example"
                  config={{
                    url: this.props.article.url,
                    identifier: this.props.article.id,
                    title: this.props.article.title,
                    language: 'id-ID', //e.g. for bhs indonesia
                  }}
                />
        </div> */}
      </div>

      <Footer />
    </>
  )
}
