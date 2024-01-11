import React from 'react';
import AboutImg from '../assets/aboutImg.png';
import Button from '../components/Button';

const About = () => {
    return (
        <div className="w-full px-10 md:px-8 lg:px-16 xl:px-40 flex flex-col gap-24 lg:flex-row bg-[#f7f8fb]">
            <div className="w-full lg:flex items-center justify-center hidden md:block">
                <img
                    src={AboutImg}
                    alt="About Us"
                    width={384}
                    height={468}
                    className="object-cover max-w-full h-auto"
                />
            </div>

            <div className="w-full flex items-center text-center justify-center lg:p-0 py-32">
                <div className="flex flex-col lg:items-start items-center gap-6 md:text-left w-[500px]">
                    <p className="text-[26px] md:text-5xl font-bold text-[#0E2368]">
                        About Us
                    </p>
                    <p className="lg:text-base text-[11px] text-[#444957] font-OpenSans font-normal lg:leading-8 leading-6">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
                    </p>
                    <div>
                        <Button
                            text="Read More"
                            textColor="white"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;