import React from 'react';
import PropTypes from 'prop-types';

import './Item.css';

const Item = ({ children, item }) => (
  <div className="Item">
    <div className="Item-left">
      <div className="Item-image" />
      <div className="Item-title">
        { item.name }
      </div>
      <div className="Item-description">
        { item.description }
      </div>
    </div>
    <div className="Item-right">
      <div className="Item-price">$ { item.price }</div>
      { children }
    </div>
  </div>
);

Item.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  item: PropTypes.object.isRequired
};

export default Item;
