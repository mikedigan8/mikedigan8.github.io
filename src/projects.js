import React from "react";


class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div>
                <h1>Projects</h1>

                <h3>ConRadar</h3>
                <h5>Spring 2021</h5>
                <hr />
                <h3>Pika Monitoring</h3>
                <h5>Fall 2020</h5>
                <hr />
                <h3>Tax Assistance Program</h3>
                <h5>Spring 2018</h5>
            </div>
        );
    }
}

export default Projects;