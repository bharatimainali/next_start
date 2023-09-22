import React from "react"

import Question from "./Question"
import Survey from "./Survey"

const questions = [
  {
    id: "1",
    type: "single",
    title: "What is your favorite color?",
    answers: [
      { id: "1", title: "Red", value: "red" },
      { id: "2", title: "Blue", value: "blue" },
      { id: "3", title: "Green", value: "green" },
      { id: "4", title: "Yellow", value: "yellow" },
    ],
  },
  {
    id: "1",
    type: "multiple",
    title: "What is your favorite color?",
    answers: [
      { id: "1", title: "Red", value: "red" },
      { id: "2", title: "Blue", value: "blue" },
      { id: "3", title: "Green", value: "green" },
      { id: "4", title: "Yellow", value: "yellow" },
    ],
  },
]

const App = () => {
  return (
    <div>
      <Question question="What is your favorite color?" />
      <Survey questions={questions} />
    </div>
  )
}

export default App
