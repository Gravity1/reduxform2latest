import * as React from 'react';
import './style.css';
import Block from './Components/Block';

export default function App() {
  return (
    <div>
      <div>
        Total Score:
      </div>
      <Block 
        index={1}
        question="How many countries is your company in ?"
        choiceOne="1 Country"
        choiceTwo="5 Countries"
        choiceThree="7 Countries"
        id="one" />



      <Block 
        index={2}
        question="How many employees do you have?"
        choiceOne="Just me"
        choiceTwo="Less than 5"
        choiceThree="12 - 24"
        id="two" />



      <Block 
        index={3}
        question="Do you have a data-center?"
        choiceOne="Yes"
        choiceTwo="No"
        choiceThree="Not commissioned but complete"
        id="three" />



    </div>
  );
}
