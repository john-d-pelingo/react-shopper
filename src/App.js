import React, { Component } from 'react';

import Nav from './components/Nav';
import ItemPage from './components/ItemPage';
import CartPage from './components/CartPage';
import './App.css';
import items from './static-data';

class App extends Component {
  state = {
    activeTab: 0,
    cart: []
  };

  handleAddToCart = item => {
    this.setState({
      cart: [...this.state.cart, item.id]
    });
  };

  handleRemoveOne = item => {
    const index = this.state.cart.indexOf(item.id);
    this.setState({
      cart: [
        ...this.state.cart.slice(0, index),
        ...this.state.cart.slice(index + 1)
      ]
    });
  };

  handleTabChange = index => {
    this.setState({
      activeTab: index
    });
  };

  renderContent() {
    switch (this.state.activeTab) {
      case 0:
        return <ItemPage items={ items } onAddToCart={ this.handleAddToCart } />;
      case 1:
        return this.renderCart();
      default:
        return null;
    }
  }

  renderCart() {
    // eslint-disable-next-line no-shadow
    const itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
      // eslint-disable-next-line no-param-reassign
      itemCounts[itemId] = itemCounts[itemId] || 0; itemCounts[itemId]++;
      return itemCounts;
    }, {});

    const cartItems = Object.keys(itemCounts).map(itemId => {
      const foundItem = items.find(item => item.id === parseInt(itemId, 10));

      return {
        ...foundItem,
        count: itemCounts[itemId]
      };
    });

    return (
      <CartPage
        items={ cartItems }
        onAddOne={ this.handleAddToCart }
        onRemoveOne={ this.handleRemoveOne } />
    );
  }

  render() {
    const { activeTab } = this.state;

    return (
      <div className="App">
        <div> { this.state.cart.length } items</div>
        <Nav activeTab={ activeTab } onTabChange={ this.handleTabChange } />
        <main className="App-content">
          { this.renderContent() }
        </main>
      </div>
    );
  }
}

export default App;
