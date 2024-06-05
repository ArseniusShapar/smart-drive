import React from 'react';
import './Question.css';

export default function Question({ question, onAnswer}) {
  return (
    <div className={`question`}>
        <h3 className='question-title'>{question.title}</h3>
        <div className="container">
          <div className='all-variants'>
            <ul className='variants'>
              {question.variants.map((v, i) =>
                <li><button onClick={() => onAnswer(i + 1)}>{v}</button></li>
              )}
            </ul>
          </div>
          <img src={question.image ? `data:image/png;base64,${question.image}` : '../img/tests/no_image.png'} className='q-image'/>
        </div>
      </div>
  )
}
