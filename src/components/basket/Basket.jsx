import React, { useState } from "react";
import Divider from "../divider/Divider";
import basketBtn from "../../assets/Icons/basketBtn.png";

const Basket = ({ basket }) => {
  const [activeBasket, setActive] = useState(false);
  const totalCount = basket.reduce((a, b) => a + b.count, 0);
  const totalPrice = basket.reduce((a, b) => a + b.sum, 0);
  if (!activeBasket) {
    return (
      <div className="basket">
        <div className="basket__title">Корзина</div>
        <div className="basket__btn">
          <button className="button_nobb" onClick={() => setActive(true)}>
            <img src={basketBtn} alt="basketBtn" />
          </button>
        </div>
        <div className="basket__count">
          <text>Количество услуг в корзине</text>
          <num>{totalCount}</num>
        </div>
        <div className="basket__sum">
          <text> Сумма заказа </text>
          <num>{totalPrice}</num>
        </div>
      </div>
    );
  } else {
    return (
      <div className="basket basket_active">
        <div className="basket__title">Корзина</div>
        <div className="basket__btn_active">
          <button className="button_nobb" onClick={() => setActive(false)}>
            <img src={basketBtn} alt="basketBtn" />
          </button>
        </div>
        <div className="basket__count">
          <text>Количество услуг в корзине</text>
          <num>{totalCount}</num>
        </div>
        <div className="basket__sum">
          <text> Сумма заказа </text>
          <num>{totalPrice}</num>
        </div>
        {basket.map((basket) => (
          <BasketContent basket={basket} />
        ))}
        <button className="button button_center">Оформить заказ</button>
      </div>
    );
  }
};

const BasketContent = ({ basket }) => {
  const [count, setCount] = useState(basket.count);
  let totalSum = basket.sum * count;
  return (
    <div className="basket__wrapper">
      <div className="basket__category">{basket.category}</div>
      <Divider />
      <div className="basket__descr">
        <div className="basket__product">{basket.name}</div>
        <div className="basket__product-count">
          <num>{totalSum}</num>
          <div className="basket__button-block">
            <button className="button_nobb" onClick={() => setCount(count + 1)}>
              +
            </button>
            <num>{count}</num>
            <button className="button_nobb" onClick={() => setCount(count - 1)}>
              -
            </button>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Basket;
