import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Button from "../components/button";
import Footer from "../components/footer";
import NavbarLogin from "../components/navbarlogin";
import SoalDeteksi from "../components/soalDeteksi";
import validation from "../components/validation";

export default function DeteksiPage() {
  const [values, setValues] = useState({
    question : [],
    score: 0
  });
  const [user, setUser] = useState()
  const history = useHistory()

  const [soal, setSoal] = useState([])

  useEffect(() => {
  axios.get("https://be-cureit.herokuapp.com/deteksi/61dff7485d99ffac2d01779e")
    .then (res => {
      const fetch = res.data
      const listSoal = fetch.questions
      setSoal(listSoal)
    })
  },[values])

  useEffect(() => {
    const loggedInUser = localStorage.getItem("credential");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    } else {
      history.push('/login')
    }
  }, []);

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    let score = 0
    let currentValue = values.question
    const checkQuestion = currentValue.find(value => value.id === event.target.name)
    let newQuestion = []
    if (checkQuestion) {
      newQuestion = currentValue.map(value => {
        if (value.id === event.target.name) {
          score += Number(event.target.value)
          return {
                id : event.target.name,
                score: event.target.value
          }
        } else {
          score += Number(value.score)
          return value
        }
      })
    } else {
      newQuestion = [...currentValue, {
        id : event.target.name,
        score: event.target.value
      }]
      score += (values.score + Number(event.target.value))
    }
    setValues({score, question: newQuestion})
  }
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if(values.score > 35) {
      history.push("/bermasalah")
    } else if (values.score < 35 && values.score > 25) {
      history.push("/butuh-pengembangan")
    } else {
      history.push("/tidak-bermasalah")
    }
    setErrors(validation(values));
  }
  return (
    <div>
      {user && 
        <div className="bg-white">
          <NavbarLogin />
          <div className="container mx-auto px-5 my-12 text-black font-poppins">
            <div className="lg:mb-8 mb-4">
              <h1 className="lg:text-4xl text-xl text-dark-green font-montserrat font-bold capitalize">Tes Level Stress</h1>
              <p className="text-sm lg:text-base mt-2">Tes ini berguna untuk mendeteksi tingkat stress kamu dan akan membantu kami untuk menentukan konsultasi mana yang terbaik untuk kamu.</p>
            </div>
            <div>
              {soal.map((soal) => (
                <SoalDeteksi key={soal.question} name={soal._id} soal={soal.question} onChange={handleChange}/>
              ))}
            </div>
            <div className="flex justify-end mt-8">
              <Button def='default' type='kirimDeteksi' onClick={handleFormSubmit}>Kirim</Button>
            </div>
          </div>
          <Footer />
        </div>
      }
    </div>
  )
}