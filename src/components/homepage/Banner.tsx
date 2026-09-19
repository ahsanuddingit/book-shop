import React from 'react';
import Image from 'next/image'
import bannerImg from '@/assets/banner.png'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col gap-10 lg:flex-row-reverse bg-gray-500/10 px-50 py-25 rounded-2xl">
    <Image
      alt="Banner Image"
      src={bannerImg}
      className="max-w-sm rounded-lg"
    />
    <div>
      <h1 className="text-5xl text-[#131313] font-bold mb-10 ">Books to freshen up <br /> your bookshelf</h1>
      
      <button className="btn btn-primary border-none font-bold bg-[#23BE0A]">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;