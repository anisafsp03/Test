import { useState, useEffect } from 'react';
import logo from '../icons/logo.png';
// import ava from '../images/profil.png'
import { Link } from "react-router-dom";
import Button from './button';

export default function NavbarLogin() {
	const [navbarOpen, setNavbarOpen] = useState(false)
  const [fiturOpen, setFiturOpen] = useState(false)
  const [profilOpen, setProfilOpen] = useState(false)

  const handleLogout = () => {
    localStorage.clear();
  };

  const loggedInUser = localStorage.getItem("credential");
  const foundUser = JSON.parse(loggedInUser);
  const ava = foundUser.data.profpic

	return (
		<>
      <nav className="font-montserrat sticky top-0 inset-x-0 z-50 flex flex-wrap items-center justify-between px-2 py-3 bg-light-green shadow-md">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<img src={logo} className="w-20" alt='logo'/>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg className="w-6 h-6" fill="#08A4A6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? "flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="lg:px-3 py-2 flex items-center text-lg capitalize font-bold leading-snug text-white hover:opacity-75" to='/'      
                >
                  <i className="lg:text-lg leading-lg text-white opacity-75"></i><span className="ml-2">beranda</span>
                </Link>
              </li>
              <li className="nav-item block lg:hidden">
                <div
                  className="lg:px-3 pb-2 text-lg capitalize font-bold leading-snug text-dark-green  dropdown dropdown-end dropdown-hover" href="#" onClick={() => setProfilOpen(!profilOpen)}
                >
                  <i tabIndex="0" className="lg:text-lg leading-lg text-dark-green opacity-75"></i><span className="ml-2 flex">Profile</span>
                  <ul tabIndex="0" className={"menu text-sm" + (profilOpen ? ' block' : ' hidden')}>
                    <li className='hover:bg-light-green'>
                      <Link to="/profil">profil saya</Link>
                    </li> 
                    <li className='hover:bg-light-green -mt-3'>
                      <Link to="/edit-profil">edit profil</Link>
                    </li> 
                  </ul>
                </div>
              </li>
              <li className="nav-item hidden lg:block">
                <div
                  className="lg:px-3 py-2 text-lg capitalize font-bold leading-snug text-white  dropdown dropdown-end dropdown-hover" href="#"
                >
                  <i tabIndex="0" className="lg:text-lg leading-lg text-white opacity-75"></i><span className="ml-2 flex">Fitur
                    <span className='inline-block ml-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </span>
                  <ul tabIndex="0" className="shadow menu dropdown-content bg-blue-900 rounded-box w-52 text-sm py-0">
                    <li className='hover:bg-navy'>
                      <Link to="/konsultasi">Berita</Link>
                    </li> 
                    <li className='hover:bg-light-green -mt-3'>
                      <Link to="/psikolog">Strukur Pegawai</Link>
                    </li> 
                    <li className='hover:bg-light-green -mt-3'>
                      <Link to="/deteksi">Koleksi Museum</Link>
                    </li> 
                    <li className='hover:bg-light-green -mt-3'>
                      <Link to="/artikel">Member</Link>
                    </li>
                    <li className='hover:bg-light-green -mt-3'>
                      <Link to="/webinar">Dokumentasi Kegiatan</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item block lg:hidden">
                <div
                  className="lg:px-3 py-2 text-lg capitalize font-bold leading-snug text-white  artboard" href="#" onClick={() => setFiturOpen(!fiturOpen)}
                >
                  <i tabIndex="0" className="lg:text-lg leading-lg text-white opacity-75"></i><span className="ml-2 flex">Fitur
                  </span>
                  <ul tabIndex="0" className={"menu text-sm" + (fiturOpen ? ' block' : ' hidden')}>
                    <li className='hover:bg-light-green'>
                      <Link to="/konsultasi">Konsultasi</Link>
                    </li> 
                    <li className='hover:bg-light-green -mt-3'>
                      <Link to="/psikolog">Profil Psikolog</Link>
                    </li> 
                    <li className='hover:bg-light-green -mt-3'>
                      <Link to="/deteksi">Pendeteksi Masalah</Link>
                    </li> 
                    <li className='hover:bg-light-green -mt-3'>
                      <Link to="/artikel">Artikel</Link>
                    </li>
                    <li className='hover:bg-light-green -mt-3'>
                      <Link to="/webinar">Webinar</Link>
                    </li>
                    <li className='hover:bg-light-green -mt-3'>
                      <Link to="/komunitas">Komunitas</Link>
                    </li>
                    <li className='hover:bg-light-green -mt-3'>
                      <Link to="/testimoni">Pengalaman Pengguna</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link
                  className="lg:px-3 py-2 flex items-center text-lg capitalize font-bold leading-snug text-white hover:opacity-75" to="/tentang"      
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Tentang</span>
                </Link>
              </li>
              <li className="nav-item hidden lg:block">
                <div
                  className="lg:px-3 text-lg capitalize font-bold leading-snug text-white dropdown dropdown-end dropdown-hover" href="#"
                >
                  <i tabIndex="0" className="lg:text-lg leading-lg text-dark-green opacity-75"></i><span className="ml-2 flex">
                    <span className='inline-block'>
                    <img src={ava} className="w-12 -mb-2 rounded-full" alt='profile'/>
                    </span>
                  </span>
                  <ul tabIndex="0" className="shadow menu dropdown-content bg-white rounded-box w-52 text-sm py-0 capitalize">
                    <li className='hover:bg-light-green'>
                      <Link to="/profil">profil saya</Link>
                    </li> 
                    <li className='hover:bg-light-green -mt-3'>
                      <Link to="/edit-profil">edit profil</Link>
                    </li> 
                    <li className='hover:bg-light-green -mt-3'>
                      <Link to="/login" onClick={handleLogout}>keluar</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item block lg:hidden">
                <Link
                  className="lg:px-3 flex items-center text-sm capitalize font-bold leading-snug text-white hover:opacity-75 py-2 lg:py-0" to="/login"             
                >
                <Button def="default" type="signUp" onClick={handleLogout}>keluar</Button>
                </Link>
              </li> 
            </ul>
          </div>
        </div>
      </nav>
    </>
	)
}
