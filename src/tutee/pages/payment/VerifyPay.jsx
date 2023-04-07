import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const verifyUrl = "http://localhost:5000/api/payment/pay/verify";

const VerifyPay = () => {
  let tex_ref = useParams().id;
  const { tutee } = useSelector((state) => state.tuteeAuth);

  useEffect(() => {
    const token = tutee.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const verify = async () => {
      const verifyURL = `${verifyUrl}/${tex_ref}`;
      const paymentDetails = await axios.get(verifyURL, config);
      if (paymentDetails.data) {
        console.log(paymentDetails.data);
      }
    };

    verify();
  });

  return <div>VerifyPay</div>;
};

export default VerifyPay;
