import React from "react";
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
        return (
            <div class="textInHeader">
                <h1>Mike Digan React Website</h1>
                <p>Advanced Programming: Javascript Spring 2021</p>
            </div>
        );
    }
}

export default Header;

ReactDOM.render(
    <Header />,
    document.getElementById("headerText")
);