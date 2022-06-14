import "./App.css";

import rubyLogo from '../public/ruby_logo.svg';
import railsLogo from '../public/rails_logo.svg';
import jsLogo from '../public/js_logo.svg';
import reactLogo from '../public/react_logo.svg';

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
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Optio amet iure ea,
                  commodi sunt iusto quasi quae repudiandae
                  voluptate ducimus earum voluptatem ex quaerat
                  accusantium cumque nostrum, quis doloremque
                  ipsa!

                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Optio amet iure ea,
                  commodi sunt iusto quasi quae repudiandae
                  voluptate ducimus earum voluptatem ex quaerat
                  accusantium cumque nostrum, quis doloremque
                  ipsa!
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
      </div>
    );
};

export default App;
