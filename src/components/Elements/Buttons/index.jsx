const Button = (props) => {
  return (
    <button className={`${props.classname}  text-gray-800 font-bold py-2 px-4 rounded`} type="submit">
      {props.children}
    </button>
  );
};

export default Button;
