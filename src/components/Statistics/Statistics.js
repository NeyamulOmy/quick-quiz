import './Statistics.css'
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
const Statistics = () => {
    const stats = useLoaderData();

    return (
        <div className='container'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={400} height={300} data={stats.data}>
                    <Bar dataKey="total" fill="#8884d8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;