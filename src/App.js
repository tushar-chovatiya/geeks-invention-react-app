import React from 'react';
import './App.css';
import img1 from './images/logo-insurity.webp'
import img2 from './images/logo-equity.webp'
import img3 from './images/logo-audi.webp'
import img4 from './images/logo-baanx.webp'
import img5 from './images/logo-byju.webp'
import img6 from './images/logo-ifit.webp'
import img7 from './images/logo-inchcape.webp'
import img8 from './images/logo-linux.webp'
import img9 from './images/logo-penny.webp'
import img10 from './images/logo-payyit.webp'

function App() {

  return (
    <div>
      <title>Geeks Invention – Mobile App Development Company. Top iOS and Android App Developers and Designers</title>
      <link rel="stylesheet" media="screen" href="css/app.css" />
      <section className="top">
        <div className="slogan">
          <div className="slogan_i">
            <div className="text_w">
              <h1 className="page-title">EMBRACE THE FUTURE</h1>
              <p>Welcome to the Age of Action</p>
            </div>
          </div>
        </div>
        <div className="bg">
          <div className="slides">
            <div id="first-slide" className="slide" data-src="assets/v2/general/y-1b2a02600dd0fc5002a8c1ee5d642597.png" />
          </div>
          <canvas className="draw" />
        </div>
      </section>
      <section className="wrapper">
        <div className="works-list">
          <div className="works-list__item purple">
            <div className="works-list__item__w clearfix">
              <div className="img-block">
                <div className="img-w">
                  <img alt="Brilliant Move" src="https://geeksinvention.com/assets/v3/industry-fintech.svg" />
                </div>
              </div>
              <div className="text__w">
                <div className="text">
                  <h3 style={{fontSize: '63px'}}>Fintech Solution</h3>
                  <p className="subtitle">Transforming Fintech with AI</p>
                  <div className="tags">
                    <span>Fraud detection</span>
                    <span>Transaction categorisation</span>
                    <span>Risk Scoring</span>
                  </div>
                  <div className="content">
                    <p>
                      Empower your financial institution with our advanced fintech solutions. From real-time fraud detection to easy bookkeeping, our software development services provide credit risk scoring for accurate lending eligibility, transaction categorization for seamless organization, and anomaly detection to safeguard your assets
                    </p>
                  </div>
                  <button className="btn btn_white" rel="nofollow" href="#">
                    <span>See full case study</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="works-list__item azure">
            <div className="works-list__item__w clearfix">
              <div className="img-block">
                <div className="img-w">
                  <img alt="IoT" src="https://geeksinvention.com/assets/v3/industry-iot.webp" />
                </div>
              </div>
              <div className="text__w">
                <div className="text">
                  <h3>Industrial IoT</h3>
                  <p className="subtitle">Providing a better connected experience</p>
                  <div className="tags">
                    <span>Connected manufacturing</span>
                    <span>Aviation</span>
                    <span>Smart Building</span>
                  </div>
                  <div className="content">
                    <p>
                      Revolutionize your industry with our innovative IoT solutions. Our software development services offer connected manufacturing, pollution control, smart transportation, and intelligent farming, agriculture, and forestry. With our expertise, you can harness the power of technology to increase efficiency, reduce waste, and optimize operations for a sustainable future.
                    </p>
                  </div>
                  <button className="btn btn_white" rel="nofollow" href="#">
                    <span>See full case study</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="works-list__item black">
            <div className="works-list__item__w clearfix">
              <div className="img-block">
                <div className="img-w">
                  <img alt="Connect Home" src="https://geeksinvention.com/assets/v3/industry-education.webp" />
                </div>
              </div>
              <div className="text__w">
                <div className="text">
                  <h3 style={{fontSize: '60px'}}>Smart Education</h3>
                  <p className="subtitle">Elevate your Education Institution</p>
                  <div className="tags">
                    <span>Learning Management</span>
                    <span>Course offering</span>
                    <span>Professional Training</span>
                  </div>
                  <div className="content">
                    <p>
                      Elevate your education institution with our comprehensive software solutions. Learning management, course offerings, professional training, certification, and school management tools to streamline your operations and enhance your students' learning experience. Trust us to provide the cutting-edge technology and support you need to thrive in the ever-evolving education industry.
                    </p>
                  </div>
                  <button className="btn btn_white" rel="nofollow" href="#">
                    <span>See full case study</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info">
          <div className="info__i">
            <div className="info__title">
              <h2>Check out more works by Geeks Invention</h2>
            </div>
            <div className="info__text">
              <p>
                Our case studies describe design and development solutions implemented at our Geeks Invention projects. The stories are a
                valuable resource for those looking to develop their own mobile apps.
              </p>
            </div>
          </div>
          <button className="btn btn_orange" href="works/index.html">
            <span>See all case studies</span>
          </button>
        </div>
        <div className="challenges index-challenges">
          <div className="challenges__i">
            <div className="challenges__title">
              <h3>Recent clients</h3>
              <p>
                We worked with the Fortune 500 companies in the USA, Africa, UK, Middle East
                <br />World's 4th Strongest Banking Brand, Automobile &amp; IoT industry
              </p>
            </div>
            <div className="challenges__content">
              {/* 1st Section */}
              <div className="challenges-list clearfix">
                <div className="challenges-list__item">
                  <div className="comp-logo">
                    <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png" />
                  </div>
                  <div className="text">
                    <p className="item-title">Global Technology</p>
                    <p>From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world.</p>
                  </div>
                </div>
                <div className="challenges-list__item">
                  <div className="comp-logo">
                    <img alt="" src={img2} />
                  </div>
                  <div className="text">
                    <p className="item-title">4th Strongest Bank</p>
                    <p>Empowering a continent by creating better livelihoods, Equity bank has been awarded 4th strongest Bank in the world in 2023. Offering various banking services over Africa region</p>
                  </div>
                </div>
                <div className="challenges-list__item">
                  <div className="comp-logo">
                    <img alt="" src={img3} />
                  </div>
                  <div className="text">
                    <p className="item-title">Intelligence on wheel</p>
                    <p>Audi is a luxury car manufacturer renowned for its sophisticated engineering, innovative designs, and exceptional performance by leveraging latest technology.</p>
                  </div>
                </div>
              </div>
              {/* 2nd Section */}
              <div className="challenges-list clearfix" style={{marginTop: '30px'}}>
                <div className="challenges-list__item">
                  <div className="comp-logo">
                    <img alt="" src="https://www.aramco.com/images/aramcoLogo.png" />
                  </div>
                  <div className="text">
                    <p className="item-title">Energy Producer</p>
                    <p>One of the world's largest integrated energy and chemicals companies, creating value across the hydrocarbon chain, and delivering societal and economic benefits to people and communities around the globe who rely on the vital energy we supply.</p>
                  </div>
                </div>
                <div className="challenges-list__item">
                  <div className="comp-logo">
                    <img alt="" src={img1} />
                  </div>
                  <div className="text">
                    <p className="item-title">Cloud-Native Insurance</p>
                    <p>Insurity, a leading provider of cloud-based software for insurance carriers, brokers, and MGAs. Insurity serves 500+ insurers, with 400+ in the cloud and 330+ in the public cloud. It is trusted by 22 of the top 25 P&amp;C carriers &amp; 7 of the top 10 MGAs.</p>
                  </div>
                </div>
                <div className="challenges-list__item">
                  <div className="comp-logo">
                    <img alt="" src={img5} />
                  </div>
                  <div className="text">
                    <p className="item-title">The Learning Platform</p>
                    <p>BYJU'S is India's largest ed-tech company and the creator of India's most loved school learning app. BYJU’S provides India’s best teachers and subject matter experts to teach and clear doubts of the students in an ongoing class.</p>
                  </div>
                </div>
              </div>
              {/* 3rd Section */}
              <div className="challenges-list clearfix" style={{marginTop: '30px'}}>
                <div className="challenges-list__item">
                  <div className="comp-logo">
                    <img alt="" src={img8} />
                  </div>
                  <div className="text">
                    <p className="item-title">Open Source Giant</p>
                    <p>The Linux Foundation is a non-profit organization that supports the development and growth of the Linux operating system and other open source technologies like NodeJs, Kubernetes, GraphQL, OpenAPI etc.</p>
                  </div>
                </div>
                <div className="challenges-list__item">
                  <div className="comp-logo">
                    <img alt="" src={img6} />
                  </div>
                  <div className="text">
                    <p className="item-title">Fitness Platform</p>
                    <p>iFit is a workout app with thousands of on-demand classes to suit a variety of fitness levels. Stream classes using an iFit-compatible exercise machine or access them on your smartphone to work up a sweat in any location.</p>
                  </div>
                </div>
                <div className="challenges-list__item">
                  <div className="comp-logo">
                    <img alt="" src={img10} />
                  </div>
                  <div className="text">
                    <p className="item-title">Smooth Invoicing</p>
                    <p>Payyit is a cutting-edge Software as a Service (SAAS) platform designed to revolutionize the invoicing,  bookkeeping, payment processing, virtual bank account and debit card management for businesses of all sizes.</p>
                  </div>
                </div>
              </div>
              {/* 4th Section */}
              <div className="challenges-list clearfix" style={{marginTop: '30px'}}>
                <div className="challenges-list__item">
                  <div className="comp-logo">
                    <img alt="" src={img4} />
                  </div>
                  <div className="text">
                    <p className="item-title">Crypto Bank</p>
                    <p>The Baanx Platform bridges the gap between fiat and digital asset technology to provide with an API-driven platform to create disruptive, cutting-edge digital products offering Payments, Digital Assets, Loans.</p>
                  </div>
                </div>
                <div className="challenges-list__item">
                  <div className="comp-logo">
                    <img alt="" src={img7} />
                  </div>
                  <div className="text">
                    <p className="item-title">Mobility Solution</p>
                    <p>Inchcape is the leading independent multi-brand global automotive distributor, operating in over 40 markets and territories with a portfolio of the world’s leading automotive brands.</p>
                  </div>
                </div>
                <div className="challenges-list__item">
                  <div className="comp-logo">
                    <img alt="" src={img9} />
                  </div>
                  <div className="text">
                    <p className="item-title">Global Procurement</p>
                    <p>Penny is a cloud-based Source-To-Pay system. Penny helps digitize and manage full procurement cycle from Request to approval, Manage RFQs to vendors, Compare quotations, Send POs and even payment.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <button class="btn btn_orange" rel="nofollow" href="about/index.html">
                  <span>More about us</span>
              </button> */}
          </div>
        </div>
        <div className="software-platforms">
          <div className="platforms-header">
            <div className="platforms-title">
              <h2>Software for modern platforms</h2>
            </div>
            <div className="platforms-text">
              <p>We develop applications for mobile, web, wearables, and TV.</p>
            </div>
          </div>
          <div className="platforms-list">
            <div className="group">
              <div className="list-item">
                <div className="img">
                  <img src="https://geeksinvention.com/assets/software-platforms/web-45bb148b27e8f57f2af5936654ab0d96.svg" alt="" />
                </div>
                <span className="title">Web</span>
              </div>
              <div className="list-item">
                <div className="img">
                  <img src="https://geeksinvention.com/assets/software-platforms/ios-00fc94480a85413ba6276b2392cbaa0a.svg" alt="" />
                </div>
                <span className="title">iOS</span>
              </div>
            </div>
            <div className="group">
              <div className="list-item">
                <div className="img">
                  <img src="https://geeksinvention.com/assets/software-platforms/android-163d4b8d487bb2c3ade6e7aad7dda588.svg" alt="" />
                </div>
                <span className="title">Android</span>
              </div>
              <div className="list-item">
                <div className="img">
                  <img src="https://geeksinvention.com/assets/software-platforms/hybrid-b835b200edfc426c9f5a6ef76412aff6.svg" alt="" />
                </div>
                <span className="title">Hybrid</span>
              </div>
            </div>
            <div className="group">
              <div className="list-item">
                <div className="img">
                  <img src="https://geeksinvention.com/assets/software-platforms/wear-6f1886d1d03002e8fe1d04e499125d00.svg" alt="" />
                </div>
                <span className="title">Wearables</span>
              </div>
              <div className="list-item">
                <div className="img">
                  <img src="https://geeksinvention.com/assets/software-platforms/tv-f6c551eb20333d6604e9fff685c392d1.svg" alt="" />
                </div>
                <span className="title">TV</span>
              </div>
            </div>
          </div>
          <div className="more-tech">
            <button className="btn btn_orange" href="technologies/index.html">
              <span>See our tech stack</span>
            </button>
          </div>
        </div>
        <div className="dedicated-teams">
          <div className="dt-header">
            <div className="dt-title">
              <h2>Only dedicated teams</h2>
            </div>
            <div className="dt-text">
              <p>
                Our team is 100% concentrated on your project and you have full control over management of the dedicated team members.
              </p>
            </div>
          </div>
          <ul className="dt-features">
            <li className="feature-item">
              <div className="img">
                <img src="https://geeksinvention.com/assets/dedicated-teams/agile-0aab98f2053db8490987560a2e9f37fe.svg" alt="" />
              </div>
              <span className="title">Agile approach</span>
            </li>
            <li className="feature-item">
              <div className="img">
                <img src="https://geeksinvention.com/assets/dedicated-teams/deep-tech-7f909bfebb1eebf6eda5832f658cbbaa.svg" alt="" />
              </div>
              <span className="title">Deep tech expertise</span>
            </li>
            <li className="feature-item">
              <div className="img">
                <img src="https://geeksinvention.com/assets/dedicated-teams/pc-293103263e599a94d7a2d886fab89b42.svg" alt="" />
              </div>
              <span className="title">Personal commitment</span>
            </li>
          </ul>
          <ul className="dt-features">
            <li className="feature-item">
              <div className="img">
                <img src="https://geeksinvention.com/assets/dedicated-teams/reg-rep-732453cad7b07eb4cc4147fa41423c4a.svg" alt="" />
              </div>
              <span className="title">Regular reporting</span>
            </li>
            <li className="feature-item">
              <div className="img">
                <img src="https://geeksinvention.com/assets/dedicated-teams/time-track-d7afee36956a4a6c0bb1e734af7909fc.svg" alt="" />
              </div>
              <span className="title">Time tracking</span>
            </li>
            <li className="feature-item">
              <div className="img">
                <img src="https://geeksinvention.com/assets/dedicated-teams/scale-33474d0929577c56ca4d116820e24ee8.svg" alt="" />
              </div>
              <span className="title">Scalability</span>
            </li>
          </ul>
          <div className="more-tech">
            <button className="btn btn_orange" href="services/index.html">
              <span>See our services</span>
            </button>
          </div>
        </div>
      </section>
      <footer>
        <div className="info better section-ready-to-contact">
          <div className="info__w">
            <div className="info__i">
              <div className="info__title">
                <h2>Get to know us better!</h2>
              </div>
              <div className="info__text">
                <p>
                  It is a pleasure to have you on our website. Let us know if there's an opportunity to do something together.
                </p>
              </div>
              <button className="btn btn_full-orange" href="contacts/index.html">Drop us a message</button>
            </div>
          </div>
        </div>
        <div className="footer-top clearfix">
          <div className="footer-logo">
            <button rel="nofollow" href="index.html">
              <img src="fonts/geeks-logo-white.svg" alt="" />
            </button>
            <p> 447 Broadway, 2nd Floor Suite #772, New York 10013, United States
              <br /> +1-347-535-0004 </p>
          </div>
          <nav>
            <ul className="clearfix">
              <li>
                <button rel="nofollow" href="works/">
                  <span>Works</span>
                </button>
              </li>
              <li>
                <button rel="nofollow" href="technologies/">
                  <span>Technologies</span>
                </button>
              </li>
              <li>
                <button rel="nofollow" href="services/">
                  <span>Services</span>
                </button>
              </li>
              <li>
                <button rel="nofollow" href="about/">
                  <span>Company</span>
                </button>
              </li>
              <li>
                <button rel="nofollow" href="contacts/">
                  <span>Contacts</span>
                </button>
              </li>
              <li>
                <button href="terms.html">
                  <span>Terms and Conditions</span>
                </button>
                <button href="privacy.html">
                  <span>Privacy Policy</span>
                </button>
              </li>
            </ul>
          </nav>
          {/* <div class="socials">
              <ul>
                  <li>
                      <button href="#" target="_blank" rel="nofollow">
                          <i class="icon-facebook"></i>
                      </button>
                  </li>
                  <li>
                      <button href="#" target="_blank" rel="nofollow">
                          <i class="icon-twitter"></i>
                      </button>
                  </li>
                  <li>
                      <button href="#" target="_blank" rel="nofollow">
                          <i class="icon-github"></i>
                      </button>
                  </li>
                  <li>
                      <button href="#" target="_blank" rel="nofollow">
                          <i class="icon-dribbble"></i>
                      </button>
                  </li>
                  <li>
                      <button href="#" target="_blank" rel="nofollow">
                          <i class="icon-behance"></i>
                      </button>
                  </li>
                  <li>
                      <button href="#" target="_blank" rel="nofollow">
                          <i class="icon-telegram"></i>
                      </button>
                  </li>
              </ul> */}
          <button rel="nofollow" href="#" className="btn btn_white subscription-dialog" data-toggle="modal" data-target="#subscribeModal" data-backdrop="static">Stay tuned for our updates</button>
        </div>
        <div className="footer-bottom">
          <p>©&nbsp;Copyright 2023
            <span> – Mobile App Design and Development Company</span>. All Rights Reserved</p>
        </div>
      </footer>
      <header className="clearfix">
        <nav className="head">
          <div className="nav__i">
            <ul className="header-nav clearfix">
              <li className="header-menu-item">
                <button className="active" href="index.html">HOME</button>
              </li>
              <li className="header-menu-item">
                <button rel="nofollow" href="works/index.html">WORKS</button>
              </li>
              <li className="header-menu-item">
                <button href="technologies/index.html">TECHNOLOGIES</button>
              </li>
              <li className="header-menu-item">
                <button href="services/index.html">SERVICES</button>
              </li>
              <li className="header-menu-item">
                <button rel="nofollow" href="about/index.html">COMPANY</button>
              </li>
              {/* <li class="header-menu-item">
                  <button href="#">BLOG</button>
              </li>*/}
              <li className="header-menu-item">
                <button rel="nofollow" href="contacts/index.html">CONTACTS</button>
              </li>
            </ul>
          </div>
        </nav>
        <button href="index.html">
          <img src="https://geeksinvention.com/assets/v2/content/geeks-logo-white.svg" alt="" />
        </button>
        <button href="#" className="device-menu">
          <div className="device-menu__i">
            <span />
            <span />
            <span />
          </div>
        </button>
      </header>
      <div className="modal fade modal-subscribe" id="subscribeModal" tabIndex={-1} role="dialog">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <div className="modal-dtable">
          <div className="modal-dtcell">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <form className="form form-light form-subscribe" id="subscribe-form">
                  <h3>Liked the article? You will like our email too!</h3>
                  <div className="form-field field-email">
                    <div className="form-input-holder">
                      <label className="form-label">Enter your email address</label>
                      <input className="form-input" />
                    </div>
                    <div className="form-error-text" />
                  </div>
                  <div className="form-field field-subscribe-categories">
                    <label className="form-checkbox-label">
                      <input defaultValue="Technology" data-uniform type="checkbox" defaultChecked /> Technology
                    </label>
                    <label className="form-checkbox-label">
                      <input defaultValue="Design" data-uniform type="checkbox" defaultChecked /> Design
                    </label>
                    <label className="form-checkbox-label">
                      <input defaultValue="Product development" data-uniform type="checkbox" defaultChecked /> Product development
                    </label>
                  </div>
                  <div className="form-controls">
                    <button className="btn btn_orange btn-subscribe">
                      Subscribe
                    </button>
                  </div>
                </form>
                <div id="subscribe-complete" className="confirmation">
                  <h3>Liked the article? You will like our email too!</h3>
                  <img alt="" src="fonts/checked-290b204f636fc6fdfa52a665b309edd2.svg" />
                  <p>Thank you for your contact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
