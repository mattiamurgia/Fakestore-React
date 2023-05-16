import React from "react";
import "./Card.css";
import { Product } from "../../App";
import { Button } from "../Button/Button";

import Badge from "react-bootstrap/Badge";

export type CardProps = {
  product: Product;
  setProducts: Function;
  index: number;
};

const Card = (props: CardProps) =>
{
  const changeQty = (value: number) =>
  {
    props.setProducts((prevState: Product[]) =>
    {
      prevState[props.index].qty = Math.max(
        prevState[props.index].qty + value,
        0
      );
      return [...prevState];
    });
  };

  return (
    <div className="card col-2 m-2">
      <img src={props.product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          Model: {props.product.title.slice(0, 20)}
        </h5>
        <p className="card-text">
          Description: {props.product.description.slice(0, 30)}
        </p>
        <p className="card-text">Price: {props.product.price}$</p>
        <p className="card-text">Quantity: {props.product.qty}</p>
        <p className="card-text">Category: {props.product.category}</p>
        <h6 className="card-title">
          Recommended by {props.product.rating.count} users
        </h6>
        <h5 className="card-title">Valuation {props.product.rating.rate}</h5>

        <h6>
          Totale
          <Badge bg="secondary">
            {props.product.qty * props.product.price}$
          </Badge>
        </h6>
        <Button
          onClick={() =>
          {
            changeQty(1);
          }}
          title={"+"}
        />
        <Button
          onClick={() =>
          {
            changeQty(-1);
          }}
          title={"-"}
        />
      </div>
    </div>
  );
};

export default Card;
