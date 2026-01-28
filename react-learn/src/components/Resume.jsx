import rajatImg from "../assets/useimage/new-Rajat.jpg";
import {  FaPhoneAlt,  FaEnvelope, FaGlobe,  FaGithub,  FaMapMarkerAlt,  FaFacebook,  FaLinkedin,  FaPhone,} from "react-icons/fa";
import "./Resume.css";

function ProfileHeader() {
  return (
    <>
  
      <div className="container header-bg shadow">
        <div className="row align-items-center main">
          {/* LEFT: IMAGE */}
          <div className="col-3 image-col p-0">
            <img src={rajatImg} alt="profile" className="profile-img" />
          </div>

          {/* CENTER: INFO */}
          <div className="col-6 info-col p-0">
            <h1 className="name">Rajat Soni</h1>
            <h3 className="role">Full Stack Developer</h3>

            <div className="info-item">
              <FaEnvelope />
              <span>rj.rajatsoni@gmail.com</span>
            </div>

            <div className="info-item">
              <FaPhone />
              <span>+919935526860</span>
            </div>
          </div>

          {/* RIGHT: SOCIAL LINKS */}
          <div className="col-3 social-col">
            <div className="social-item">
              <FaLinkedin />
              <span>linkedin.com/in/stevedoe</span>
            </div>

            <div className="social-item">
              <FaGithub />
              <span>github.com/username</span>
            </div>

            <div className="social-item">
              <FaGlobe />
              <span>yourwebsite.com</span>
            </div>
          </div>
        </div>
      

     
        <div className="row">
          <div className="col-12 address-col p-5 ">
            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
            <hr></hr>
            <p>
              Experienced Full Stack Developer with a demonstrated history of
              working in the information technology and services industry.
              Skilled in JavaScript, React, Node.js, and database management,
              with hands-on experience in building responsive, high-performance
              web applications. Proficient in RESTful APIs, third-party
              integrations, and modern frontend frameworks, ensuring seamless
              user experiences.
              <br></br>
              Strong engineering professional with a Bachelor’s degree in
              Computer Science from XYZ University. Adept at writing clean,
              maintainable code and following best practices in software
              development. Passionate about solving real-world problems through
              scalable, secure, and efficient solutions, and continuously
              learning cutting-edge technologies to stay ahead in a rapidly
              evolving tech landscape.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-8 address-col p-5">
            <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
            <h5 className="h5">Full Stack Developer | Tech Solutions Inc.</h5>
            <span className="work-duration">Jan 2025 - Present</span>
            <ul>
              <li>
                Developed and maintained web applications using React for       
                frontend and Node.js for backend, ensuring responsive design
                and optimal performance.
              </li>
                <li>    
                Collaborated with cross-functional teams to define project
                requirements, design system architecture, and implement new
                features.
                </li>
                <li>    
                Integrated third-party APIs and services to enhance application
                functionality and user experience.
                </li>
                <li>    
                Implemented database solutions using MongoDB and SQL, optimizing
                data retrieval and storage processes.
                </li>
            </ul> 
            <h6> Technology Used</h6>
           <ul className="list-inline">
            <li className="list-inline-item"><span className="badge bg-secondary badge-pill">React</span></li>
              <li className="list-inline-item"><span className="badge bg-secondary badge-pill">Express.js</span></li>
											    <li className="list-inline-item"><span className="badge bg-secondary badge-pill">Bootstrap & Tailwind CSS</span></li>
											    <li className="list-inline-item"><span className="badge bg-secondary badge-pill">JavaScript, ES9</span></li>
											    <li className="list-inline-item"><span className="badge bg-secondary badge-pill">Node.js</span></li>
											    <li className="list-inline-item"><span className="badge bg-secondary badge-pill">JQuery</span></li>
											    <li className="list-inline-item"><span className="badge bg-secondary badge-pill">HTML/Css</span></li>
										    </ul>
            <h5 className="h5">Junior Developer | Web Innovators LLC</h5>
            <span className="work-duration">Jun 2023 - Dec 2024</span>
            <h6>Project Namae</h6>
            <ul>    
                <li>

                Assisted in the development of web applications, focusing on
                frontend components using HTML, CSS, and JavaScript.
                </li>
                <li>    
                Participated in code reviews and collaborated with senior
                developers to improve coding standards and practices.
                </li>
                <li>    
                Conducted testing and debugging to ensure application stability
                and performance across different browsers and devices.
                </li>
            </ul>
            <h6> Technology Used</h6>
           <ul className="list-inline">
            <li className="list-inline-item"><span className="badge bg-secondary badge-pill">React</span></li>
              <li className="list-inline-item"><span className="badge bg-secondary badge-pill">Express.js</span></li>
											    <li className="list-inline-item"><span className="badge bg-secondary badge-pill">Bootstrap & Tailwind CSS</span></li>
											    <li className="list-inline-item"><span className="badge bg-secondary badge-pill">JavaScript, ES9</span></li>
											    <li className="list-inline-item"><span className="badge bg-secondary badge-pill">Node.js</span></li>
											    <li className="list-inline-item"><span className="badge bg-secondary badge-pill">JQuery</span></li>
											    <li className="list-inline-item"><span className="badge bg-secondary badge-pill">HTML/Css</span></li>
                                                <li className="list-inline-item"><span className="badge bg-secondary badge-pill">Php</span></li>
										    </ul>
            <h5 className="h5">Intern | Startup Hub</h5>
            <span className="work-duration">Jan 2021 - May 2023</span>
            <ul>    
                <li>
                Gained hands-on experience in web development by contributing to
                small projects and assisting in bug fixes.
                </li>
                <li>    
                Learned about version control systems, agile methodologies, and
                collaborative development workflows.
                </li>
            </ul> 
            <h6> Technology Used</h6>
           <ul className="list-inline">
           
											    <li className="list-inline-item"><span className="badge bg-secondary badge-pill">Bootstrap & Tailwind CSS</span></li>
											    <li className="list-inline-item"><span className="badge bg-secondary badge-pill">JavaScript, ES9</span></li>
											    <li className="list-inline-item"><span className="badge bg-secondary badge-pill">Node.js</span></li>
											    <li className="list-inline-item"><span className="badge bg-secondary badge-pill">JQuery</span></li>
											    <li className="list-inline-item"><span className="badge bg-secondary badge-pill">HTML/Css</span></li>
                                                <li className="list-inline-item"><span className="badge bg-secondary badge-pill">Php</span></li>
										    </ul>  
          </div>

          <div className="col-4 address-col p-5">
            <h4>Skill and Tools</h4>
            <h5  className = "h5">Frontend</h5>
            <ul className="skill-list">
              <li>React</li>
              <div className="progress resume-progress">
                <div
                  className="progress-bar theme-progress-bar-dark"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="40"
                ></div>
              </div>
              <li>HTML & CSS</li>
              <div className="progress resume-progress">
                <div
                  className="progress-bar theme-progress-bar-dark"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="40"
                ></div>
              </div>
              <li> Bootstrap & Tailwind CSS</li>
              <div className="progress resume-progress">
                <div
                  className="progress-bar theme-progress-bar-dark"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="20"
                ></div>
              </div>

              <h5  className = "h5">Backend</h5>
              <li> Node js</li>
              <div className="progress resume-progress">
                <div
                  className="progress-bar theme-progress-bar-dark"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="20"
                ></div>
              </div>
              <li>MongoDB</li>
              <div className="progress resume-progress">
                <div
                  className="progress-bar theme-progress-bar-dark"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="40"
                ></div>
              </div>
              <li>Express.js</li>
              <div className="progress resume-progress">
                <div
                  className="progress-bar theme-progress-bar-dark"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="40"
                ></div>
              </div>
              <li>Php</li>
              <div className="progress resume-progress">
                <div
                  className="progress-bar theme-progress-bar-dark"
                  role="progressbar"
                  style={{ width: "85%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="40"
                ></div>
              </div>
            </ul>
           
            <h5  className = "h5">Education</h5>
            <ul className="skill-list">
              <li>Master of Computer Applications (MCA)</li>
              2016-2018
              <li>Bachelor of Computer Applications (BCA)</li>
            2013-2016
            </ul>

                 <h5  className = "h5">Intrest</h5>
            <ul className="skill-list">
              <li>Web Development</li>
              <li>Data Structures & Algorithms</li>
              <li>UI/UX Design</li>
              <li>Open Source Contribution</li>
              </ul>
                
                   <h5  className = "h5">languages</h5>
            <ul className="skill-list">
              <li>English</li>
              <li>Hindi</li>
              <li>Gujarati</li>
            </ul>
          </div>
         
        </div>
      </div>
  
    </>
  );
}

export default ProfileHeader;
