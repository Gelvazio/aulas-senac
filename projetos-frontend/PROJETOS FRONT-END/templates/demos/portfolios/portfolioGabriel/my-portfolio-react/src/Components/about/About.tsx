import React from "react";
import "./about.scss";
import ME from "../../Assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { Link } from "../styled/Button";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                I have a wide range of experience in the field of web
                development.
              </small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Continuous Improvement</h5>
              <small>
                I try to learn a new skill everyday or improve an existent one.
              </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                A wide variety of projects. Check out my{" "}
                <Link
                  aria-label="Go to my Github"
                  href="https://github.com/Sn0wye"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </Link>
                !
              </small>
            </article>
          </div>

          <p>
            I&apos;m the kind of guy who learns everything I like incredibly
            fast and self-taught. and if I really like it, I will learn.
            <br />
            <q>
              Patience, persistence and perspiration make an unbeatable
              combination for success.
            </q>
            <br />
            <cite>- Napoleon Hill</cite>
          </p>

          <Link href="#contact" type="button" color="primary">
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
