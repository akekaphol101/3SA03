import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';

const word = ['HOME','WORK','LAB','ADVANCE','HARD'];
let it = word[Math.floor(Math.random()*word.length)];

class App extends Component {

    constructor(){
        super();
        this.state ={requstAns : false }
      }

      newgame = () => {
        window.location.reload(false);
      }
    
      requstAns = () => {
        this.setState({
          requstAns : true
        })
      }

      getAnswer = (answer) => {
        document.getElementById('solve').innerHTML = `${answer}`
      }
    
      render() {
        return (
          <div className="App">
            <h1 id="label">My Games </h1>
            {  
              <WordCard value={it.toUpperCase()} requstAns={this.state.requstAns} getAnswer ={this.getAnswer}/>     
            }
            <h2 id="input"></h2>
            <h2 id="result"></h2>
           
          </div>
        );
      }
}export default App;
