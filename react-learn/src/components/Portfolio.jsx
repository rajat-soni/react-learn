// src/components/Header.jsx

import { FaPhoneAlt, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaFacebook, FaLinkedin } from "react-icons/fa";
import "./Hero.css";
import rajatImg from "../assets/useimage/new-Rajat.jpg";

function Portfolio() {
  return (
    <div className="container hero-section shadow">
      <div className="row hero-row ">
       
       <div className= "col-9 col-md-9 col-sm-9 col-lg-9 ">
        <h1 className = "typing-text">Rajat Soni</h1>
        <h4 className = "bio">Web Developer</h4>
       </div>
        <div className="col-3 col-md-3 col-sm-3 col-lg-3 left section">
      
      <div className="info-item">
        <FaPhoneAlt className="icon" />
        <span>9935526860</span>
      </div>

      <div className="info-item">
        <FaEnvelope className="icon" />
        <a href="mailto:simon@yourwebsite.com">rj.rajatsoni221@gmail.com</a>
      </div>

      <div className="info-item">
        <FaGlobe className="icon" />
        <a href="https://www.yourwebsite.com">www.yourwebsite.com</a>
      </div>

      <div className="info-item">
        <FaMapMarkerAlt className="icon" />
        <span>Delhi,India</span>
      </div>

    </div>
     <hr></hr>
      </div>

      <div className="row align-items-center">
						<div className="col-12 col-md-3 col-xl-2 text-center">
						    <img className="resume-profile-image mb-3 mb-md-0 me-md-5  ms-md-0 rounded-circle mx-auto" src={rajatImg} alt="image" />
						</div>
						
						<div className="col text-start">
							<p className="mb-0">Summarise your career here. <a className="theme-link" href="https://themes.3rdwavemedia.com/resources/sketch-template/resume-sketch-sketch-resume-template-for-software-developers/" target="_blank">You can make a PDF version of your resume using our free Sketch template here</a>. Donec quam felis, ultricies nec, pellentesque eu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.  Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. </p>
						</div>
					</div>
          <hr></hr>
          <div className="row mb-4">
            <div className="col-7 text-start">
              <h5 className="mb-3 section-title">Experince</h5>    
              <h5 className="mb-1 para">Web Developer at XYZ Company</h5>
              <p className="mb-1 para" style={{float:'right'}}><em className="para"> Jan 2024 - Present</em></p>
              <ul className="skills-list">
                <li>Developed and maintained web applications using React and Node.js.</li>
                <li>Collaborated with cross-functional teams to define project requirements.</li>
                <li>Implemented responsive design principles to ensure optimal user experience across devices.</li>
              </ul>

              <h5 className="mb-1 para">Web Developer at XYZ Company</h5>
              <p className="mb-1 para" style={{float:'right'}}><em className="para">Jan 2022-2023</em></p>
              <ul className="skills-list">
                <li>Developed and maintained web applications using React and Node.js.</li>
                <li>Collaborated with cross-functional teams to define project requirements.</li>
                <li>Implemented responsive design principles to ensure optimal user experience across devices.</li>
              </ul>

               <h5 className="mb-1 para">Web Developer trainee at XYZ Company</h5>
              <p className="mb-1 para" style={{float:'right'}}> <em className="para">Jan 2020-2021</em></p>
              <ul  className="skills-list">
                <li>Developed and maintained web applications using React and Node.js.</li>
                <li>Collaborated with cross-functional teams to define project requirements.</li>
                <li>Implemented responsive design principles to ensure optimal user experience across devices.</li>
              </ul>

              <h5 className ="mb-0 mt-4 section-title">Projects</h5>
              <ul className="skills-list">
                 <h5 className ="mb-1 para">Portfolio Website:</h5>
                <li>Portfolio Website: Developed a personal portfolio website using React to showcase projects and skills.</li>
                </ul>
                <h5 className ="mb-1 para">Projects</h5>
                  <p className="mb-1 para" style={{float:'right'}}><em className="para">Open Source</em></p>
                <ul className="skills-list">
                <li>E-commerce Platform: Built a full-stack e-commerce application with user authentication, product listings, and a shopping cart using MERN stack.</li>
              </ul> 
              <h5 className ="mb-1 para">Blog Projects</h5>
              <p className="mb-1 para" style={{float:'right'}}><em className="para">Open Source</em></p>
              <ul className="skills-list">
                <li>Blog Application: Created a blogging platform where users can create, edit, and delete posts. Implemented RESTful APIs using Express.js and MongoDB for data storage.</li></ul><br></br>
                 <h5 className ="mb-1 para">Task Management Tool</h5>
                 <p className="mb-1 para" style={{float:'right'}}><em className="para">Open Source</em></p>
              <ul className="skills-list">
                <li>Task Management Tool: Developed a task management application with features like task creation, editing, and deletion. Used React for the frontend and Node.js for the backend.</li>
                
              </ul> 
            </div>
<div className="col-1 d-flex justify-content-center">
    <div className="divider"></div>
  </div>


             <div className="col-4 text-start mb-4" >
              <h5 className="mb-3 section-title">SKILLS</h5>
              <h6 className = "heading">Technical Skills</h6>
              <ul className="skills-list">
                <li>React/JavaScript, Es6</li>
                <li>Html,CSS,Bootstrap</li>
                <li>Node JS, Express Js,Php</li>
                <li>MySql</li>
                <li>Jquery</li>
                 <li>Object-oriented design</li>
                <li>Design and implement database structures</li>
                <li>Strong problem solver</li>
                
                
              </ul>

              <h5 className="mb-3 section-title mt-4">Education</h5>
              <div className="education-item mb-3">
                <h6 className="mb-1">Master of Caommputer Application</h6>
                <p className="mb-0"><em>ABC University, 2016 - 2020</em></p>  
                </div>

              <div className="education-item mb-3">
                <h6 className="mb-1">Bachelor of Computer Application</h6>
                <p className="mb-0"><em>XYZ University, 2013 - 2016</em></p>
                </div>
                

                <h5 className="mb-3 section-title mt-4">Hobbies</h5>
                <div className="education-item mb-3">
                <ul className="skills-list">
                  <li>Reading Books</li>
                  <li>Traveling</li>
                  <li>Cycling</li>
                </ul>

                <h5 className="mb-3 section-title mt-4">Languages</h5>
                <div className="education-item mb-3">
                <ul className="skills-list">
                  <li>English</li>
                  <li>Hindi</li>
                  <li>French</li>
                </ul>
                </div>

                <h5 className="mb-3 section-title mt-4">Professional</h5>
                <div className="education-item mb-3">
                <ul className="skills-list">
                  <li>Effective Communication</li>
                  <li>Team Collaboration</li>
                  <li>Time Management</li>
                </ul>
                </div>
                
                </div>


            </div>
             
           </div>
           <hr></hr>
           <div className = "row d-flex justify-content-center mb-3 footer">
            <span className=" d-flex justify-content-center info-item">
                <FaEnvelope className="icon " />
        <a href="mailto:rj.rajatsoni221@gmail.com">rj.rajatsoni221@gmail.com</a>
        &nbsp;&nbsp;
  <FaLinkedin className="icon " />
        <a href="https://www.linkedin.com/in/rajat-soni-web-dev/">https://www.linkedin.com/in/rajat-soni-web-dev/</a>
        &nbsp;&nbsp;
    <FaEnvelope className="icon " />
        <a href="mailto:simon@yourwebsite.com">rj.rajatsoni221@gmail.com</a>
            </span>
            </div>

    </div>
  );
}

export default Portfolio;
