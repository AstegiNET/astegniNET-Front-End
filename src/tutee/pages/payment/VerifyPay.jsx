import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const VerifyPay = () => {
  let tex_ref = useParams().id;
  const URL = `http://localhost:5000/api/payment/pay/verify/${tex_ref}`;
  const { tutee } = useSelector((state) => state.tuteeAuth);

  useEffect(() => {
    verify();
  });

  const token = tutee.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const verify = async () => {
    const paymentDetails = await axios.get(URL, config);
    if (paymentDetails.data) {
      console.log(paymentDetails.data);
    }
  };

  return <div>VerifyPay</div>;
};

export default VerifyPay;
