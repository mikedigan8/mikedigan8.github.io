import React from "react";
import ReactDOM from 'react-dom';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './home';
import Hobbies from './hobbies';
import Projects from './projects';

class Clickable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    handleClick = () => this.props.onClick(this.props.index);
    render() {
      return (
        <li className="nav-item">
            <Link to={this.props.to} className={this.props.isActive ? "nav-link active":"nav-link"}
            onClick={ this.handleClick }> {this.props.name} </Link>
        </li>
      );
    }
}

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav_text: ['Home', 'Hobbies', 'Projects'],
            activeIndex: 0,
            menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    
    handleClick = (index) => this.setState({ activeIndex: index });

    toggleMenu() {
      this.setState({menu: !this.state.menu})
    }

    render() {
      const show = (this.state.menu) ? "show" : "";
        return (
          <Router>
            <nav className="navbar sticky-top navbar-expand-sm bg-dark navbar-dark">
                <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={"collapse navbar-collapse "+show} id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        {
                          this.state.nav_text.map( (value, i) =>
                          <Clickable name={value} to={value.toLocaleLowerCase()} index={i} 
                          isActive={this.state.activeIndex === i}
                          onClick={ this.handleClick } 
                          />)
                        }
                    </ul>
                </div>
            </nav>
          
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/index">
                <Home />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/hobbies">
                <Hobbies />
              </Route>
              <Route exact path="/projects">
                <Projects />
              </Route>
            </Switch>
          </Router>
        );
    }
}

export default Navbar;

ReactDOM.render(
  <Navbar />,
  document.getElementById("header")
);