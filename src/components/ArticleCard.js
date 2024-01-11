import React from 'react';
import Button from '../components/Button';

const ArticleCard = ({ title, image, description }) => {
    return (
        <div className="bg-white border-2 border-[#93a2d361] p-6 rounded-[21px] lg:h-[554px] lg:w-[381px] w-[271px] h-[450px]">
            <img src={image} alt="Article" className="w-full max-h-64 object-cover rounded-[21px] h-1/3 md:h-64" />
            <div className="flex flex-col lg:items-start items-center gap-[27px] mt-4">
                <h3 className="lg:text-lg text-base font-bold font-poppins text-[#0E2368]">{title}</h3>
                <p className="lg:text-base text-sm lg:text-start text-center lg:leading-7 leading-6 font-OpenSans font-normal text-[#444957]">{description}</p>
                <div>
                    <Button
                        text="Read More"
                        textColor="black"
                        backgroundColor="transparent"
                        borderColor="black"
                    />
                </div>
            </div>
        </div>
    );
}

export default ArticleCard;