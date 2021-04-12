import React from "react";


class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div class="projects">
                <h1>Projects</h1>

                <h3>ConRadar</h3>
                <h5>Spring 2021</h5>
                <p>
                    <ul>
                        <li>Implement a mobile app in Android Studio using Java and XML</li>
                        <li>Connect the app to the FireBase real-time database</li>
                        <li>Work using the agile development methodology</li>
                        <li>Collaborate with a client to ensure development meets expectations</li>
                    </ul>
                </p>
                <hr />
                <h3>Pika Monitoring</h3>
                <h5>Fall 2020</h5>
                <ul>
                    <li>Monitor temperature, humidity, light, and sound in alpine settings</li>
                    <li>Work with the Arduino IDE and develop a monitoring algorithm</li>
                    <li>Create a local server to view data using an Arduino ESP8266</li>
                    <li>Generate a JavaScript web page that displays collected data</li>
                </ul>
                <hr />
                <h3>Tax Assistance Program</h3>
                <h5>Spring 2018</h5>
                <ul>
                    <li>Prepare individual tax returns for community members</li>
                    <li>Work alongside CPAs to ensure correct documentation</li>
                    <li>Research relevant tax law to provide accurate returns</li>
                    <li>Communicate difficult accounting concepts to clients</li>
                </ul>
            </div>
        );
    }
}

export default Projects;