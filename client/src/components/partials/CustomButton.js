const CustomButton = (props) => {
  return (
    <button
      className={
        'flex px-2  bg-primary justify-center items-center rounded hover:opacity-75 text-' +
        props.color +
        ' bg-' +
        props.bgcolor +
        ' py-' +
        props.padding
      }
      onClick={props.onClick}
      type={props.type}
    >
      {props.name}
    </button>
  );
};
export default CustomButton;
