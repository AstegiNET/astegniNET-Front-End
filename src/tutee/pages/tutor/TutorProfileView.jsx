import React from 'react';

const UserProfile = () => {
  return (
    <div className="flex items-center">
      <div className="w-1/4">
        {/* <Avatar name="Fikir" src="" size="2xl" /> */}
      </div>
      <div className="w-3/4 ml-8">
        <h2 className="text-2xl font-medium">Fikireab</h2>
        <p className="text-gray-500 mb-2">Mathematics, Physics, Chemistry, and other relating subjects</p>
        <div className="flex items-center mb-4">
          <p className="mr-4">
            <strong>{4.5}</strong> out of 5 stars
          </p>
          <p>
            <strong>2000ETB</strong> /month
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
