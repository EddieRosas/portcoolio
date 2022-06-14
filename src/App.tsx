import "./App.css";

import rubyLogo from '../public/ruby_logo.svg';

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
                    <ul>
                        <li>
                            <img src={rubyLogo} id="ruby-logo" alt="" />
                            <h3>Ruby</h3>
                        </li>
                        <li>
                            <img src={rubyLogo} id="ruby-logo" alt="" />
                            <h3>Ruby</h3>
                        </li>
                        <li>
                            <img src={rubyLogo} id="ruby-logo" alt="" />
                            <h3>Ruby</h3>
                        </li>
                        <li>
                            <img src={rubyLogo} id="ruby-logo" alt="" />
                            <h3>Ruby</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default App;
