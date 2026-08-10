const [count, setCount] = useState(0);

useEffect(() => {
  someFunction();
}, [count]);

const someFunction = () => {
  alert("count changed");
};






useEffect(() => {
  const id = setInterval(() => {
    console.log(count);
  }, 120);

  return () => clearInterval(id);
}, [count]);





const [product, setProduct] = useState({
  name: "cola",
  price: 2,
  amount: 200,
});

return (
  <div>
    <h2>{product.name}</h2>
    <p>{product.price}</p>
    <p>{product.amount}</p>

    <input onChange={(e) => setProduct({...product, name: e.target.value})} />
    <input onChange={(e) => setProduct({...product, price: e.target.value})} />
    <input onChange={(e) => setProduct({...product, amount: e.target.value})} />
  </div>
);