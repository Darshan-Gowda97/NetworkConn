const MonthBtn = (props) => {
  const moment = require('moment');
  return (
    <input
      id={props.id}
      value={props.value}
      name={props.name}
      placeholder={props.placeholder}
      required={props.required}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      type={props.type}
      className={
        'placeholder-onBackground w-full text-onSurface bg-surface rounded text-sm h-8 border border-onBackground px-2 bg-' +
        props.color
      }
    ></input>
  );
};

export default MonthBtn;
