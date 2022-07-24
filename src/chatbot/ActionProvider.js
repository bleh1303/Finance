class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet = () => {
      const message = this.createChatBotMessage("Hello there.");
      this.addMessageToState(message);
    };


    viewCourses = () => {
      const message = this.createChatBotMessage(
        "We provide a wide variety of courses",
        {
          widget: "viewCourses",
        }
      );
  
      this.addMessageToState(message);
    };

    other = () => {
      const message = this.createChatBotMessage(
        "Type your questions here ",
        {
          widget: "other",
        }
        
      );
  
      this.addMessageToState(message);
    };

    checkProgress = () => {
      const message = this.createChatBotMessage(
        "We have noted down your progress",
        {
          widget: "checkProgress",
        }
      );
  
      this.addMessageToState(message);
    };

    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;
  