import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options.jsx";
import Quiz from "../components/Quiz/Quiz.jsx";

const config = {
  botName: "FinBot",
  initialMessages: [
    createChatBotMessage(`Hi there, how may I help you?`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "viewCourses",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "View Our Courses",
            answer:
              <button>View Courses</button>,
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "checkProgress",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Check out your progress",
            answer:
              <button>View Dashboard</button>,
            id: 2,
          },
        ],
      },
    },
    {
      widgetName: "other",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "Ask us any other question",
            answer:
              <input placeholder="Ask away!"></input>,
            id: 3,
          },
        ],
      },
    },
  ],
};

export default config;