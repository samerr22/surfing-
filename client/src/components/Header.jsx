import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { signoutSuccess } from "../redux/user/userSilce";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/auth/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-[#141618] border border-black shadow-sm shadow-black">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto p-4">
        <Link to="/" className="text-xl font-bold text-white">
          DoYouKnow
        </Link>
        <ul className="flex flex-col md:flex-row gap-2 md:gap-4 mt-2 md:mt-0">
          <Link to="/" className="text-white hover:text-gray-200">
            <li>Home</li>
          </Link>
          <Link to="/table" className="text-white hover:text-gray-200">
            <li>About</li>
          </Link>
          
            <>
              <Link to="/addpost" className="text-white hover:text-gray-200">
                <li>Add</li>
              </Link>
              <Link to="/Cuser" className="text-white hover:text-gray-200">
                <li>MyPost</li>
              </Link>
            </>
         
          {currentUser ? (
            <>
              <Link to="/profile" className="flex items-center">
                <img
                  src={currentUser.profilePicture}
                  alt="profile"
                  className="h-7 w-7 rounded-full object-cover"
                />
              </Link>
              <button
                onClick={handleSignout}
                className="text-white bg-blue-900 px-3 py-1 rounded-lg text-base md:text-lg font-serif hover:bg-blue-800 transition"
              >
                LogOut
              </button>
            </>
          ) : (
            <Link to="/sign-in" className="text-white hover:text-gray-200">
              <li>Sign In</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}
