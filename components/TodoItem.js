const TodoItem = (props) => {
  const clickHandler=()=>{
props.onEditHandler(props.title);
  }
  const deleteclickHandler=()=>{
    props.ondeletHandler(props.title);
  }
  return (
    <div>
      {console.log(props)}
      <input type="radio" onClick={clickHandler}/>
      <h3 style={{ display: "inline-block" }}>{props.title}</h3>
      <button onClick={deleteclickHandler}>Delete</button>
    </div>
  );
};
export default TodoItem;
