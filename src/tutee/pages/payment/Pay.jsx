import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCcAmazonPay } from "react-icons/fa";
import axios from "axios";
import uuid4 from "uuid4";

import { ADD_PAY, INITIALIZE_PAY, CLIENT_BASE_URL } from "../../../api/API";
const callback_url = `${CLIENT_BASE_URL}/tutee/verifypay`;
const return_url = `${CLIENT_BASE_URL}/tutee/verifypay`;

const Pay = ({ payData }) => {
  const Navigate = useNavigate({});

  const payFunction = async () => {
    const TX_REF = uuid4();
    const initializeInfo = {
      first_name: payData.name.split(" ")[0],
      last_name: payData.name.split(" ")[1],
      email: payData.email,
      phone_number: payData.phone,
      amount: payData.amount,
      currency: "ETB",
      tx_ref: TX_REF,
      callback_url: `${callback_url}/${TX_REF}`,
      return_url: `${return_url}/${TX_REF}`,
    };

    const data = {
      tutee: payData.tutee_id,
      tutor: payData.tutor_id,
      course: payData.course_id,
      status: "payed",
      tex_ref: TX_REF,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${payData.token}`,
      },
    };

    const response = await axios.post(INITIALIZE_PAY, initializeInfo, config);
    if (response.data.checkout_url) {
      const addPay = await axios.post(
        `${ADD_PAY}/${payData.request_id}`,
        data,
        config
      );
      console.log(addPay.data);
      window.location.replace(response.data.checkout_url);
    } else {
      Navigate("/tutee/home");
      console.log(response.data);
    }
  };

  return (
    <>
      <button
        onClick={payFunction}
        className="flex items-center mx-2 my-4 px-4 font-small text-green-600 bg-transparent border border-green-600 rounded-xl hover:bg-green-600 hover:text-white hover:border-transparent focus:outline-none"
      >
        <FaCcAmazonPay className="mr-2" /> <span>Pay</span>
      </button>
    </>
  );
};

export default Pay;
