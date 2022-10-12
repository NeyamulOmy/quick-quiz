import './Statistics.css'
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const stats = useLoaderData();
    return (
        <div>
            This is stats {stats.data.length}
        </div>
    );
};

export default Statistics;