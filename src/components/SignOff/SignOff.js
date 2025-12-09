import React, { useState } from 'react'
import {animals, adjectives} from "../../library/"

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const formatWithArticle = (word) => /^[aeiou]/i.test(word) ? `an ${word}` : `a ${word}`;

function createSignOff() {
  const adj = getRandom(adjectives);
  const animal = getRandom(animals);
  return `You are, as always, ${formatWithArticle(adj)} ${animal}.`;
}

const SignOff = () => {
  const [signOff, setSignOff] = useState(createSignOff);

  return (
    <div onClick={() => setSignOff(createSignOff())} style={{ cursor: "pointer" }}>
      <p>{signOff}</p>
      <small>(click for another)</small>
    </div>
  );
};

export default SignOff