const CustomButton = (props) => {
  return (
    <button
      className={
        'flex px-4  justify-center items-center rounded hover:opacity-75 gap-2  text-' +
        props.color +
        ' bg-' +
        props.bgcolor +
        ' py-' +
        props.padding
      }
      onClick={props.onClick}
      type={props.type}
    >
      {props.icon}
      {props.name}
    </button>
  );
};
export default CustomButton;
