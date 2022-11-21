import * as React from 'react';
import './blockStyle.css';

// Different props will be passed for every different component rendered
export default function Block(props) {
  return (
    <div>
      <form>
        {props.index}.{props.question}
        <br />
        <input type="radio" id={props.id} name="" value="HTML " />
        <label>
          1.{props.choiceOne}
          <br />
        </label>
        <input type="radio" id={props.id} name="" value="HTML " />
        <label>
          2.{props.choiceTwo}
          <br />
        </label>
        <input type="radio" id={props.id} name="" value="HTML " />
        <label>
          3.{props.choiceThree}
          <br />
          <br />
          <br />
        </label>
      </form>
    </div>
  );
}
