"use client"

import { useState } from "react"
import "./modal.scss"
import { RxCross2 } from "react-icons/rx"
import Currency from "../currencyExchange/Currency"

function Modal() {

  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }
  return (
    <>
      <button
        onClick={toggleModal}
        className="btn_modal"
      >
        Gift Money
      </button>

      {modal && (
        <div className="modal">
          <div className="overlay"
          onClick={toggleModal}></div>
          <div className="modal-content">
            <div className="payment">
              <p className="head_text">Check how much your <br/> donation is in your location</p>
              <Currency/>
              {/* <input type="text" className="input" placeholder="Write a messege on how you intend the money to be used..." /> */}
              <a href="https://donate.stripe.com/test_6oE8AB0y1cPI3sY6oo" className="btn_modal">Gift It</a>
            </div>
            <div className="image">
              <img src="./img/giving_money.jpg" alt="" />
            </div>
            <button
            onClick={toggleModal}
              className="close-modal"
            >
              <RxCross2/>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
