import React from 'react';
import Banner from '../Banner/Banner';
import Show from '../Show/Show';
import Header from '../Header/Header';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Show></Show>
            <Review></Review>
        </div>
    );
};

export default Home;