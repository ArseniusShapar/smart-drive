import React from 'react';
import './QuestionBar.css';

export default function QuestionBar({ count, onTab, index }) {
  return (
    <div className='question-bar'>
        <ul className='questions-tabs'>
            {Array.from(Array(count).keys()).map((i) =>
                <li><button onClick={() => onTab(i + 1)} disabled={i === index - 1}>{i + 1}</button></li>
              )}
        </ul>
    </div>
  )
}
