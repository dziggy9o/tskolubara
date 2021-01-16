import {Fragment, useState} from "react";
import {convertLatinToCirilic} from './localization-convertor'

export const Search = props => {
  const [text, setText] = useState('');
  const changeState = e => {
    e.preventDefault();
    setText(convertLatinToCirilic(e.target.value));
  }
  return (
    <Fragment>
      <input onChange={event => changeState(event)}></input>
      <div>{text}</div>
    </Fragment>
  )
}
