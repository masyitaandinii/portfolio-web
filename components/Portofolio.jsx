import Image from 'next/image';
import React from 'react';
import turnamenImg from '../public/assets/projects/turnamen.jpg';
import nalaImg from '../public/assets/projects/nala.jpg'
import PortofolioItem from './PortofolioItem';

const Portofolio = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#DF0000]'>
          Portofolio
        </p>
        <h2 className='py-4'>What I&apos;ve Achived</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <PortofolioItem
            title='Volleyball Tournament'
            backgroundImg={turnamenImg}
            tech='Turnamen Bola Voli SMKN 1 Ampelgading Cup II se-Jawa Timur'
          />
          <PortofolioItem
            title='Juara 1 Best Video Tiktok'
            backgroundImg={nalaImg}
            tech='LPKBB LASTARNALA'

          />
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
