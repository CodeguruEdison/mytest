import React, { useState } from 'react';

export const DisplayText = () => {
  const [txt, setTxt] = useState('');
  const [msg, setMsg] = useState('');
  const onChangeTxt = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTxt(e.target.value);
  };
  const onClickShowMsg = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setMsg(`Welcome to React Testing ${txt}`);
  };
  return (
    <form>
      <div>
        <label>Enter your name</label>
      </div>
      <div>
        <input
          data-testid="user-input"
          value={txt}
          onChange={onChangeTxt}
        ></input>
      </div>
      <div>
        <button data-testid="input-submit" onClick={onClickShowMsg}>
          Show
        </button>
      </div>
      <div>
        <label data-testid="final-msg">{msg}</label>
      </div>
      <div> this is just test entry</div>
    </form>
  );
};
