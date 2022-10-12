import React from 'react';

const Questions = ({ question }) => {
    let qs = question.question;
    qs = qs.replace('<p>', '');
    qs = qs.replace('</p>', '');
    qs = qs.replace(/&nbsp;/g, ' ');
    const options = question.options;
    return (
        <div>

            <p>{qs}</p>
            {options.map(option => <li key={option}>{option}</li>)}
        </div>
    );
};

export default Questions;