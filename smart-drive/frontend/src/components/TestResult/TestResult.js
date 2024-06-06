import { React, useEffect } from 'react';
import Modal from '../Modal/Modal';
import './TestResult.css';

export default function TestResult({ user, questions, answers, time }) {

  const sendResult = async (testResult) => {
    await fetch('http://127.0.0.1:5000/api/submit-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: user.email, test_result: testResult })
      })
      .catch(error => console.log(error))
  };

  const correctCount = () => {
    return questions.reduce((count, question, index) => {
      return count + (question.correct === answers[index + 1]);
    }, 0);
  };

  const mistakeCount = () => {
    return questions.reduce((count, question, index) => {
      return count + (question.correct !== answers[index + 1]);
    }, 0);
  };

  const isPassed = () => {
    return mistakeCount() <= 2;
  };

  useEffect(() => {
    const date = new Date();
    const dateString = date.toLocaleDateString() + ' ' + date.toLocaleTimeString().slice(0, -3);
    const testResult = { date: dateString, corrects: correctCount(), mistakes: mistakeCount(), time: time, passed: isPassed() };
    sendResult(testResult);
  }, []);

  return (
    <Modal>
      <div className='test-result'>
        <img src={isPassed() ? '../img/tests/confirm.png' : '../img/tests/error.png'} alt='result' />
        <h4>Ви відповіли на {questions.length} випадкових запитань</h4>
        <p>Кількість правильних відповідей: <b>{correctCount()}</b></p>
        <p>Кількість помилок: <b>{mistakeCount()}</b></p>
        <p>Витрачений час: <b>{time}</b></p>
        <p>Результат: <b>{isPassed() ? 'Складено' : 'Не складено'}</b></p>
      </div>
    </Modal>
  );
}
