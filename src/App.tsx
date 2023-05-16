import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Container from "./components/Container/Container";
import Badge from "react-bootstrap/Badge";

export type Product = {
  model: string;
  description: string;
  qty: number;
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: Rating;
};

export type Rating = { rate: number; count: number };

function App()
{
  const [products, setProducts] = useState<Product[]>([]);

  const [price, setPrice] = useState(0);

  useEffect(() =>
  {
    const totalPrice = products.reduce((acc, item) =>
    {
      return acc + item.price * item.qty;
    }, 0);
    setPrice(totalPrice);
  }, [products]);

  useEffect(() =>
  {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) =>
        setProducts(data.map((item: Product) => ({ ...item, qty: 0 })))
      );
  }, []);

  return (
    <div className="App container">
      <h1>
        <Badge bg="secondary">Totale {price.toString()}</Badge>
      </h1>
      <Container className="row">
        {products.map((product, index) => (
          <Card product={product} index={index} setProducts={setProducts} />
        ))}
      </Container>
    </div>
  );
}

export default App;
