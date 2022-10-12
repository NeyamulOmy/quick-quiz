import React from 'react';
import './Questions.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Questions = ({ question }) => {
    const notify = (option, ans) => {
        if (ans === option) {
            toast('Correct!', {
                position: toast.POSITION.TOP_CENTER
            })
        }
        else {
            toast('Wrong', {
                position: toast.POSITION.TOP_CENTER
            })
        }
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
            <div className='left-align f20px grid'>
                {options.map(option => <div><input onClick={() => { notify(option, question.correctAnswer) }} type="radio" id={option} name={question.id} value={option} />
                    <label for="html">{option}</label></div>)}
                <ToastContainer />
            </div>

        </div>
    );
};

export default Questions;