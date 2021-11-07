import React from 'react'

export default function ScoreBoard({ score }) {
  return (
    <div className='score-board'>
      <h2>Your current score is:{score}</h2>
    </div>
  )
}
