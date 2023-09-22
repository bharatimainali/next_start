import React, { useEffect, useState } from "react"

type Answer = { id: string; title: string; value: string }
type Question = { id: string; type: string; title: string; answers: Answer[] }

type SurveyProps = {
  questions: Question[]
}

const Survey = ({ questions }: SurveyProps) => {
  //const [answerMap, setAnswerMap] = useState(new Map())
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [storedAnswers, setStoredAnswers] = useState<Record<string, string>>({})

  const currentQuestion = questions[currentQuestionIndex]

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.target.value)
  }

  const submitAnswers = () => {
    try {
      fetch("http://localhost:3001/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(storedAnswers),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Data saved successfully:", data)
        })
        .catch((error) => {
          console.error("Failed to save data:", error)
        })
    } catch (error) {
      console.error("Failed to save data:", error)
    }
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  useEffect(() => {
    if (selectedAnswer !== null) {
      setStoredAnswers((prevStoredAnswers) => ({
        ...prevStoredAnswers,
        [currentQuestion.id]: selectedAnswer,
      }))
    }
  }, [selectedAnswer, currentQuestion.id])

  useEffect(() => {
    if (selectedAnswer !== null) {
      setStoredAnswers((prevStoredAnswers) => ({
        ...prevStoredAnswers,
        [currentQuestion.id]: selectedAnswer,
      }))
    }
  }, [selectedAnswer, currentQuestion.id, setStoredAnswers])

  return (
    <div>
      <h2>{currentQuestion.title}</h2>
      <ul>
        {currentQuestion.answers.map((answer) => (
          <li key={answer.id}>
            <input
              type={currentQuestion.type === "single" ? "radio" : "checkbox"}
              id={answer.id}
              name={currentQuestion.id}
              value={answer.value}
              onChange={handleChange}
              checked={selectedAnswer === answer.value}
            />
            <label htmlFor={answer.id}>{answer.title}</label>
          </li>
        ))}
      </ul>
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={submitAnswers}>Submit</button>
      <pre>{JSON.stringify(storedAnswers, null, 2)}</pre>
    </div>
  )
}

export default Survey
