import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <a href="/auth/facebook">facebook</a>
      </div>
    );
  }
}

export default App;
// add browserrouter(provides the history object)
// and set up routes that renders components