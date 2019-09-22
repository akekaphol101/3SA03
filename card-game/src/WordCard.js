import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';  //update

const prepareStateFromWord = (given_word) => { 
    let word = given_word.toUpperCase() 
    let chars = _.shuffle(Array.from(word)) 
    return { 
        word,       
        chars,       
        attempt: 1,       
        guess: [],       
        completed: false     
    } 
} 

export default class WordCard extends Component{
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
    activationHandler = (c) => {
        let guess = [...this.state.guess, c.toUpperCase()]
        this.setState({guess})
        console.log(guess.join('').toString())
        document.getElementById('input').innerHTML = `${guess.join('').toString()}`
        if(guess.length == this.state.chars.length){
            console.log(`${guess.join('').toString()} ${this.state.chars.join('').toString()}`)
            if(guess.join('').toString() == this.state.chars.join('').toString()){
                   this.setState({guess: [], completed: true})
                   document.getElementById('result').innerHTML = `Pass ` 
            }
            else{
                
                    setTimeout(() =>  window.location.reload(false),2000) 
            }
        }
    }
    
    render(){
        return (
            <div>
                { Array.from(this.props.value).map((c,i)=> <CharacterCard value = {c} key={i}/>)}
            </div>
        );
    }
}