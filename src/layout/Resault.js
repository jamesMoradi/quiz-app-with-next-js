import {useEffect} from 'react'
import { calculateMark } from '@/functions/counterController'
import questions from '../../public/quiz.json'

const Resault = ({answerts}) => {
  useEffect(() => {
    console.log({answerts, calculateMark, questions});
  }, [])

  return (
    <div>Resault</div>
  )
}

export default Resault