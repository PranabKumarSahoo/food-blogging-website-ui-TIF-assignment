import React from 'react';
import HomeImg from '../assets/homeImg.png';
import Button from '../components/Button';

const Home = () => {
    return (
        <>
            <div className='w-full p-0 lg:px-40 flex flex-col-reverse lg:flex-row justify-center lg:h-screen gap-5'>
                <div className="flex flex-col justify-center lg:items-start items-center w-full lg:p-0 p-10 lg:gap-10 gap-5">
                    <p className="lg:text-6xl text-4xl text-[#0E2368] lg:text-start text-center lg:leading-[69px] font-bold">
                        <span className="inline-block">Discover the</span>
                        <br />
                        <span className="text-[#E23744] inline-block mt-3">Best</span> Food
                        <br />
                        <span className="inline-block mt-3">and Drinks</span>
                    </p>
                    <p className="flex flex-col gap-1 text-[#444957] lg:text-lg text-sm lg:text-start text-center leading-[27px]">
                        <span>Naturally made Healthcare Products for the</span>
                        <span>better care & support of your body.</span>
                    </p>
                    <Button
                        text='Explore now'
                        backgroundColor='[#E23744]'
                        textColor='white'
                    />
                </div>

                <div className="flex justify-end lg:absolute -top-1 right-0 -z-10">
                    <img
                        src={HomeImg}
                        alt="Banner"
                        width={735}
                        height={804}
                        className="object-contain relative z-10"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 752 839" fill="none" className="absolute top-0 right-0 z-10 lg:h-[839px] lg:w-[752px] h-[426px]">
                        <path d="M111.512 36.3371C40.9348 45.1719 7.76349 15.7936 0 0L752 1.42498V835.396C484.285 867.417 547.679 676.51 560.03 640.173C572.381 603.836 657.779 365.152 547.679 190.591C437.579 16.031 199.733 25.2934 111.512 36.3371Z" fill="#E23744" />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Home;
