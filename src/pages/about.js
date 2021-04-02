import React from 'react'
import axios from "axios"

import ScrollAnimation from 'react-animate-on-scroll';
import server from "../config"
import "animate.css/animate.css";

import "../styles/about.css"

import * as THREE from 'three'
import BIRDS from 'vanta/dist/vanta.birds.min'

import logo from "../assets/logos/logo.png"
import { extend } from 'jquery';
import instagram_logo from "../assets/instagram.png";
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://live.us1.list-manage.com/subscribe/post?u=29158c258bbdc547b9161ae16&amp;id=14e6cb9017"

const CustomForm = ({ status, message, onValidated }) => {
    let email, name;
    const submit = () => {
        email &&
            name &&
            email.value.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email.value,
                NAME: name.value
            });
    }
    return (
        <div className="sign-up-form">
            {status != "success" && <div className="sign-up-form">
                {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                {status === "error" && (
                    <div
                        style={{ color: "red" }}
                        dangerouslySetInnerHTML={{ __html: message }}
                    />
                )}
                {status === "success" && (
                    <div
                        style={{ color: "green" }}
                        dangerouslySetInnerHTML={{ __html: message }}
                    />
                )}
                <input
                    ref={node => (name = node)}
                    type="text"
                    placeholder="Your name"
                />
                <br />
                <input
                    ref={node => (email = node)}
                    type="email"
                    placeholder="Your email"
                />
                <br />
                <button onClick={submit}>
                    Join the movement
          </button>
            </div>}
            {status === "success" && <h2>Thanks for signing up!</h2>}
        </div>
    );
};

