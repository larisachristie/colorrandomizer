import React from 'react';

class App extends React.Component {
  state = {
    color: {
      red: 0,
      green: 0,
      blue: 0,
    },
  };
  handleClick = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    this.setState({ color: { red: `${r}`, green: `${g}`, blue: `${b}`} });
  };
  rangeInput = (e) => {
    const rangeValue = e.target.value;
    const rangeId = e.target.id;
    if (rangeId === "red") {
      this.setState(prev => {
        return { color: { red: `${rangeValue}`, green: `${prev.color.green}`, blue: `${prev.color.blue}` } }
      });
    } else if (rangeId === "green") {
      this.setState(prev => {
        return { color: { red: `${prev.color.red}`, green: `${rangeValue}`, blue: `${prev.color.blue}` } }
      });
    } else {
      this.setState(prev => {
        return { color: { red: `${prev.color.red}`, green: `${prev.color.green}`, blue: `${rangeValue}` } }
      });
    }
  };
  handleKeyDown = (event) => {
    const keyboardKey = event.key;
    const inputId = event.target.id;
    const inputValue = event.target.value;
    if (/[0-9]/.test(keyboardKey)) {
      if (inputValue.length < 3) {
        if (inputId === "enterRed") {
          this.setState(prev => {
            return { color: { red: `${prev.color.red + keyboardKey}`, green: `${prev.color.green}`, blue: `${prev.color.blue}` }}
          })
        } else if (inputId === "enterGreen") {
          this.setState(prev => {
            return { color: { red: `${prev.color.red}`, green: `${prev.color.green + keyboardKey}`, blue: `${prev.color.blue}` }}
          })
        } else if (inputId === "enterBlue") {
          this.setState(prev => {
            return { color: { red: `${prev.color.red}`, green: `${prev.color.green}`, blue: `${prev.color.blue + keyboardKey}` }}
          })
        }
      }
    } else if (keyboardKey === "Backspace") {
        switch (inputId) {
          case "enterRed":
            return this.setState(prev => { return { color: { red: prev.color.red.slice(0, -1), green: prev.color.green, blue: prev.color.blue, }}});
          case "enterGreen":
            return this.setState(prev => { return { color: { red: prev.color.red, green: prev.color.green.slice(0, -1), blue: prev.color.blue, }}});
          case "enterBlue":
            return this.setState(prev => { return { color: { red: prev.color.red, green: prev.color.green, blue: prev.color.blue.slice(0, -1), }}});
          default:
            return null;
        }
      }
  };
  render() {
    let rgb = `rgb(${this.state.color.red},${this.state.color.green},${this.state.color.blue})`;
    return (
      <main style={{ backgroundColor: rgb }}>
        <form>
          <div>
            <input
            type="text"
            key="enterRed"
            id="enterRed"
            value={ this.state.color.red }
            onKeyDown={ this.handleKeyDown }
            onChange={() => {}}/>

            <input
            type="text"
            key="enterGreen"
            id="enterGreen"
            value={ this.state.color.green }
            onKeyDown={ this.handleKeyDown }
            onChange={() => {}}/>
            
            <input
            type="text"
            key="enterBlue"
            id="enterBlue"
            value={ this.state.color.blue }
            onKeyDown={ this.handleKeyDown }
            onChange={() => {}}/>
          </div>

          <button
          type="button"
          onClick={ this.handleClick }>random</button>
          
          <div>
            <input
            type="range"
            value={ this.state.color.red }
            id="red"
            min="0"
            max="255"
            onChange={ this.rangeInput } />

            <input
            type="range"
            value={ this.state.color.green }
            id="green"
            min="0"
            max="255"
            onChange={ this.rangeInput } />

            <input
            type="range"
            value={ this.state.color.blue }
            id="blue"
            min="0"
            max="255"
            onChange={ this.rangeInput } />
          </div>
        </form>
      </main>
    );
  }
}

export default App;
