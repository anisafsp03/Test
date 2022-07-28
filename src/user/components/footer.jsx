import Logo from '../icons/logo.png';
import ig from '../icons/ig.svg';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <>
        <footer className="px-8 pt-8 footer bg-light-green text-dark-green capitalize">
          <div>
            <img src={Logo} alt='logo'></img>
          </div> 
          <div>
            <span className="footer-title">layanan</span> 
            <a className="link link-hover">konsultasi</a> 
            <a className="link link-hover">testimoni</a> 
            <a className="link link-hover">psikolog</a> 
            <a className="link link-hover">workshop</a>
            <a className="link link-hover">bantuan</a>
          </div> 
          <div>
            <span className="footer-title">dukungan</span> 
            <a className="link link-hover">tentang kami</a> 
            <a className="link link-hover">kebijakan privasi</a> 
            <a className="link link-hover">partnership</a> 
            <a className="link link-hover">FAQ</a>
          </div> 
          <div>
            <span className="footer-title">sosial media</span> 
            <div className="grid grid-flow-col gap-4">
              <a>
                <img src={ig} alt="ig" />
              </a> 
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="25" height="24" viewBox="0 0 24 24" className="stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a> 
            </div>
          </div>
        </footer>
        <footer className="py-5 footer bg-light-green text-dark-green capitalize footer-center">
        <div>
          <p>copyright © 2021 MS Wellbeing Center</p>
        </div>
      </footer>
      </>
    )
}