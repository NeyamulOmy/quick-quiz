import React from 'react';
import './Questions.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';


const Questions = ({ question }) => {
    const notify = (option, ans) => {
        let msg = '';
        if (ans === option) {
            msg = 'Correct!';
        }
        else {
            msg = 'Wrong!';
        }
        toast(msg, {
            position: toast.POSITION.TOP_CENTER,

        })
    }
    const correctAns = (correctAns) => {
        toast(`Correct answer is: ${correctAns}`, {
            position: toast.POSITION.TOP_CENTER
        })
    }
    let qs = question.question;
    qs = qs.replace('<p>', '');
    qs = qs.replace('</p>', '');
    qs = qs.replace(/&nbsp;/g, ' ');
    const options = question.options;

    return (
        <div className='question left-align'>

            <h2>Q: {qs}</h2>
            <h4>Options:</h4>
            <div className='right-align'><Button variant='light' onClick={() => { correctAns(question.correctAnswer) }}><FontAwesomeIcon icon={faEye} /></Button></div>

            <div className='left-align f20px grid'>
                {options.map(option => <div><input onClick={() => { notify(option, question.correctAnswer) }} type="radio" id={option} name={question.id} value={option} />
                    <label for="html">{option}</label></div>)}

            </div>

        </div>

    );
};

export default Questions;