const SignUp = () => {
    return (
        <div>
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                    <div>
                        <CustomForm status={status}
                            message={message}
                            onValidated={formData => subscribe(formData)} />
                    </div>
                )}
            />
        </div>
    )
}

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [],
            blink: true
        }
        this.vantaRef = React.createRef()
        this.blinkTimer = null;
    }

    componentDidMount() {
        axios.get("" + server + "members/").then((res) => {
            this.setState({ members: res.data[0].members });

        })
            .catch(err => console.log(err))


        this.blinkTimer = setInterval(() => {
            this.setState({ blink: !this.state.blink })
        }, 500)
        //animated background
        this.vantaEffect = BIRDS({
            el: this.vantaRef.current,
            THREE: THREE,
            backgroundColor: "rgb(255,255,255)",
            backgroundAlpha: 0,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            birdSize: 1.50,
            wingSpan: 36.00,
            speedLimit: 3.00,
            separation: 72.00,
            alignment: 1.00,
            cohesion: 100.00,
            quantity: 3
        })

        //header animations

    }

    componentWillUnmount() {
        window.scrollTo(0, 0);
        if (this.vantaEffect) {
            this.vantaEffect.destroy()
        }
    }


    renderMember(m) {
        return (
            <div className="card member-group2" key={Math.random()} >
                <div className="img-box" style={{ backgroundImage: "url(" + m.Picture + ")" }} />
                <h2 className="info-texts">{m.Name}</h2>
                <h4 className="info-texts">{m.Job}</h4>
                <p className="bio">{m.Bio}</p>
            </div>
        )
    }

    render() {
        return (
            <div className="about">
                {/*<div className="birds" ref={this.vantaRef}></div>*/}
                <div className="section one transparent" ref={this.vantaRef}>
                    <img className="big-logo" alt="logo" src={logo} />
                    <h2 className="big" ><a>E</a>arth's <a>C</a>limate and <a>O</a>cean <a>S</a>ustainability</h2>
                    <br></br>
                    <h1 style={{ display: this.state.blink ? "none" : "inline" }}>&#9660;</h1>
                </div>
                <div className="section two ">
                    <ScrollAnimation animateOnce={true} className="card question gradient-border" animateIn="animate__fadeInLeft" initiallyVisible={false} duration={1}>
                        <h2 className="medium" >Who Are We?</h2>
                    </ScrollAnimation>
                    <div className="card body" style={{ marginBottom: "10vh" }}>
                        <h1>ECOS is an growing organization started by students at Libertyville High School in 2021 dedicated to remedying climate change</h1>
                    </div>

                    <ScrollAnimation animateOnce={true} className="card question gradient-border" animateIn="animate__fadeInLeft" initiallyVisible={false} duration={1}>
                        <h2 className="medium" >Our Mission</h2>
                    </ScrollAnimation>
                    <div className="card body" style={{ marginBottom: "10vh" }}>
                        <h1>We strive to enact and promote broad action to combat climate change and other environmental issues through 3 specific modes: <br /> <br /><strong>Politics </strong>, <strong> Research</strong>, and <strong> Community Mobilization</strong></h1>
                    </div>
                    <div className="section two-and-a-half">
                    <iframe className = "ocean-background" src="https://editor.p5js.org/GeorgeHuber/embed/605Cjc5E0"></iframe>
                        <ScrollAnimation animateOnce={true} className="card question gradient-border" animateIn="animate__fadeInLeft" initiallyVisible={false} duration={1}>
                            <h2 className="medium" >Get Involved</h2>
                        </ScrollAnimation>
                        <div className="involved-grid">
                            <div className="card involved">
                                <h1>Join our mailing list</h1>
                                <SignUp />
                            </div>
                            <div className="card involved">
                                <ScrollAnimation animateIn="animate__wobble" duration={4}>
                                <img className="instagram" alt="instagram" src={instagram_logo} onClick={() => window.open("https://www.instagram.com/ecos.lhs/")} />
                                </ScrollAnimation>
                            </div>
                            <div className="card involved">
                                <h2>highschool students : </h2>
                                <h1><a href="mailto: ecos.lhs@gmail.com">join our organization</a></h1>
                                <h2>contact ecos.lhs@gmail.com or any of our team members for the zoom link</h2>
                            </div>
                            <div className="card involved">
                                <h1>more coming soon!!</h1>
                            </div>
                        </div>


                    </div>
                    <ScrollAnimation animateOnce={true} className="card question gradient-border" animateIn="animate__fadeInLeft" initiallyVisible={false} duration={1}>
                        <h2 className="medium" >Politics</h2>
                    </ScrollAnimation>
                    <div className="body-row">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <img alt="" src="https://www.telegraph.co.uk/content/dam/travel/Spark/brand-usa-2018/washinton-dc-mall-xlarge.jpg" />
                    </div>
                    <ScrollAnimation animateOnce={true} className="card question gradient-border" animateIn="animate__fadeInLeft" initiallyVisible={false} duration={1}>
                        <h2 className="medium">Research</h2>
                    </ScrollAnimation>
                    <div className="body-row odd">
                        <img alt="" src="data:image/jpeg;base64,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" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <ScrollAnimation animateOnce={true} className="card question gradient-border" animateIn="animate__fadeInLeft" initiallyVisible={false} duration={1}>
                        <h2 className="medium" >Community Mobilization</h2>
                    </ScrollAnimation>
                    <div className="body-row">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <img alt="" src="https://www.iseif.org/wp-content/uploads/2014/11/hands-in-circle-resize.jpg" />
                    </div>

                </div>

                <div className="section three">
                    <ScrollAnimation animateOnce={true} className="card question gradient-border" animateIn="animate__fadeInLeft" initiallyVisible={false} duration={1}>
                        <h2 className="medium" >Our Team</h2>
                    </ScrollAnimation>
                    {this.state.members.map((a) => this.renderMember(a))}
                </div>

                {/*<div className="section four">
                    <div className="card question gradient-border">
                        <h2 className="big" >Take Action</h2>
                    </div>
                    <div className="card body-row" style={{ marginBottom: "10vh",justifyContent:"space-around" }}>
                        <h1>Donate</h1>
                        <h1>Write a Letter</h1>
                        <h1>Volunteer</h1>
                    </div>
                </div>*/}
            </div>
        )
    }
}