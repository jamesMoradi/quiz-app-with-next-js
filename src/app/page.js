'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Home = () => {
  return (
    <section>
      <div>
        <p>welcome to react.js test for begginers</p>
        <p>press the start button to begin</p>
      </div>
      <div>
        <Link href='./quiz'>let's begin</Link> 
      </div>
    </section>
  )
}

export default Home