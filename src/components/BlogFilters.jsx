import React, { useEffect, useState } from 'react';

const BlogFilters = ({ pass_filters }) => {
    const blogFiltersArr = ["All", "Healthy Lifestyle", "Eye Care", "Skin & Beauty", "Men Health", "Women Health", "Covid-19", "Mental Health", "Neurology"];
    const [selectedBlogFilters, setSelectedBlogFilters] = useState([]);

    const handleFilterButtonClick = (activeFilter) => {
        setSelectedBlogFilters((prevSelectedFilters) => {
            if (prevSelectedFilters.includes(activeFilter)) {
                return prevSelectedFilters.filter((filter) => filter !== activeFilter);
            } else {
                return [...prevSelectedFilters, activeFilter];
            }
        });
    };

    useEffect(() => {
        if (typeof pass_filters === 'function') {
            pass_filters(selectedBlogFilters);
        }
    }, [selectedBlogFilters, pass_filters]);

    return (
        <section className='py-8 px-12 lg:py-8 lg:px-36'>
                
                <div className='flex py-4 border-b-2 border-lightgreyshade'>
                    <ul className='list-none flex flex-col md:flex-row gap-4 lg:gap-8'>
                        {blogFiltersArr.map((filterVal) => (
                            <li key={filterVal}>
                                <button
                                    onClick={() => handleFilterButtonClick(filterVal)}
                                    className={` text-sm py-2 ${
                                        selectedBlogFilters.includes(filterVal)
                                            ? "text-black border-b-2 border-primarycolor"
                                            : "text-black"
                                    }`}
                                >
                                    {filterVal}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
        </section>

    );
};

export default BlogFilters;