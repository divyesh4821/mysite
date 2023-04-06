import gsap from 'gsap';
import React from 'react'
import Header from '../Components/Header'
import { FaDiceD20, FaHtml5, FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

function Home() {
    return (
        <>
            <Header />

            <section className='banner'>
                <div className='container'>
                    <div className='row align-items-center justify-content-center g-4'>
                        <div className='col-12 col-lg-6 text-white'>
                            <div className='banner_content '>
                                <h1> Who I Am</h1>
                                <span>I Am a</span>
                                <span>Perfect Front-End</span>
                                <span>Developer</span>
                            </div>
                            <div className='dev_info'>
                                <ul>
                                    <li>Determining the structure and design of web pages.</li>
                                    <li>Ensuring user experience determines design choices.</li>
                                    <li>Proficiency in HTML, CSS, JavaScript, and jQuery.</li>
                                    <li>Building reusable code for future use.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <img class="girl" src="https://images.unsplash.com/photo-1562907550-096d3bf9b25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" />
                        </div>

                    </div>
                </div>
            </section>

            <div className='service'>
                <div class="container">
                    <div className='section_heading'>
                        <h2>My Services</h2>
                    </div>
                    <div class="row my-2">
                        <div class="col-md-3 col-sm-6 ">
                            <div class="service-box">
                                <div class="service-box yellow">
                                    <div class="front-content text-white">
                                        <FaReact className='service_icon' />
                                    </div>
                                </div>
                                <div class="service-content">
                                    <h3>React</h3>
                                    <p>A React developer is responsible for the design and API</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6 ">
                            <div class="service-box">
                                <div class="service-box orange">
                                    <div class="front-content">
                                        <FaHtml5 className="service_icon" />
                                    </div>
                                </div>
                                <div class="service-content">
                                    <h3>web developer</h3>
                                    <p>Impletement data with JSX In latest technology</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="service-box ">
                                <div class="service-box red">
                                    <div class="front-content">
                                        <FaDiceD20 className='service_icon' />
                                    </div>
                                </div>
                                <div class="service-content">
                                    <h3>user interface</h3>
                                    <p>The user interface (UI) is the point of human-computer interaction and communication in a device. </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="service-box">
                                <div class="service-box grey">
                                    <div class="front-content">
                                        <SiJavascript className="service_icon" />
                                    </div>
                                </div>
                                <div class="service-content">
                                    <h3>java script</h3>
                                    <p>JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <article>
                <section class="card">
                    <div class="text-content">
                        <h3>Elevate Your Brand with Exceptional Design</h3>
                        <p>Your website is often the first point of contact for potential customers. We believe great design can help elevate your brand and make a lasting impression.</p>
                        <a href="#">Join now</a>
                    </div>
                    <div class="visual">
                        <img src="https://plus.unsplash.com/premium_photo-1661572936021-8f0a113fb9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                    </div>
                </section>

                <section class="card">
                    <div class="text-content">
                        <h3>Responsive Design for Every Screen Size</h3>
                        <p>We specialize in creating responsive designs that look great on desktop, tablet, and mobile devices, ensuring your site is accessible to all your visitors.</p>
                        <a href="#">Join now</a>
                    </div>
                    <div class="visual">
                        <img src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" />
                    </div>
                </section>

                <section class="card">
                    <div class="text-content">
                        <h3>Design that Speaks to Your Audience</h3>
                        <p>We work closely with you to understand your brand and your customers, so we can create a website that speaks directly to your target audience.</p>
                        <a href="#">Join now</a>
                    </div>
                    <div class="visual">
                        <img src="https://images.unsplash.com/photo-1552960394-c81add8de6b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                    </div>
                </section>

                <section class="card">
                    <div class="text-content">
                        <h3>Design that Drives Results for Your Business</h3>
                        <p>We specialize in creating websites that not only look great but also drive traffic and conversions. Let us help you create a website that delivers real business value.</p>
                        <a href="#">Join now</a>
                    </div>
                    <div class="visual">
                        <img src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                    </div>
                </section>
            </article>
        </>
    )
}

export default Home