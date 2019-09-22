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

      
 render() {
 return (
 <div>
 <WordCard value = "hello"/>
 </div>
 );
 }
}export default App;
