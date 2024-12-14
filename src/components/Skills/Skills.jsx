import React , {useEffect} from 'react'
import './skills.css'

const Skills = () => {


    useEffect(() => {
        const progressBars = document.querySelectorAll('.progress-line');
    
        progressBars.forEach((bar, index) => {
          const skillPercentages = [90, 70, 85, 75, 70, 75, 80]; // Replace with your actual skill percentages
          const targetWidth = `${skillPercentages[index]}%`;
          bar.style.setProperty('--target-width', targetWidth);
        });
      }, []);



  return (
    <>

        <section className='skills-section' id='skills'>
            <h1 className="skill-title py-5">My <span>Skills</span></h1>

                <div className="container d-flex align-item-center justify-content-between">

                    {/* technical skill section */}
                    <div className="technical-skills ml-4">
                        <h1 className="technical-skills-heading mb-5 text-centered">Technical Skills</h1>
                            <div className="skill-technical-bars">
                                <div className="bar mt-5">
                                    <i class='bx bxl-html5' style={{color:'#c95d2e'}}></i>
                                    <div className="tech-info">
                                        <span>HTML</span>
                                    </div>
                                    <div className="progress-line html mb-5">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="bar">
                                    <i class='bx bxl-css3' style={{color:'#147bbc'}}></i>
                                    <div className="tech-info">
                                        <span>CSS</span>
                                    </div>
                                    <div className="progress-line css mb-5">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="bar">
                                    <i class='bx bxl-javascript' style={{color:'#b0bc1e'}}></i>
                                    <div className="tech-info">
                                        <span>JavaScript</span>
                                    </div>
                                    <div className="progress-line javascript mb-5">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="bar">
                                    <i class='bx bxl-react' style={{color:'#69bcbc'}} ></i>
                                    <div className="tech-info">
                                        <span>Reactjs</span>
                                    </div>
                                    <div className="progress-line reactjs mb-5">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="bar">
                                    <i class='bx bxl-nodejs' style={{color:'#68A063'}} ></i>
                                    <div className="tech-info">
                                        <span>Nodejs</span>
                                    </div>
                                    <div className="progress-line nodejs mb-5">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="bar">
                                    <i class='bx bxl-mongodb' style={{color:'#589636'}} ></i>
                                    <div className="tech-info">
                                        <span>MongoDB</span>
                                    </div>
                                    <div className="progress-line mongodb mb-5">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="bar">
                                    <i class='bx bx-code' style={{color:'#FF00FF'}} ></i>
                                    <div className="tech-info">
                                        <span>DSA</span>
                                    </div>
                                    <div className="progress-line dsa mb-5">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* technical skill section end here */}


                        {/* professional skills section starts from here */}
                        <div className="professional-skills mr-5">
                            <h1 className="professional-skills">Professional Skills</h1>
                            <div className="radial-bars">

                                <div className="radial-bar">
                                    <svg x="0px" y='0px' viewBox='0 0 200 200'>
                                        <circle className='progress-bar' cx={100} cy={100} r={80}></circle>
                                        <circle className='path path-1' cx={100} cy={100} r={80}></circle>
                                    </svg>
                                    <div className="percentage">90%</div>
                                    <div className="professional-text">Creativity</div>
                                </div>
                                <div className="radial-bar">
                                    <svg x="0px" y='0px' viewBox='0 0 200 200'>
                                        <circle className='progress-bar' cx={100} cy={100} r={80}></circle>
                                        <circle className='path path-2' cx={100} cy={100} r={80}></circle>
                                    </svg>
                                    <div className="percentage">70%</div>
                                    <div className="professional-text">Communication</div>
                                </div>
                                <div className="radial-bar">
                                    <svg x="0px" y='0px' viewBox='0 0 200 200'>
                                        <circle className='progress-bar' cx={100} cy={100} r={80}></circle>
                                        <circle className='path path-3' cx={100} cy={100} r={80}></circle>
                                    </svg>
                                    <div className="percentage">80%</div>
                                    <div className="professional-text">Problem Solving</div>
                                </div>
                            <div className="radial-bar">
                                <svg x="0px" y='0px' viewBox='0 0 200 200'>
                                    <circle className='progress-bar' cx={100} cy={100} r={80}></circle>
                                    <circle className='path path-4' cx={100} cy={100} r={80}></circle>
                                </svg>
                                <div className="percentage">85%</div>
                                <div className="professional-text">TeamWork & Collaboration</div>
                            </div>
                            <div className="radial-bar">
                                <svg x="0px" y='0px' viewBox='0 0 200 200'>
                                    <circle className='progress-bar' cx={100} cy={100} r={80}></circle>
                                    <circle className='path path-5' cx={100} cy={100} r={80}></circle>
                                </svg>
                                <div className="percentage">90%</div>
                                <div className="professional-text">Adaptability</div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>

    </>
  )
}

export default Skills
