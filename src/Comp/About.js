import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpeg";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              Hello, I’m NARMADHA, a web developer.
              I’ve been working as a web developer for a few years now, and I’m passionate about everything that goes 
              into making websites work well and look beautiful. The web is my passion because it’s where I can find 
              the most exciting projects to work on. It’s also where I get to express my creativity in ways that are 
              hard to find elsewhere.
              
              </p>
              <p className="about__text p__color">
              I love working with clients who want something more than just another website; they want their site to
               be more than just another website. They want it to be memorable, engaging, and valuable—and that’s 
               where I come in!
              </p>
              <p className="about__text p__color">
              I am self-taught, but I honestly believe that with the amount of tutorials on YouTube, and in the WordPress community,
              one can learn everything–including HTML,CSS and PHP, without going to college.
               I’ve tried to make my living as a freelance front end web developer.
              Simply enjoy working on the code, developing beautiful websites, and that’s why I apply for this job with you.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
