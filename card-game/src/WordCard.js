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
    render(){
        return (
            <div>
                { Array.from(this.props.value).map((c,i)=> <CharacterCard value = {c} key={i}/>)}
            </div>
        );
    }
}