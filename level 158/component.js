function Child(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>

      <div>
        {props.children}
      </div>
    </div>
  );
}