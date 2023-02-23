import Link from 'next/link';
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600 pt-10'>
            Portofolio Web
          </p>
          
          <h1 className='py-4 text-black'>
            Hi, I&#39;m <span className='text-[#DF0000]'> Andini</span>
          </h1>
          <h2 className='py-2 text-black'>Software Engineering Student</h2>
          <h2 className='text-black'>at SMK Telkom Malang</h2>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-8'>
            <a
              href='https://www.linkedin.com/in/masyita-andini-larasati-192b73263/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/masyitaandinii'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <a
              href='https://www.instagram.com/masyitaandinii/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaInstagram />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
