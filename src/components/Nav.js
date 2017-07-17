import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavLink extends Component {
  static propTypes = {
    children: PropTypes.string,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
  };

  static defaultProps = {
    children: 'Navigation'
  };

  handleClick = () => {
    this.props.onClick(this.props.index);
  };

  render() {
    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <a onClick={ this.handleClick }>{ this.props.children }</a>
    );
  }
}

const Nav = ({ activeTab, onTabChange }) => (
  <nav className="App-nav">
    <ul>
      <li className={ `App-nav-item ${ activeTab === 0 && 'selected' }` }>
        <NavLink index={ 0 } onClick={ onTabChange }>Items</NavLink>
      </li>
      <li className={ `App-nav-item ${ activeTab === 1 && 'selected' }` }>
        <NavLink index={ 1 } onClick={ onTabChange }>Cart</NavLink>
      </li>
    </ul>
  </nav>
);

Nav.propTypes = {
  activeTab: PropTypes.number.isRequired,
  onTabChange: PropTypes.func.isRequired
};

export default Nav;
