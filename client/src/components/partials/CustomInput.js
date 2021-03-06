const CustomInput = (props) => {
  return (
    <input
      id={props.id}
      type={props.type}
      required={props.required}
      placeholder={props.placeholder}
      name={props.name}
      value={props.value}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onClick={props.onClick}
      onChange={props.onChange}
      min={props.min}
      max={props.max}
      className="px-2 py-2 placeholder-onBackground text-onSurface bg-surface rounded text-sm border border-onSurface outline-none focus:outline-none focus:ring-1 focus:ring-onSurface focus:border-transparent w-full"
    />
  );
};

export default CustomInput;
