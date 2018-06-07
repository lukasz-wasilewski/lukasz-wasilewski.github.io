import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './style.css';

class NavbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false
    }
    this.onNavClick = this.onNavClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setState({
        expand: false
      });
    }
  }

  onNavClick() {
    this.setState((prevState, props) => ({
      expand: !prevState.expand
    }));
  }

  render() {
    const classActive = this.state.expand ? 'is-active' : '';
    return (
      <nav className="navbar is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <span
              onClick={this.onNavClick}
              className={'navbar-burger burger ' + classActive}
              data-target="navbarMenuHeroA"
              aria-label="menu"
              aria-expanded="false"
            >
              <span />
              <span />
              <span />
            </span>
          </div>
          <div id="navbarMenuHeroA" className={'navbar-menu ' + classActive}>
            <div className="navbar-end">
              <NavLink
                to="/"
                className="navbar-item"
                activeClassName="is-active"
              >
                Home
              </NavLink>
              <NavLink
                to="/cv"
                className="navbar-item"
                activeClassName="is-active"
              >
                Resume
              </NavLink>
              <NavLink
                to="/blog"
                className="navbar-item"
                activeClassName="is-active"
              >
                Blog
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(NavbarComponent);
