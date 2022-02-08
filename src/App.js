import './App.css';
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter,
      inc: 'INC',
      dec: 'DEC',
      rnd: 'RND',
      reset: 'RESET',   
    }
  }
  
  incCounter = () => {
    this.setState(() => ({
      counter: this.state.counter + 1
    }))
  }
  
  decCounter = () => {
    this.setState( () => ({
      counter: this.state.counter - 1
    }))
  }

  rndCounter = () => {
    this.setState({
      counter: +(Math.random() * (50 - -50) + -50).toFixed(0)
    })
  }

  resetCounter = () => {
    this.setState( () => ({
      counter: 0
    }))
  }
  
  // Используйте только стрелочную форму методов
  // Почему? Подробный ответ будет в следующем уроке
  
  render() {
    return (
      <div class="app">
        <div class="counter">{this.state.counter}</div>
        <div class="controls">
          <button onClick={this.incCounter}>{this.state.inc}</button>
          <button onClick={this.decCounter}>{this.state.dec}</button>
          <button onClick={this.rndCounter}>{this.state.rnd}</button>
          <button onClick={this.resetCounter}>{this.state.reset}</button>
        </div>
      </div>
    )
  }
}

export default App;
