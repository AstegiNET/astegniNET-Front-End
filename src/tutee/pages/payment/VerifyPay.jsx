import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../../components/commonComponent/sidebar/Sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { VERIFY_PAY } from "../../../api/API";

const VerifyPay = () => {
  let tex_ref = useParams().id;
  const { tutee } = useSelector((state) => state.tuteeAuth);
  const [payDeatails, setPayDetails] = useState({});

  const handlePrint = () => {
    const printContents = document.getElementById("print-content").innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  useEffect(() => {
    const token = tutee.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const verify = async () => {
      const response = await axios.get(`${VERIFY_PAY}/${tex_ref}`, config);

      const paymentDetails = response.data.data;
      const date = new Date(paymentDetails.created_at);
      const formattedDate = date.toLocaleString();

      setPayDetails({
        name: `${paymentDetails.first_name} ${paymentDetails.last_name}`,
        email: paymentDetails.email,
        trans_ref: paymentDetails.tx_ref,
        date: formattedDate,
        amount: paymentDetails.amount,
        charge: paymentDetails.charge,
        status: paymentDetails.status,
      });
      console.log(paymentDetails);
    };

    verify();
  }, []);

  return (
    <>
      <div className="pt-50">
        <Sidebar />

        <div className="p-4">
          <div className="py-16 shadow-2xl min-h-screen rounded-lg dark:border-gray-700">
            <div className="  bg-white shadow rounded-lg w-5/6 md:w-4/6  mx-auto">
              <div className="mt-10">
                <h1 className="font-bold text-center text-2xl text-gray-900">
                  AstegniNET
                </h1>
                <p className="text-center text-sm text-gray-400 font-medium">
                  cross platform online tutorial app
                </p>

                <div className="my-5 px-3">
                  <Link
                    to="/tutee/profile/viewprofile"
                    className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 hover:text-white"
                  >
                    payment details
                  </Link>
                </div>

                <div className="w-full" id="print-content">
                  <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                    <Link
                      to="#"
                      className=" w-full flex items-center justify-between border-t border-gray-100 text-gray-600 py-4 px-6   hover:bg-gray-100 transition duration-150"
                    >
                      name
                      <span className="text-gray-500 text-xs">
                        {payDeatails.name}
                      </span>
                    </Link>

                    <Link
                      to="#"
                      className=" w-full flex items-center justify-between border-t border-gray-100 text-gray-600 py-4 px-6   hover:bg-gray-100 transition duration-150"
                    >
                      email
                      <span className="text-gray-500 text-xs">
                        {payDeatails.email}
                      </span>
                    </Link>

                    <Link
                      to="#"
                      className=" w-full flex items-center justify-between border-t border-gray-100 text-gray-600 py-4 px-6   hover:bg-gray-100 transition duration-150"
                    >
                      amount
                      <span className="text-gray-500 text-xs">
                        {payDeatails.amount} ETB
                      </span>
                    </Link>

                    <Link
                      to="#"
                      className=" w-full flex items-center justify-between border-t border-gray-100 text-gray-600 py-4 px-6   hover:bg-gray-100 transition duration-150"
                    >
                      charge
                      <span className="text-gray-500 text-xs">
                        {payDeatails.charge} ETB
                      </span>
                    </Link>

                    <Link
                      to="#"
                      className=" w-full flex items-center justify-between border-t border-gray-100 text-gray-600 py-4 px-6   hover:bg-gray-100 transition duration-150"
                    >
                      transaction ref
                      <span className="text-gray-500 text-xs">
                        {payDeatails.trans_ref}
                      </span>
                    </Link>
                    <Link
                      to="#"
                      className=" w-full flex items-center justify-between border-t border-gray-100 text-gray-600 py-4 px-6   hover:bg-gray-100 transition duration-150"
                    >
                      date
                      <span className="text-gray-500 text-xs">
                        {payDeatails.date}
                      </span>
                    </Link>
                    <Link
                      to="#"
                      className=" w-full flex items-center justify-between border-t border-gray-100 text-gray-600 py-4 px-6   hover:bg-gray-100 transition duration-150"
                    >
                      status
                      <span className="px-4 py-2 rounded-md text-md bg-green-700 text-white">
                        {payDeatails.status}
                      </span>
                    </Link>
                  </div>
                  <div className="flex items-center justify-center px-3">
                    <button
                      className="px-6 py-2 mb-3 w-full rounded-lg text-md bg-indigo-600 text-white"
                      onClick={handlePrint}
                    >
                      Print
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default VerifyPay;
