import Reactotron from "reactotron-react-js";
import { reactotronRedux } from "reactotron-redux";

export const reactotron = Reactotron.configure({
  name: "CodeMatata Client",
  port: 9090,
}) // Initial Configuration
  .use(reactotronRedux()) // Applying Redux plugin
  .connect(); // Connect to local client
console.tron = Reactotron.log;
// Extend console with tron for being able to debug to Reactotron.
