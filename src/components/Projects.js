// Projects.js
import "./Projects.css";

function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {/* First Project Card */}
        <div className="project-card">
          <img src="/images/upamanyu-academy.jpg" alt="Project 1" />
          <h3>Animating Heart</h3>
          <p>
            A website which animates heart infront of your very eyes written in
            python. This is a completed project.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/prajwalol/heart"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="http://www.mysitemyway.com/underconstruction"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* Second Project Card */}
        <div className="project-card">
          <img
            src="https://freerangestock.com/sample/118832/clipboard-and-checklist-vector-icon.jpg"
            alt="Project 2"
          />
          <h3>To-do list</h3>
          <p>
            A To-do list to keep track of things you have yet to complete. This
            project is not completed and is under development.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/prajwalol/flask-todo"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="http://www.example.com/live-demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
