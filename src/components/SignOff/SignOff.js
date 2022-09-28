import React from 'react'
import {animals, adjectives} from "../../library/"

const SignOff = () => {

  const randomWordFromArray = (array) => {
    let number = (Math.ceil(Math.random() * (0, array.length - 1)))
    return array.find((item, index) => index === number)
  }

  return (
    // <div>You are, as always, a dilapidated muskrat.</div>
    <p>You are, as always, a {randomWordFromArray(adjectives)} {randomWordFromArray(animals)}.</p>
  )
}

export default SignOff