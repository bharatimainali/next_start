import React from "react"

type QuestionProps = {
  question: string
}

const Question = ({ question }: QuestionProps) => {
  return <h2>{question}</h2>
}

export default Question
