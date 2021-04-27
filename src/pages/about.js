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
                        <h1>ECOS is an growing organization started by students at Libertyville High School in 2020 dedicated to remedying climate change</h1>
                    </div>

                    <ScrollAnimation animateOnce={true} className="card question gradient-border" animateIn="animate__fadeInLeft" initiallyVisible={false} duration={1}>
                        <h2 className="medium" >Our Mission</h2>
                    </ScrollAnimation>
                    <div className="card body" style={{ marginBottom: "10vh" }}>
                        <h1>We strive to enact and promote broad action to combat climate change and other environmental issues. The solution to any environmental problem has to include a plan to make society more sustainable far into the future. Our goal at ECOS is to fill in that piece of society's climate solution through:<br /> <br /><strong>Education</strong>, <strong>Societal Change</strong>, <strong>Youth Action</strong>, and <strong> Exploration of Possible Solutions</strong></h1>
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
                                <ScrollAnimation animateIn="animate__wobble" initiallyVisible={true} duration={4}>
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
                    <ScrollAnimation animateOnce={true} className="card question" animateIn="animate__fadeInLeft" initiallyVisible={false} duration={1}>
                            <h2 className="big" >Our Goals</h2>
                        </ScrollAnimation>
                    <ScrollAnimation animateOnce={true} className="card question gradient-border" animateIn="animate__fadeInLeft" initiallyVisible={false} duration={1}>
                        <h2 className="medium" >Educate about climate change</h2>
                    </ScrollAnimation>
                    <div className="body-row">
                        <p>- Explain the science of climate change
                            <br></br>
                            <br></br>
                            - Make information more accessible to the general public
                        <br></br>
                        <br></br>
                        - Inform based on objective sources
                        </p>
                        <img alt="" src="https://i.ibb.co/xhf9sL9/mountains.jpg" />
                    </div>
                    <ScrollAnimation animateOnce={true} className="card question gradient-border" animateIn="animate__fadeInLeft" initiallyVisible={false} duration={1}>
                        <h2 className="medium">Make our society more sustainable</h2>
                    </ScrollAnimation>
                    <div className="body-row odd">
                        <img alt="" src="https://i.ibb.co/sFmdy9Y/oceans.jpg" />
                        <p>
                        - Engage in small and large-scale projects to improve efficiency
                        <br></br>
                        <br></br>
                        - Teach ways to reduce one's individual environmental footprint
                        </p>
                    </div>
                    <ScrollAnimation animateOnce={true} className="card question gradient-border" animateIn="animate__fadeInLeft" initiallyVisible={false} duration={1}>
                        <h2 className="medium" >Promote youth action</h2>
                    </ScrollAnimation>
                    <div className="body-row">
                        <p>
                        - Teach people how to live more sustainably in the future
                        <br></br>
                        <br></br>
                        - Highlight opportunities to benefit the environment
                        </p>
                        <img alt="" src="https://i.ibb.co/RjhLHY1/sky.jpg" />
                    </div>
                    <ScrollAnimation animateOnce={true} className="card question gradient-border" animateIn="animate__fadeInLeft" initiallyVisible={false} duration={1}>
                        <h2 className="medium">Focus on solutions as much as problems</h2>
                    </ScrollAnimation>
                    <div className="body-row odd">
                        <img alt="" src="https://i.ibb.co/PzyGQWL/trees.jpg" />
                        <p>
                        - Discuss modern environmental advancements
                        <br></br>
                        <br></br>
                        - Talk about how it affects people individually and what they can do about it individually
                        <br></br>
                        <br></br>
                        - Motivate into action instead of scaring into inaction

                        </p>
                    </div>
                </div>
{/*
                <div className="section three">
                    <ScrollAnimation animateOnce={true} className="card question gradient-border" animateIn="animate__fadeInLeft" initiallyVisible={false} duration={1}>
                        <h2 className="medium" >Our Team</h2>
                    </ScrollAnimation>
                    {this.state.members.map((a) => this.renderMember(a))}
                </div>

                <div className="section four">
                    <div className="card question gradient-border">
                        <h2 className="big" >Take Action</h2>
                    </div>
                    <div className="card body-row" style={{ marginBottom: "10vh",justifyContent:"space-around" }}>
                        <h1>Donate</h1>
                        <h1>Write a Letter</h1>
                        <h1>Volunteer</h1>
                    </div>
                </div>*/}
                <div className="bottom-row">
                       <div className="card involved">
                        <ScrollAnimation animateIn="animate__wobble" initiallyVisible={true} duration={2}>
                                <img className="instagram" alt="instagram" src={instagram_logo} onClick={() => window.open("https://www.instagram.com/ecos.lhs/")} />
                        </ScrollAnimation>
                        </div>
                        <div className="card involved card1">
                        <h1>Follow our insta and be part of the movement!</h1>
                    </div>
                    </div>
            </div>
        )
    }
}
