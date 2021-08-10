import '../App.css';
import mepic from '../img/nbme.JPG';
import Header from './header';
import Footer from './footer';

function About() {
  return (
    <div>
      <div className="full-page">
      <Header />
    <div className="aboutpg col">
      <h2 className="my-name">Sigríður Ösp Green Sigurðardóttir</h2>
      <div className="about-me row">
        <div id="me-pic-cont">
          <img src={mepic} id="mephoto" alt="Sigga"></img>
        </div>
        <div id="abt-me-text">
					<p>Hi there! I'm Sigga, a Front-end developer from Iceland currently living in Berlin. I've recently finished my final year of computer science with the University of Iceland and am very excited to start getting some hands on experience in web development.</p>
					<p>During my time at university I've learned a wide variety of skills, but I've taken a special liking to web development and UX. Currently I am focusing on gaining a better understanding of React, as well as getting more experience in backend languages and frameworks.</p>
					<p>In my free time I can be found busy in the kitchen or curling up with my cats, reading. I also have a huge interest in board games and tabletop RPGs.</p>
				</div>
      </div>
    </div>
    </div>
    <Footer />
    </div>
  );
}

export default About;
