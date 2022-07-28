import payment from "../images/credit.png"
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CardPaket ({name, desc, price}) {
  const [user, setUser] = useState()

  useEffect(() => {
    const loggedInUser = localStorage.getItem("credential");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser.data);
    }
  }, []);

  const history = useHistory()
  const handleCheckout = async () => {
    console.log(price);
    const chars ='abcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for ( let i = 0; i < 20; i++ ) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
    if(user) {
      const responseServer = await fetch('https://be-cureit.herokuapp.com/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "order_id": `Cureit-${result}`,
          "gross_amount": `300000`,
          "name": `${user.name}`,
          "email": `${user.email}`,
          "phone": `${user.phone}`
        }),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data)
        return data
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      console.log(responseServer)
      window.open(responseServer.transaction.redirect_url)
      history.push("/payment")
    } else {
      history.push("/login")
    }
  };
  return (
    <>
      <div className="card shadow-2xl my-2">
        <h3 className="card-title font-montserrat text-base py-8 capitalize text-center bg-accent text-accent-content">{name}</h3>
        <div className="card-body font-poppins -m-4">
          <div className="mb-2 text-sm whitespace-pre-line align-bottom h-16">
            {desc}
          </div>
          <div className="justify-center card-actions">
            <p className="text-center text-sm">Rp {
                    new Intl.NumberFormat(['ban', 'id']).format(Number(price))}</p>
            <a href="#my-modal" className="btn bg-dark-green hover:btn-accent border-0 w-full" >beli sekarang</a> 
            <div id="my-modal" className="modal">
              <div className="modal-box bg-light-green">
                <img src={payment} className="mx-auto w-1/2 my-3"/>
                <p className="text-black">Yakin pilih paket ini?</p> 
                <div className="modal-action">
                  <Link to="/payment">
                    <a href="#" className="btn btn-accent" onClick={handleCheckout}>Ya</a> 
                  </Link>
                  <a href="#" className="btn">Tidak</a> 
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </>
  )
}