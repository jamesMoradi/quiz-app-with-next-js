import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <section>
      <p>welcome to react.js test for begginers</p>
      <p>press the start button to begin</p>
      <button>
        <Link href='./quiz/'>start the test</Link>
      </button>
    </section>
  )
}

export default Home