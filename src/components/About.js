import React from "react";
import "./About.css";
import TypingEffect from "react-typing-effect";
const About = () => {
  return (
    <section id="about" className="p-4">
      <img className="profile-image" src="/images/my-image.jpg" alt="me" />

      <h2 className="intro-text">
        {" "}
        <TypingEffect
          text={["Hello! I’m Prajwal,"]}
          speed={100}
          eraseSpeed={50}
          eraseDelay={2000}
          typingDelay={500}
          cursorColor="#000"
        />
      </h2>
      <p>
        Computer Science student at Westcliff University and an aspiring
        developer with a passion for web development and AI. Currently diving
        into Data Structures and Algorithms (DSAs) to strengthen my
        problem-solving skills. I believe in learning through real-world
        projects and am eager to explore, create, and grow. I’m excited to
        explore new concepts and improve my coding abilities. Feel free to reach
        out if you’d like to connect, collaborate, or share ideas!
      </p>
    </section>
  );
};

export default About;
