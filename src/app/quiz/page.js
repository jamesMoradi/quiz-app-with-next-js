'use client'
import React, { useEffect, useState } from 'react'
import data from '../../../public/quiz.json'
import {controller} from '../../functions/counterController'
import Resault from '@/layout/Resault'

const Questions = () => {
    const [questionNum, setQuestionNum] = useState(1)
    const [question,setQuestion] = useState({})
    const [answert, setAnswert] = useState('')
    const [isDone, setIsDone] = useState(false)
    const [answerts, setAnswerts] = useState([])

    useEffect(() => {
        const questionSelected = data.find(eachQueastion => +eachQueastion.id === questionNum)
        setQuestion(questionSelected)
        console.log(answerts);
    }, [questionNum])

    const submitHandler = () => {
        nextHandler()
        setIsDone(true)
    }

    const nextHandler = () => {
        controller(questionNum, setQuestionNum)
        setAnswerts(prev => [...prev, {id : question.id, answert}])
    }

  return (
    <div>
        <h3>question numer {+question.id}</h3>
        <h2>{question.question}</h2>
        <ul>
            {question.options && question.options.map((option, i) => {
                return (<li key={i}>
                    <div>
                        <input 
                        type="radio" 
                        id={i} 
                        name='answert' 
                        value={option}
                        onChange={() => setAnswert(option)} />
                        <label htmlFor={i}>{option}</label>
                    </div>
                </li>)
            })}
        </ul>
        <div>   
            {questionNum < 10 && <button onClick={nextHandler}>next</button>}
            {questionNum === 10 && <button onClick={submitHandler}>finish</button>}
        </div>
        {isDone && <Resault answerts={answerts}/>}
    </div>
  )
}

export default Questions