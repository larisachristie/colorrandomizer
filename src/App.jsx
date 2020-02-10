import React from 'react';

class App extends React.Component {
  state = {
    // you decide what to put here
  };

  handleClick = () => {

  };

  render() {
    return (
      <main style={{ backgroundColor: '#d1001c' }}>
        <input type="text" value="#d1001c" />
        <button type="button" onClick={this.handleClick}>random</button>
      </main>
    );
  }
}

export default App;
