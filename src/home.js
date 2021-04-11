import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div>
                <p class="vanPic">
                    <h1>
                        About Me
        </h1>
                    <img src={meInCar} alt="In a car" width="100%"></img>
            My name is Mike Digan. I am a senior studying computer science at Colorado Mesa University.
            I began my collegiate journey back in 2013 when I sought out a Bachelor's degree in accounting
            with a minor in computer science. Upon completion of that program, I had a brief aside where
            I studied higher level calculus with the intent of developing my analytical ability. Once I had
            finished my calculus courses I decided to take the few remaining courses that stood between me
            and my Bachelor's in computer science. I re-enrolled to Colorado Mesa University in the spring
            of 2020 and will finish my CS degree in May of 2021.

            <hr></hr>
                    <h2>Links to online profiles</h2>
                    <ul>
                        <li><a href="https://github.com/mikedigan8">Github</a><br></br></li>
                        <li><a href="https://www.linkedin.com/in/mike-digan">Linkedin</a><br></br></li>
                        <li><a href="https://coloradomesa.joinhandshake.com/users/8854211">Handshake</a></li>
                    </ul>
                </p>

                <p class="employment">
                    <h1>
                        My Employment History
            </h1>
                    <h3>
                        EUREKA! McConnell Science Museum
            </h3>
                    <h4>
                        Intern: January 2020-Current
            </h4>
                    <ul>
                        <li>Teach topics ranging from microbiology to computer algorithms</li>
                        <li>Tutor in middle school math classrooms</li>
                        <li>Guide students on environmental learning trips</li>
                    </ul>
                    <h3>
                        Hamilton Recreation Center
            </h3>
                    <h4>
                        Head RouteSetter: January 2015-May 2018 and January 2020-Current
            </h4>
                    <ul>
                        <li>Uphold the protocols of the rock wall to ensure safety</li>
                        <li>Oversee the maintenance of the climbing wall</li>
                        <li>Create a schedule that fits staff availability</li>
                    </ul>
                    <h3>
                        Tutoring Club
            </h3>
                    <h4>
                        Math and Science Tutor: August 2018-December 2019
            </h4>
                    <ul>
                        <li>Individually work with kids age 7 – 17</li>
                        <li>Help students understand complex math and science concepts</li>
                        <li>Prepare high schoolers for standardized tests and college material</li>
                    </ul>
                </p>
                <hr></hr>

            </div>
        );
    }
}

export default Home;