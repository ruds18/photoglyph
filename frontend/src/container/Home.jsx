import React, { useEffect, useRef, useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { client } from '../client';
import logo2 from '../assets/logo2.png';
import Pins from './Pins';
import { Sidebar, UserProfile } from '../components';
import { userQuery } from '../utils/data';
import { fetchUser } from '../utils/fetchUser';
import '../styles/overlay.css'; // Import the overlay styles

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState([]);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const userInfo = fetchUser();

  useEffect(() => {
    const query = userQuery(userInfo?.sub);
    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, []);

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, []);

  if(!user){
    navigate('/login')
  }

  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen  transaction-height  duration-75 ease-out ">
      <div className="hidden md:flex h-screen h-screen flex-initial ">
        <Sidebar user={user} />
      </div>
      <div className="flex md:hidden flex-row">
        <div className="p-2 w-full flex flex-row justify-between items-center shadow-md  ">
          <HiMenu fontSize={40} className="cursor-point" onClick={() => setToggleSidebar(true)} />
          <Link to="/">
            <img src={logo2} to="/" alt="logo" className="w-30" />
          </Link>
          <Link to={`user.profile/${user?._id}`}>
            <img src={user?.image} to="/" alt="logo" className="w-28" />
          </Link>
        </div>
        {toggleSidebar && (
          <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
            <div className="absolute w-full flex justify-end items-center p-2">
              <AiFillCloseCircle fontSize={30} className="cursor-pointer" onClick={() => setToggleSidebar(false)} />
            </div>
            {user ? <Sidebar user={user} closeToggle={setToggleSidebar} /> : null}
          </div>
        )}
      </div>
     
      <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef} >
        <Routes>
          <Route path="/user-profile/:userId" element={<UserProfile />} />
          <Route path="/*" element={user ? <Pins user={user} /> : null} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
