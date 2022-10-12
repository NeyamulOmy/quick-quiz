import './Statistics.css'
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
const Statistics = () => {
    const stats = useLoaderData();

    return (

        <BarChart width={500} height={400} data={stats.data}>
            <Bar dataKey="total" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
        </BarChart>


    );
};

export default Statistics;