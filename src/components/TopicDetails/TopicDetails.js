import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
const TopicDetails = () => {
    const questions = useLoaderData();
    return (
        <div>
            {
                questions.data.questions.map(question => <Questions key={question.id} question={question}></Questions>)
            }
        </div>
    );
};

export default TopicDetails;