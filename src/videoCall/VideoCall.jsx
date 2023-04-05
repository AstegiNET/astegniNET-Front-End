import React from "react";
import { Link } from "react-router-dom";
import Header from "./commonComponent/Header";
import Footer from "./commonComponent/Footer";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "./commonComponent/Spinner";

import axios from "axios";
import { ZoomMtg } from "@zoomus/websdk";
// const { ZoomMtg } = require("@zoomus/websdk");
ZoomMtg.setZoomJSLib("https://source.zoom.us/2.10.1/lib", "/av");
ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();
// loads language files, also passes any error messages to the ui
ZoomMtg.i18n.load("en-US");
ZoomMtg.i18n.reload("en-US");

const VideoCall = () => {
  var authEndpoint = "http://localhost:5000/videocall";

  var sdkKey = "eBycNjbwQauq2VrMtOosfw";
  // DlMfAd3QR4WCALb6OhCGQ
  var meetingNumber = "83441337932";
  var passWord = "2qsZw8";
  var role = 1;
  var userName = "Tutor";
  var userEmail = "";

  var registrantToken = "";
  var zakToken = "";
  var leaveUrl = "http://localhost:3000/login";

  function getSignature(e) {
    e.preventDefault();

    axios
      .post(
        authEndpoint,
        {
          meetingNumber: meetingNumber,
          role: role,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      // .then((res) => res.json())
      .then((response) => {
        startMeeting(response.data.signature);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function startMeeting(signature) {
    document.getElementById("zmmtg-root").style.display = "block";

    ZoomMtg.init({
      leaveUrl: leaveUrl,
      success: (success) => {
        console.log(success);

        ZoomMtg.join({
          signature: signature,
          sdkKey: sdkKey,
          meetingNumber: meetingNumber,
          passWord: passWord,
          userName: userName,
          userEmail: userEmail,
          tk: registrantToken,
          zak: zakToken,
          success: (success) => {
            console.log(success);
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  return (
    <>
      <Header />
      {/* header added */}
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">AstegniNET</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            start a tutorial
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            astegninet ,your home for your knowledge
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#"
              className="rounded-md bg-indigo-600 px-7 py-1.5 text-2xl font-semibold text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              start
            </Link>
            {/* <button onClick={getSignature}>Join Meeting</button> */}
            <Link href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};
export default VideoCall;
