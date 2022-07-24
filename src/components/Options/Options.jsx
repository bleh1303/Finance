import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "View Courses",
      handler: props.actionProvider.viewCourses,
      id: 1,
    },
    {
      text: "Check Progress",
      handler: props.actionProvider.checkProgress,
      id: 2,
    },
    {
      text: "Other Questions",
      handler: props.actionProvider.other,
      id: 3,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
