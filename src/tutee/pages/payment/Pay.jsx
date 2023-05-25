/* eslint-disable import/first */
// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import uuid4 from "uuid4";
// const payUrl = "http://localhost:5000/api/payment/pay";
// const callback_url = "http://localhost:3000/tutee/verifypay";
// const return_url = "http://localhost:3000/tutee/verifypay";

// const Pay = () => {
//   const { tutee } = useSelector((state) => state.tuteeAuth);
//   const Navigate = useNavigate({});

//   useEffect(() => {}, []);

//   const sendPayData = async () => {
//     const TX_REF = uuid4();
//     const initializeInfo = {
//       first_name: "kaleab",
//       last_name: "kal",
//       email: "email@gmail.com",
//       phone_number: "0900000000",
//       amount: "200",
//       currency: "ETB",
//       tx_ref: TX_REF,
//       callback_url: `${callback_url}/${TX_REF}`,
//       return_url: `${return_url}/${TX_REF}`,
//     };

//     const token = tutee.token;
//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     const response = await axios.post(payUrl, initializeInfo, config);
//     if (response.data.checkout_url) {
//       console.log(response.data.checkout_url);
//       window.location.replace(response.data.checkout_url);
//     } else {
//       Navigate("/");
//     }
//   };

//   return (
//     <div>
//       <div className="mt-10 flex items-center justify-center gap-x-6">
//         <button
//           onClick={() => sendPayData()}
//           className="rounded-md bg-indigo-600 px-7 py-1.5 text-2xl font-semibold text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         >
//           pay
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Pay;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCcAmazonPay } from "react-icons/fa";
import axios from "axios";
import uuid4 from "uuid4";
const payUrl = "http://localhost:5000/api/payment/pay";
const callback_url = "http://localhost:3000/tutee/verifypay";
const return_url = "http://localhost:3000/tutee/verifypay";

// import { useState, createContext, useContext } from "react";

// const paymentContext = createContext({});

// export function usePaymentContext() {
//   return useContext(paymentContext);
//}

const Pay = ({ payData, children }) => {
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

    const response = await axios.post(payUrl, initializeInfo, config);

    if (response.data.checkout_url) {
      const addPay = await axios.post(
        `http://localhost:5000/api/payment/addPay/${payData.request_id}`,
        data,
        config
      );
      console.log(addPay.data);
      window.location.replace(response.data.checkout_url);
    } else {
      Navigate("/");
    }
  };

  return (
    <>
      <button
        onClick={payFunction}
        className="flex items-center mx-2 px-4 font-small text-green-600 bg-transparent border border-green-600 rounded-xl hover:bg-green-600 hover:text-white hover:border-transparent focus:outline-none"
      >
        <FaCcAmazonPay className="mr-2" /> <span>Pay</span>
      </button>
    </>
  );
};

export default Pay;
