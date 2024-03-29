const Header = ({ title }) => {
  return (
    <div className="my-5 px-6">
      <div className="text-gray-500 block rounded-lg  text-lg font-bold leading-6 px-6 py-3 bg-gray-100 shadow-md">
        {title}
      </div>
    </div>
  );
};

export default Header;
