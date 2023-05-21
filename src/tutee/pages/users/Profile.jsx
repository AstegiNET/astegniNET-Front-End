import React from "react";
import Sidebar from "../../components/commonComponent/Sidebar";
export default function Profile() {
  return (
    <div className="pt-50">
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="py-16 shadow-2xl min-h-screen rounded-lg dark:border-gray-700"></div>
      </div>
    </div>
  );
}
