import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  //forwardRef를 쓰는 이유: ref를 두번째 인자로 보냄으로써 return문 안에 있는 모든 컴포넌트 함수에서 사용할 수 있게 됨 => MenuItemForm에서 useRef를 쓰기 위해서
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input}></input>
    </div>
  );
});

export default Input;
