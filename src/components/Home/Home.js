import React from 'react';
import Header from '../header/Header';
import { useLoaderData } from 'react-router-dom'
import Topic from '../Topics/Topic';
import './Home.css'

const Home = () => {
    const topics = useLoaderData();
    return (
        <div>
            <Header></Header>
            <div className='card-container'>
                {
                    topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;