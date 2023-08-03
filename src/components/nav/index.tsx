import { Outlet } from 'react-router-dom';

export const Nav = () => {
  return (
    <div className="flex justify-between p-[16px]">
      <h2>My Portfolio</h2>
      <ul className="flex">
        <li className="px-[8px] text-white">Home</li>
        <li className="px-[8px]">About Me</li>
        <li className="px-[8px]">My Skills</li>
        <li className="px-[8px]">My Projects</li>
      </ul>
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Contact Me
      </button>
      <Outlet />
    </div>
  );
};
