import {useEffect, useState} from 'react'
import { calculateMark } from '@/functions/counterController'
import questions from '../../public/quiz.json'

const Resault = ({answerts}) => {
  const [mark, setMark] = useState(0)

  useEffect(() => {
    setMark(calculateMark(questions, answerts))
  }, [])

  return (
    <div>{console.log(mark)}</div>
  )
}

export default Resault