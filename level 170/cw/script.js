useEffect(() => {
  console.log("refresh");
}, []);






useEffect(() => {
  const click = () => alert("click");

  addEventListener("click", click);

  return () => removeEventListener("click", click);
}, []);