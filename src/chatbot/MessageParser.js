class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      console.log(message);
      const lowercase = message.toLowerCase();
  
      if (lowercase.includes("hello")|| lowercase.includes("hi")|| lowercase.includes("hey")|| lowercase.includes("howdy")) {
        this.actionProvider.greet();
      }
  
      if (lowercase.includes("view") || lowercase.includes("course")) {
        this.actionProvider.viewCourses();
      }

      if (lowercase.includes("dashboard") || lowercase.includes("profile") || lowercase.includes("check")) {
        this.actionProvider.checkProgress();
      }

      if (lowercase.includes("other") || lowercase.includes("js")) {
        this.actionProvider.other();
      }

    }
  }
  
  export default MessageParser;
  