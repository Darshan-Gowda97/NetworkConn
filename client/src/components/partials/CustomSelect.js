const CustomSelect = (props) => {
  return (
    <select
      required={props.required}
      value={props.value}
      onChange={props.onChange}
      className={
        'px-2 py-2 rounded text-sm border border-onSurface outline-none focus:outline-none focus:ring-1 focus:ring-onSurface focus:border-transparent w-full ' +
        (props.selected ? 'text-onSurface' : 'text-onBackground') +
        ' bg-' +
        props.color
      }
    >
      <option className="text-onBackground" disabled selected value="">
        {props.placeholder}
      </option>
      {props.optionsData.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
