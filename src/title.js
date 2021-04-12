import React from "react";
import ReactDOM from 'react-dom';

class Title extends React.Component {
    render() {
        return (
            <title>Mike's React Page</title>
        );
    }
}

export default Title;

ReactDOM.render(
  <Title />,
  document.getElementById("appTitle")
);