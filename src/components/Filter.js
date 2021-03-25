import React from "react";

const Filter = ({onClick}) => (
  <div>
    <div className="radio-checkbox">
      <label className="radio-inline" ><input type="radio" onClick={_ => onClick('ALL')} name="optradio" defaultChecked="true"/>ALL</label>
      <label className="radio-inline" ><input type="radio" onClick={_ => onClick('COMPLETED')} name="optradio" />COMPLETED</label>
    </div>
  </div>
)

export default Filter;
