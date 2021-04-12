import React, { useEffect } from "react";
import meInCar from './Me_in_a_car.jpg';
import data from '../src/data.json';

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
                    <h2>Online Profiles</h2>
                    <ul>
                        {data.map((name, index)=>{
                            return <li><a href={name.url}>{name.title}</a><br /></li>
                        })}
                    </ul>
                </p>

                <p class="employment">
                    <h1>
                        Employment History
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
                <p class="academics">
                    <h1>Academic History and Relevant Courses</h1>
                    <h3>Bachelor's in Science: General Accounting</h3>
                    <h5>August 2013 - May 2018</h5>
                    <ul>
                        <li class="bulletItem">Intermediate Accounting I & II</li>
                Development of a foundational understanding of Generally Accepted Accounting Principles and their application to external financial statements.
                <br /><br /><li class="bulletItem">Ethics for Accounting Professionals</li>
                The field of ethics as applied to the accounting and finance professions. Ethical standards of the profession, accounting and finance scandals in recent history, and methods to overcome ethical dilemmas encountered as professionals.
                <br /><br /><li class="bulletItem">Accounting Information Systems</li>
                A study of the concepts and design of the Accounting Information System with emphasis on the internal control structures, requirements, and professional standards.
                <br /><br /><li class="bulletItem">Auditing I & II</li>
                Scope and purposes of the attestation work of a certified public accountant focusing on generally accepted auditing standards (GAAS). Includes theory of auditing, professional ethics, legal liability of the auditor, and internal control.
                <br /><br /><li class="bulletItem">Individual Income Tax</li>
                Federal Income Tax Law in-depth as it relates to individual taxpayers. Introduction to various tax reference resources.
                <br /><br /><li class="bulletItem">Advanced Tax and Tax Research</li>
                Federal Income Tax Law for corporations, partnerships, estates, trusts, and gifts. In-depth experience with tax research resources, research methods and related projects. Required participation in the Tax Assistance Program to acquire practical experience in communication with taxpayers and preparation of tax returns.
            </ul>
                    <h3>Bachelor's in Seicnce: Computer Science</h3>
                    <h5>January 2020 - May2021</h5>
                    <ul>
                        <li class="bulletItem">Programming Languages</li>
                Principles and concepts which characterize various classes of high-level, computer programming languages are covered. Topics will include syntax and semantic issues, data types/classes, control structures, binding, and storage allocation.
                <br /><br /><li class="bulletItem">User Interface Design</li>
                Examination of user interface design (UID) principles. They include rules of perception, systems analysis, user analysis, good design principles, and testing and evaluation of designs. Using an appropriate Rapid Application Development tool, students will design a major project emphasizing UID concepts.
                <br /><br /><li class="bulletItem">Computer Secutiry</li>
                Networked-computer security, suitable for both CS and CIS majors. Topics include security framework, access control and site security, firewalls, attack methods, elements of cryptography and cryptographic systems, incidence response, security in e-commerce and e-mail, management and policy decisions for security.
                <br /><br /><li class="bulletItem">Object Oriented Programming</li>
                Advanced programming techniques using the object-oriented paradigm, with emphasis on abstractness of design, encapsulation, inheritance, and polymorphism. Additional topics include design tools and methodologies for determining classes, responsibilities, collaborations, and hierarchies.
                <br /><br /><li class="bulletItem">Theory of Algorithms</li>
                Techniques for analyzing time and space requirements of computer algorithms. Models are set up for analysis and techniques are applied to algorithms related to sorting and searching, pattern-matching, graph problems and other selected problems. The notion of NP-hard problems is introduced and related problems are discussed.
                <br /><br /><li class="bulletItem">Software Engineering</li>
                Exploration of the philosophy of software engineering. Software project planning, requirement analysis, software system design and strategies, software design tools, program and system testing, system maintenance, and economics are examined.
            </ul>
                    <h3>Extraneous Courses</h3>
                    <ul>
                        <li class="bulletItem">Calculus I</li>
                An introduction to differentiation and integration of functions of a single variable. Topics include functions, limits, continuity, differentiation, related rates, min-max problems, graphing, integration and applications.
                <br /><br /><li class="bulletItem">Calculus II</li>
                A continuation of Calculus I. Topics include techniques of integration, trigonometric and hyperbolic functions, inverse, logarithmic and exponential functions, sequences, series, conic sections, polar coordinates and parametric equations.
                <br /><br /><li class="bulletItem">Calculus III</li>
                Vectors in three-dimensional space, vector functions, partial derivatives, directional derivative and multiple integrals.
                <br /><br /><li class="bulletItem">Differential Equations</li>
                Techniques of solving differential equations of order one, linear differential equations, linear equations with constant coefficients, non-homogeneous equations, variation of parameter techniques, and Laplace transform methods.
                <br /><br /><li class="bulletItem">Discrete Structures I</li>
                Elementary logic, induction, recursion, recurrence relations, sets, combinatorics, relations, functions, graphs, trees, and elementary abstract structures.
            </ul>
                </p>
            </div>
        );
    }
}

export default Home;