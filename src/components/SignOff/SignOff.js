import React from 'react'
import {animals, adjectives} from "../../library/"

const randomWordFromArray = (array) => {
  let number = (Math.ceil(Math.random() * (0, array.length - 1)))
  return array.find((item, index) => index === number)
}

const correctArticleAndAdjective = (array) => {
  //get a word and determin if it should be preceeded by "a" or "an"
  let word = randomWordFromArray(array)
  let vowels = ["a","e","i","o","u"]
  if (vowels.includes(word[0])){
    return `an ${word}`
  } else {
    return `a ${word}`
  }
}

const SignOff = () => {
  return (
    // <div>You are, as always, a dilapidated muskrat.</div>
    <p>You are, as always, {correctArticleAndAdjective(adjectives)} {randomWordFromArray(animals)}.</p>
  )
}

export default SignOff