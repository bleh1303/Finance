import React, { useState } from "react";

import FlashCard from "./FlashCard";

const Quiz = (props) => {
  console.log(props);
  let [questionIndex, setQuestionIndex] = useState(0);

  const currentQuestion = props.questions[questionIndex];

  if (!currentQuestion) {
    return <p>Quiz over.</p>;
  }

  return (
    <FlashCard
      question={currentQuestion.question}
      answer={currentQuestion.answer}
    />
  );
};

export default Quiz;
