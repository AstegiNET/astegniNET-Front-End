import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

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
      const paymentDetails = await axios.get(
        `http://localhost:5000/api/payment/pay/verify/${tex_ref}`,
        config
      );
      if (paymentDetails.data) {
        console.log(paymentDetails.data);
      }
    };

    verify();
  });

  return (
    <div className="pt-30">
      <div className="pt-30">VerifyPay</div>
      <div className="pt-30">VerifyPay</div>
      <div className="pt-30">VerifyPay</div>
      <div className="pt-30">VerifyPay</div>
      <div className="pt-30">VerifyPay</div>
      <div className="pt-30">VerifyPay</div>
      <div className="pt-30">VerifyPay</div>
      <div className="pt-30">VerifyPay</div>
      <div className="pt-30">VerifyPay</div>
      <div className="pt-30">VerifyPay</div>
      <div className="pt-30">VerifyPay</div>
      <div className="pt-30">VerifyPay</div>
    </div>
  );
};

export default VerifyPay;
