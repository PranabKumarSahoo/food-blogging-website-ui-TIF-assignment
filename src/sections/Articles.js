import React, { useState } from 'react';
import ArticleCard from '../components/ArticleCard';
import articlesData from '../data/articlesData';
import Button from '../components/Button';

const CardsPerPage = 3;

const Articles = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (newPage) => {
        const totalPages = Math.ceil(articlesData.length / CardsPerPage);
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    let totalPages;

    if (window.innerWidth > 414) {
        totalPages = Math.ceil(articlesData.length / CardsPerPage);
    } else {
        totalPages = 1;
    }


    return (
        <div className="w-full lg:px-40 px-0 lg:py-0 py-28  min-h-screen flex flex-col justify-center items-center">
            <div
                className="w-full max-w-screen-xl flex flex-col overflow-hidden relative"
            >
                <h2 className="text-5xl lg:text-start text-center font-OpenSans font-semibold text-[#0E2368] mb-10">Latest Articles</h2>
                <div
                    className="flex lg:flex-row flex-col justify-center items-center w-full transition-transform duration-500 transform"
                    style={{
                        transform: `translateX(-${(currentPage - 1) * (100 / CardsPerPage)}%)`,
                        width: `${totalPages * 100}%`,
                        gap: "45px"
                    }}
                >
                    {
                        articlesData.map((article, index) => (
                            <ArticleCard
                            key={index}
                                title={article.title}
                                image={article.image}
                                description={article.description}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="flex items-center justify-center mt-8">
                <Button
                    text="<"
                    backgroundColor="transparent"
                    textColor="black"
                    borderColor="black"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                />
                <span className="mx-4 text-lg font-semibold">
                    {currentPage}/{totalPages}
                </span>
                <Button
                    text=">"
                    backgroundColor="transparent"
                    textColor="black"
                    borderColor="black"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                />
            </div>
        </div>
    );
};

export default Articles;