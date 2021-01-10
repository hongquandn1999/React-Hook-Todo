import React, { useState } from "react";
import "./TodoForm.css";
function TodoForm(props) {
  const { onSubmitItem } = props;
  const [currentValue, setCurrentValule] = useState("");
  function handleChangeValue(e) {
    const valueChanged = e.target.value;
    setCurrentValule(valueChanged);
  }
  function noRefreshSubmit(e) {
    e.preventDefault();
    if (!onSubmitItem) return;
    const currentValueChanged = {
      name: currentValue
    };
    onSubmitItem(currentValueChanged);
    setCurrentValule("");
  }
  return (
    <div className="container">
      <div className="input-focus-effect">
        <form onSubmit={noRefreshSubmit}>
          <input
            type="text"
            value={currentValue}
            onChange={handleChangeValue}
          />
          <label>Input todo here ...</label>
        </form>
      </div>
    </div>
  );
}

export default TodoForm;
