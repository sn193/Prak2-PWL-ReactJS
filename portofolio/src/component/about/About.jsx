import "./about.css"
import profil from "../../img/profil.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={profil}
          alt="" 
          className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me </h1>
        <p className="a-desc">
        I am one of student in ITERA. Now, I am  in 6th semester. During learning process, I am interested to Cybersecurity and Pervasive which is one of to be my skills and I like to sharpen even  I want to know it deeply toward  my ability especially the topic is Internet of Things. Moreover,  I  aware that Great academic must be balance toward my soft skills. I like to taking and solving problem in good way decision,  responsible, team work and dicpline. 
        </p>
      </div>
    </div>
  );
}

export default About;
