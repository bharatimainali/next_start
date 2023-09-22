import React from "react"

type AnswerListProps = {
  children: React.ReactNode
  activeClass?: string
}

const AnswerList = ({ children, activeClass }: AnswerListProps) => {
  return (
    <ul>
      {React.Children.map(children, (child, index) => (
        <li className={index === 0 ? activeClass : undefined}>{child}</li>
      ))}
    </ul>
  )
}

export default AnswerList
