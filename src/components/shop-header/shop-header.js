import React from 'react';
import { connect } from 'react-redux';
import './shop-header.css';
import { Link } from 'react-router-dom';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <Link to="/">
      <div className="logo text-dark" href="#">ReStore</div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-basket" />
          {numItems} items (<i className="fa fa-usd" />{total})
        </div>
      </Link>
    </header>
  )
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal }}) => {
  return {
    numItems: cartItems.reduce(((acc, item) => acc + item.count), 0),
    total: orderTotal
  };
};

export default connect(mapStateToProps)(ShopHeader);
