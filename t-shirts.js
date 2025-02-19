const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

const tshirts = [
  {
    title: "Blue T-Shirt",
    image: "blue-t-shirt.jpg",
    price: 7.99,
    stock: 4,
  },
  {
    title: "Bright Purple T-Shirt",
    image: "bright-purple-t-shirt.jpg",
    price: 5.99,
    stock: 1,
  },
  {
    title: "Cobalt Blue T-Shirt",
    image: "cobalt-blue-t-shirt.jpg",
    price: 9.99,
    stock: 5,
  },
  {
    title: "Green T-Shirt",
    image: "green-t-shirt.jpg",
    price: 6.99,
    stock: 0,
  },
  {
    title: "Grey T-Shirt",
    image: "grey-t-shirt.jpg",
    price: 4.99,
    stock: 2,
  },
  {
    title: "Light Green T-Shirt",
    image: "light-green-t-shirt.jpg",
    price: 7.99,
    stock: 4,
  },
  {
    title: "Purple T-Shirt",
    image: "purple-t-shirt.jpg",
    price: 7.99,
    stock: 0,
  },
  {
    title: "Red T-Shirt",
    image: "red-t-shirt.jpg",
    price: 6.99,
    stock: 3,
  },
  {
    title: "Teal T-Shirt",
    image: "teal-t-shirt.jpg",
    price: 7.99,
    stock: 2,
  },
];

function App() {
  return (
    <div className="container">
      <h1>Available T-Shirts</h1>
      <DisplayTshirts />
    </div>
  );
}

function DisplayTshirts() {
  return (
    <div className="container-2">
      {tshirts.map((tshirt, index) => (
        <Tshirt key={index} tshirt={tshirt} />
      ))}
    </div>
  );
}

function Tshirt({ tshirt }) {
  const [quantityToBuy, setQuantityToBuy] = React.useState(1);

  const handleBuyClick = () => {
    if (quantityToBuy > 0 && quantityToBuy <= tshirt.stock) {
      console.log(`Buying ${quantityToBuy} of ${tshirt.title}`);
    }
  };

  const handleQuantityChange = (e) => {
    const value = Math.min(Math.max(e.target.value, 1), tshirt.stock);
    setQuantityToBuy(value);
  };

  const imagePath = `./images/${tshirt.image}`;

  return (
    <div className="tshirt">
      <img src={imagePath} alt={tshirt.title} />
      <h2>{tshirt.title}</h2>
      <h3>
        <em>${tshirt.price}</em>
      </h3>
      {tshirt.stock === 0 ? (
        <h3 style={{ color: "red" }}>Out of Stock</h3>
      ) : (
        <>
          <input
            type="number"
            value={quantityToBuy}
            min="1"
            max={tshirt.stock}
            onChange={handleQuantityChange}
          />
          <button onClick={handleBuyClick}>Buy</button>
          <p>Remaining Stock: {tshirt.stock}</p>
        </>
      )}
    </div>
  );
}

root.render(<App />);
