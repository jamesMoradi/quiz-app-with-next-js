'use client'
import React, { useState } from 'react'
import Questions from '@/layout/Questions'

const Home = () => {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [isBegan, setIsBegan] = useState(false)

  const beginController = () => {
    if (questionNumber > 0) {
      setIsBegan(true)
    } else if (questionNumber === 0){
      setIsBegan(false)
    }

  }

  const beginHandler = () => {
    if (questionNumber > 0 && questionNumber < 10) {
      setQuestionNumber(prev => prev += 1)
    }
    beginController()
    console.log({questionNumber,isBegan});
  }

  const prevHnadler = () => {
    if (questionNumber > 0) {
      setQuestionNumber(prev => prev -= 1)
    }
    beginController
    console.log({questionNumber,isBegan});
  }

  return (
    <section>
      <div>
        <p>welcome to react.js test for begginers</p>
        <p>press the start button to begin</p>
      </div>
      {isBegan && <Questions questionNumber={questionNumber}/>}
      <div>
        <button onClick={beginHandler}>{isBegan ? 'start the test' : 'next'}</button>
        {isBegan && <button onClick={prevHnadler}>previous</button>}  
      </div>
    </section>
  )
}

export default Home