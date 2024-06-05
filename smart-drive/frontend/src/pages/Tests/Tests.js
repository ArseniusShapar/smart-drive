import { React, useState, useEffect } from 'react';
import { useUser } from '../../UserContext';
import GeneralHeader from '../../components/GeneralComponents/GeneralComponents';
import Footer from '../../components/Footer/Footer';
import Timer from '../../components/Timer/Timer';
import Question from '../../components/Question/Question';
import QuestionBar from '../../components/QuestionBar/QuestionBar';
import TestResult from '../../components/TestResult/TestResult';
import './Tests.css';


export default function Tests() {
  const userContext = useUser();
  const [index, setIndex] = useState(1);
  const [answers, setAnswers] = useState([undefined]);
  const [questions, setQuestions] = useState([0]);
  const [loading, setLoading] = useState(true);

  const getQuestions = async () => {
    await fetch('http://127.0.0.1:5000/api/get-random-questions/10', {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {
      setQuestions(data.questions);
      setLoading(false);
    })
    .catch(error => console.error(error));
  }

  const checkAnswer = (answer) => {
    const selectedAnswer = document.querySelector(`.question li:nth-child(${answer}) button`);
    const correctAnswer = document.querySelector(`.question li:nth-child(${questions[index - 1].correct}) button`);

    correctAnswer.style.backgroundColor = '#6cdb9b';
    correctAnswer.style.borderWidth = '0px';
    correctAnswer.style.color = 'white';

    if (answer !== questions[index - 1].correct) {
      selectedAnswer.style.backgroundColor = '#e4615d';
      selectedAnswer.style.borderWidth = '0px';
      selectedAnswer.style.color = 'white';
    }

    document.querySelectorAll('.variants > li > button').forEach((el) => el.disabled = true)
  }

  const setDefaultStyle = () => {
    for (let el of document.querySelectorAll(`.question li button`)) {
        el.style.backgroundColor = 'white';
        el.style.borderWidth = '1px';
        el.style.color = 'black';
        el.disabled = false;
      }
  }

  const paintTab = (answer) => {
    const tab = document.querySelector(`.questions-tabs li:nth-child(${index}) button`);
    if (answer !== questions[index - 1].correct) {
      tab.style.backgroundColor = '#e4615d';
      tab.style.color = 'white';
    }
    else {
      tab.style.backgroundColor = '#6cdb9b';
      tab.style.color = 'white';
    }
  }

  useEffect( () => {
    setDefaultStyle();
    if (answers[index]) {
      checkAnswer(answers[index]);
    }
  }, [index])

  useEffect( () => {
    getQuestions()
  }, [])

  const nextIndex = (_answers) => {
    for (let i = index + 1; i <= questions.length; i++) {
      if (_answers[i] === undefined) return i;
    }
      
    for (let i = 1; i < index; i++) {
      if (_answers[i] === undefined) return i;
    }
}

  const onAnswer = (answer) => {
    const _answers = [...answers];
    _answers[index] = answer;
    setAnswers(_answers);
    checkAnswer(answer);
    paintTab(answer);
    if (realLength(_answers) < questions.length) setIndex(nextIndex(_answers));
  }

  const realLength = (arr) => {
    return arr.reduce((count, el, i) => {
      return count + (el !== undefined);
  }, 0);
  }

  const isEndTest = () => {
    return realLength(answers) === questions.length;
  }
  
  if (loading) {
    return;
  }
  
  return (
    <>
    <GeneralHeader {...userContext} />
    <main>
      <Timer isStop={isEndTest()}/>
      <QuestionBar count={questions.length} onTab={setIndex} index={index}/>
      <Question question={questions[index - 1]} onAnswer={onAnswer}/>
      {
        isEndTest() &&
        <TestResult user={userContext.user} questions={questions} answers={answers} time={document.querySelector('.time').textContent} />
      }
    </main>
    <Footer />
    </> 
  )
}