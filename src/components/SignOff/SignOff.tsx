import { useState } from 'react'
import {animals, adjectives} from "../../library"

const getRandom = (arr: string) => arr[Math.floor(Math.random() * arr.length)];

const formatWithArticle = (word: string) => /^[aeiou]/i.test(word) ? `an ${word}` : `a ${word}`;

function createSignOff() {
  const adj = getRandom(adjectives);
  const animal = getRandom(animals);
  return `You are, as always, ${formatWithArticle(adj)} ${animal}.`;
}

function getNextSignOff(previous: string) {
  if (!adjectives.length || !animals.length) return previous;

  let next = createSignOff();
  let attempts = 0;
  const maxAttempts = 10;

  while (next === previous && attempts < maxAttempts) {
    next = createSignOff();
    attempts += 1;
  }

  return next;
}

const SignOff = () => {
  const [signOff, setSignOff] = useState(() => createSignOff());
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      if (!navigator.clipboard) {
        throw new Error("Clipboard API not available");
      }

      await navigator.clipboard.writeText(signOff);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1200);
    } catch {
      // Fallback if clipboard API is not supported
      alert("Could not copy automatically — please copy it manually.");
    }
  }

  function handleNew() {
    setSignOff((prev) => getNextSignOff(prev));
    setCopied(false);
  }

  return (
    <section className="signoff">
      <p className="signoff__text" aria-live="polite">
        {signOff}
      </p>

      <div className="signoff__controls">
        <button className="signoff__button" onClick={handleNew}>
          Another one
        </button>
        <button
          className="signoff__button signoff__button--secondary"
          onClick={handleCopy}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </section>
  );
};



export default SignOff