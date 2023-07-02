import { useEffect, useState } from "react";
import AgoraUIKit, { layout } from "agora-react-uikit";
// import { APP_ID } from "../.env/app_id";
import { FaWindowMaximize, FaWindowMinimize } from "react-icons/fa";
import logo from "../tutee/assets/images/graduate-svgrepo-com.svg";
import { GET_TUTOR } from "../api/API";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
const VideoCall = ({ role }) => {
  const [videocall, setVideocall] = useState(true);
  const [isPinned, setPinned] = useState(false);
  const [username, setUsername] = useState("");

  const loggedInTutee = useSelector((state) => state.tuteeAuth.tutee);
  const loggedInTutor = useSelector((state) => state.tutorAuth.tutor);

  const [tutor, setTutor] = useState();
  const [tutee, setTutee] = useState();

  const id = useParams().tutorid;

  const API_URL = `${GET_TUTOR}/${id}`;
  useEffect(() => {
    const getTutor = async () => {
      const response = await axios.get(API_URL);
      setTutor(response.data);
      console.log(response.data);
    };
    getTutor();
    console.log(tutor.enrolledTutee.includes(loggedInTutee));
  }, [API_URL]);

  return (
    <div>
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto px-1">
        <div className="flex flex-1 w-[calc(75vw)-100px] h-screen">
          {loggedInTutor && (
            <>
              {loggedInTutor._id === id ? (
                <div className="flex flex-col flex-1">
                  {videocall && (
                    <>
                      <button
                        className="absolute top-2 right-4 z-20 text-white rounded pinter px-1 py-2"
                        onClick={() => setPinned(!isPinned)}
                      >
                        {isPinned ? (
                          <FaWindowMaximize size={24} />
                        ) : (
                          <FaWindowMinimize size={24} />
                        )}
                      </button>

                      <div className="px-6 mb-2 absolute top-4 z-20 flex items-center transition duration-200 transform hover:scale-110">
                        {/* <img
                      src={logo}
                      alt="logo"
                      className="rounded-full w-12 h-12 shadow-md border-4 border-white"
                    /> */}
                        <div className="text-white rounded-full w-12 h-12 shadow-md border-4 border-white">
                          <svg
                            fill="currentColor"
                            stroke="currentColor"
                            width="42px"
                            height="42px"
                            viewBox="0 -5 42 42"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M32.639 17.561c0 0-4.592-4.682-10.92-4.682-6.183 0-12.295 4.682-12.295 4.682l-3.433-1.433v4.204c0.541 0.184 0.937 0.682 0.937 1.285 0 0.609-0.404 1.108-0.953 1.288l1.015 2.831h-2.996l1.024-2.855c-0.492-0.209-0.836-0.695-0.836-1.264 0-0.557 0.334-1.031 0.811-1.247v-4.659l-4.993-2.082 21.969-9.861 20.156 9.985-9.486 3.808zM21.469 15.251c6.366 0 9.486 3.37 9.486 3.37v6.99c0 0-3.245 2.621-9.985 2.621s-8.987-2.621-8.987-2.621v-6.99c0 0 3.12-3.37 9.486-3.37zM21.344 26.734c4.412 0 7.989-0.895 7.989-1.997s-3.577-1.997-7.989-1.997-7.988 0.895-7.988 1.997 3.576 1.997 7.988 1.997z"></path>
                          </svg>
                        </div>
                        <h1 className="text-white hidden md:block ml-2 font-bold">
                          አስጠኚNET
                        </h1>
                      </div>

                      <AgoraUIKit
                        styleProps={{
                          UIKitContainer: { height: "100%", width: "100%" },
                          localBtnContainer: {
                            backgroundColor: "#5724FF",
                          },
                          remoteBtnContainer: {
                            backgroundColor: "#5724FF",
                          },
                          maxViewStyles: {
                            borderColor: "#5724FF",
                            borderWidth: 1,
                          },
                        }}
                        rtcProps={{
                          appId: "87bed5f277064fbebc114bc9162b0783",
                          channel: "test",
                          token: null, // add your token if using app in secured mode
                          role: role || "host", //role
                          layout: isPinned ? layout.pin : layout.grid,
                          enableScreensharing: true,
                        }}
                        rtmProps={{
                          username: username || "user",
                          displayUsername: true,
                        }}
                        callbacks={{
                          EndCall: () => setVideocall(false),
                          ChageView: () => setPinned(!isPinned),
                        }}
                      />
                    </>
                  )}
                </div>
              ) : (
                <h1>you are not allowed </h1>
              )}
            </>
          )}
        </div>
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

export default VideoCall;
