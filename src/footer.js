import React from "react";
import ReactDOM from 'react-dom';
import data from '../src/data.json';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <hr />
                <p class="contacts">|&nbsp;
                {data.map((name, index)=>{
                            return <p class="footerRefs"><a href={name.url}>{name.title}</a> | </p>
                        })}
                    <p>mcdigan@mavs.coloradomesa.edu</p>
                </p>
            </div>
        );
    }
}

export default Footer;

ReactDOM.render(
  <Footer />,
  document.getElementById("foot")
);