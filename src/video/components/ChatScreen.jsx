import PropTypes from "prop-types";
ChatsScreen.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      sender: PropTypes.string.isRequired,
      time: PropTypes.string,
    })
  ).isRequired,
};
export default function ChatsScreen({ messages }) {
  return (
    <div className="h-[calc(100vh-80px)] flex flex-col justify-between">
      <ul className="max-h-screen overflow-y-auto overflow-x-hidden">
        {messages.map((message, index) => (
          <li key={index} className="flex justify-between mt-2 py-2">
            <div className="flex gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={message.imageUrl}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {message.sender}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {message.message}
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  <time dateTime={message.time}>{message.time}</time>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex">
      <textarea
            id="about"
            name="about"
            placeholder="Write your message here "
            className="col-span-full flex-grow mt-2 block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-transparent placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        {/* <div className="col-span-full ">
          
        </div> */}
        <button className="rounded-full ml-2 bg-grey-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
