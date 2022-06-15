import "./App.css";

import rubyLogo from '../public/ruby_logo.svg';
import railsLogo from '../public/rails_logo.svg';
import jsLogo from '../public/js_logo.svg';
import reactLogo from '../public/react_logo.svg';
import githubLogo from '../public/github_logo.svg';
import linkedinLogo from '../public/linkedin_logo.svg';

const App = () => {
  return (
    <div className="container">
      <div className="intro">
        <div className="intro-content">
          <div className="who-and-what">
            <h1>Eddie Rosas</h1>
            <h3>Fullstack Developer</h3>
          </div>
          <div className="what-text">
            Hi! I've developing web apps in the fullstack context since 2020.
            I love doing my head-down work as well as engaging in thoughtful
            collaboration with peers to solve complex problems. I'm a firm believer
            and practitioner of maintable, flexible, and well-tested code; no matter the
            development end. To me, both sides of the equation contribute heavily to the
            resulting user experience--and being user focused is top a level priority.
          </div>
        </div>
      </div>
      <div className="techs">
        <div className="main-techs">
          <h2>
            Primary Technologies:
          </h2>
          <ul>
            <li>
              <img src={rubyLogo} id="ruby-logo" alt="" />
              <h3>Ruby</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Esse exercitationem
                iusto sunt optio fugiat accusamus dolor
                sapiente sequi quibusdam quisquam repellat
                minima atque enim, perferendis totam
                cupiditate natus aut illum.
              </p>
            </li>
            <li>
              <img src={railsLogo} id="rails-logo" alt="" />
              <h3>Ruby on Rails</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Esse exercitationem
                iusto sunt optio fugiat accusamus dolor
                sapiente sequi quibusdam quisquam repellat
                minima atque enim, perferendis totam
                cupiditate natus aut illum.
              </p>
            </li>
            <li>
              <img src={jsLogo} id="javascript-logo" alt="" />
              <h3>JavaScript</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Esse exercitationem
                iusto sunt optio fugiat accusamus dolor
                sapiente sequi quibusdam quisquam repellat
                minima atque enim, perferendis totam
                cupiditate natus aut illum.
              </p>
            </li>
            <li>
              <img src={reactLogo} id="react-logo" alt="" />
              <h3>React</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Esse exercitationem
                iusto sunt optio fugiat accusamus dolor
                sapiente sequi quibusdam quisquam repellat
                minima atque enim, perferendis totam
                cupiditate natus aut illum.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="contact-display">
        <ul className="contact-links">
          <li>
            <a href="https://github.com/EddieRosas">
              <img src={githubLogo} id="github_logo" alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/eddierosas/">
              <img src={linkedinLogo} id="linkedin_logo" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
