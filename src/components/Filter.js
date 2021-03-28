import React from "react";
import './List.css';

const Filter = ({onClick}) => (
  <div>
    <div className="radio-checkbox">
      <div className="todo_checkbox">
        <label className="radio-inline" ><input type="radio" onClick={_ => onClick('ALL')} name="optradio" defaultChecked="true"/>ALL</label>
      </div>
      <div>
      <label className="radio-inline" ><input type="radio" onClick={_ => onClick('COMPLETED')} name="optradio" />COMPLETED</label>
      </div>
    </div>
  </div>
)

export default Filter;
