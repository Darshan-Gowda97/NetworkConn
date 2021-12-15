const CustomSelect = (props) => {
  return (
    <select
      required={props.required}
      value={props.value}
      name={props.name}
      onChange={props.onChange}
      className={
        'px-2 py-2 rounded placeholder-onBackground text-sm border border-onSurface outline-none focus:outline-none focus:ring-1 focus:ring-surface focus:border-transparent w-full ' +
        (props.selected ? 'text-onSurface' : 'text-onBackground') +
        ' bg-' +
        props.color
      }
    >
      <option
        className="text-onBackground placeholder-surface"
        disabled
        selected
        value=""
      >
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
