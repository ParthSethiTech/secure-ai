import React, { Component } from 'react'
import $ from 'jquery'

export default class Main extends Component {

    componentDidMount(){
        var toString = $('.code').html()
        var OGarray = toString.split('')
        var genNum
        var counter = 0
        var cutOffAt = 55
        var obfuscated = 1

        function getRandom(len) {
        return new Array(len + 1).join('2')

        }

        function Gen() {
        var length = toString.length
        console.log(length)
        genNum = getRandom(length)
        console.log(genNum)

        $('.letters').html(genNum)
        console.log(genNum)
        }

        function parser(NUarray) {
        $.each(NUarray, function(index, value) {
            if (value == 0) {
            NUarray[index] = OGarray[index]
            } else if (value == OGarray[index]) {
            NUarray[index] = OGarray[index]
            } else if (isNaN(value)) {
            NUarray[index] = OGarray[index]
            } else {
            var change = Math.round(Math.random() * 9)
            NUarray[index] = change
            }
        })
        if (NUarray.toString() == OGarray.toString()) {
            obfuscated = 0
            window.clearInterval(interval)
        }
        if (counter == 50) {
            obfuscated = 0
            window.clearInterval(interval)
            NUarray = OGarray

        }
        counter += 1
        return NUarray.join("")

        }

        function Genletters(stringToChange) {
        var string = stringToChange.toString().split('')
        return genNum = parser(string)
        }

        function runThis() {
        Genletters(genNum)
        console.log(genNum)
        $('.code').html(genNum)
        }
        Gen()
        var interval = setInterval(function() {
        runThis()
        }, 100)


        
    }

    render() {
        return (
            <div>
                
                <div>
            <div className="outer-menu">
            <input className="checkbox-toggle" type="checkbox" />
            <div className="hamburger">
                <div></div>
            </div>
            <div className="menu">
                <div>
                <div>
                    <ul>
                    <li><a href="#section-1">Home</a></li>
                    <li><a href="#video-section">Pitch</a></li>
                    <li><a href="#features-section">Data</a></li>
                    <li><a href="https://colab.research.google.com/drive/1MshZIB-xU2tXhHAGWD35VHZ--jjfKXEa?usp=sharing">Download</a></li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>

                <section className="section-1" id="section-1">
                    <div className="main">
                        
                    <div className="heading"><span className="code" role="content">Secure AI</span></div>
                    <div className="contact form">
                        <h1 className="spytext"><span className="bold code" role="content">SECURE AI</span></h1>
                        <br/>
                        <hr/>
                        <p>We provide anomaly detecting service for free as an open source resource with the help of machine learning for cyber security enthusiast to use this as a source of their greater paths, our anomaly detectors detect some of the most rogue and misleading websites through many criterias and display it in a user friendly format. 😉</p>
                    </div>
                    
                </div>
                </section>

                <section class="video-section" id="video-section">
            <div class="video-section-content">
                <ul class="list">
                    <div class="list-heading">
                        How we're the best
                    </div>
                    <li class="list-item">
                        <div class="list-bullet">
                            😎
                        </div>
                        <div class="list-text">
                            We provide extremely accurate predictions over when a website can get DDOSed and have acheived over 90% accuracy.
                        </div>
                    </li>
                    <li class="list-item">
                        <div class="list-bullet">
                            😉
                        </div>
                        <div class="list-text">
                            We are constantly evolving and have big plans for the future!
                        </div>
                    </li>
                    <li class="list-item">
                        <div class="list-bullet">
                            😍
                        </div>
                        <div class="list-text">
                            We have a very resourceful dataset which helps give the most accurate data to you.
                        </div>
                    </li>
                    <li class="list-item">
                        <div class="list-bullet">
                            😃
                        </div>
                        <div class="list-text">
                            It's so easy to use, you won't even have to do a thing!
                        </div>
                    </li>
                </ul>
                <img src="https://images.unsplash.com/flagged/photo-1560854350-13c0b47a3180?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1326&q=80" />
            </div>

            </section>

            
                
            <section class="features-section" id="features-section">
            <div class="features-title" style={{"color": "black"}}>
                What we did
                <div class="features-title-underline"></div>
            </div>
            <div class="features-grid">
                <div class="feature media-on-right">
                    <div class="feature-content-block">
                        <div class="feature-heading">
                            <div class="feature-icon">
                                <ion-icon name="code-slash-outline"></ion-icon>
                            </div>
                            <div class="feature-heading-text">
                                MONDAY
                            </div>
                        </div>
                        <div class="feature-content">
                            This is the data on a website which predicts when an attack can be conducted throughout the day. The blue 'O' and the red 'X' show the actual attack and the predictions for that attack respectively, as you can see, they are very accurate.
                        </div>
                    </div>
                    <div class="feature-media">
                        <img src="https://media.discordapp.net/attachments/765820980664598588/770987957833957376/unknown.png" alt="Feature Media" class="feature-media-content" />
                    </div>
                </div>
                <div class="feature media-on-left">
                    <div class="feature-media">
                        <img src="https://media.discordapp.net/attachments/765820980664598588/770988004452859934/unknown.png" alt="Feature Media" class="feature-media-content" />
                    </div>
                    <div class="feature-content-block">
                        <div class="feature-heading">
                            <div class="feature-icon">
                                <ion-icon name="code-slash-outline"></ion-icon>
                            </div>
                            <div class="feature-heading-text">
                                TUESDAY
                            </div>
                        </div>
                        <div class="feature-content">
                            This is a similiar prediction for tuesday, these predictions can be conducted on ANY website given the requirements and it's a very professional tool which everyone would love to use.
                        </div>
                    </div>
                </div>

            </div>
        </section>

        

            </div>

        )
    }
}   

