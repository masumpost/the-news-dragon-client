import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const categoryNews = useLoaderData();
    const {id} = useParams();
    return (
        <div>
            {id && <h3>This is category page {categoryNews.length}</h3>}
            {
                categoryNews.map(news => <NewsCard
                key={news._id}
                news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;