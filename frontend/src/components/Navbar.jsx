import React from 'react';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7">
      <div className="flex justify-start items-center flex-1 px-2 bg-white rounded-md border-none outline-none focus-within:shadow-sm">
        <IoMdSearch fontSize={21} />
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          onFocus={() => navigate('/search')}
          className="p-2 w-full bg-white outline-none"
          placeholder="Search..."
        />
      </div>
      <div className="flex gap-3">
        <Link to={`user-profile/${user?._id}`} className="hidden md:block">
          <img src={user.image} alt="User" className="w-14  rounded-lg" />
        </Link>
        <Link
         to='create-pin'
         className="bg-black text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center "
        >
         <IoMdAdd/>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
