import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import uuid4 from "uuid4";
const payUrl = "http://localhost:5000/api/payment/pay";
const callback_url = "http://localhost:3000/tutee/verifypay";
const return_url = "http://localhost:3000/tutee/verifypay";

const Pay = () => {
  const { tutee } = useSelector((state) => state.tuteeAuth);
  const Navigate = useNavigate({});

  useEffect(() => {}, []);

  const sendPayData = async () => {
    const TX_REF = uuid4();
    const initializeInfo = {
      first_name: "kaleab",
      last_name: "kal",
      email: "email@gmail.com",
      phone_number: "0900000000",
      tutor: "tutor",
      course: "course",
      amount: "200",
      currency: "ETB",
      tx_ref: TX_REF,
      callback_url: `${callback_url}/${TX_REF}`,
      return_url: `${return_url}/${TX_REF}`,
    };

    const token = tutee.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(payUrl, initializeInfo, config);
    if (response.data.checkout_url) {
      console.log(response.data.checkout_url);
      window.location.replace(response.data.checkout_url);
    } else {
      Navigate("/");
    }
  };

  return (
    <div>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <button
          onClick={() => sendPayData()}
          className="rounded-md bg-indigo-600 px-7 py-1.5 text-2xl font-semibold text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          pay
        </button>
      </div>
    </div>
  );
};

export default Pay;
