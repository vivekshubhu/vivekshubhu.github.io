import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import pic8 from '../assets/images/pic08.jpg';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hello! I'm <strong>Vivek</strong>
              <br />
              Web developer
            </h2>
            <p>I have made few things check it out.</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <p>
            Most of the projects I have done are in laravel and vue.
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a target="_blank" rel="noreferrer" href="https://fitengineeringsurvey.com/" className="image fit">
                  <img src={pic2} alt="" />
                </a>
                <header>
                  <h3>Engineering Survey(Laravel & Vue)</h3>
                </header>
              </article>
              <article className="item">
                <a target="_blank" rel="noreferrer" href="https://covid19iinfo.netlify.app" className="image fit">
                  <img src={pic3} alt="" />
                </a>
                <header>
                  <h3>Covid Info App(React)</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a target="_blank" rel="noreferrer" href="https://weatheriinfo.netlify.app/" className="image fit">
                  <img src={pic4} alt="" />
                </a>
                <header>
                  <h3>Weather App(Vue)</h3>
                </header>
              </article>
              <article className="item">
                <a target="_blank" rel="noreferrer" href="https://condescending-yonath-2d2843.netlify.app" className="image fit">
                  <img src={pic5} alt="" />
                </a>
                <header>
                  <h3>Template View(React)</h3>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a target="_blank" rel="noreferrer" href="https://github.com/vivekshubhu/vanilla-js-carousel" className="image fit">
                  <img src={pic6} alt="" />
                </a>
                <header>
                  <h3>To Github (Js Carousel)</h3>
                </header>
              </article>
              <article className="item">
                <a target="_blank" rel="noreferrer" href="https://github.com/vivekshubhu/user-roles-laravel" className="image fit">
                  <img src={pic7} alt="" />
                </a>
                <header>
                  <h3>To Github (Roles in Laravel)</h3>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a href="/#" className="image featured">
            <img src={pic8} alt="" />
          </a>

          <p>
            I am a full stack web developer, been working about 3 years with Laravel
            and Vue Js. Now I am learing React, Next js, gatsby, graphQl, node.
            I am also interested in UI design and learing to design in Figma. 
          </p>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <p>
            Phone:9860134237
          </p>
          <p>
            Email:bibek.karki001@gmail.com
          </p>

          {/* <form method="post" action="#">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form> */}
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
