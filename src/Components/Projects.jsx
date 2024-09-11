import './Projects.css';

function Projects() {
    return ( 
        <div className="container-fluid projects mt-5">
            <h1 className='text-center'>Featured Projects</h1>
            <div className="row">
                <div className="col-6"><div className="pjbox">
                    <img src="/wiki.png" alt="wiki image" style={{height:"200px",width:"50%",borderRadius:"20px"}} />
                <h3 style={{color:"#fff"}} className='mt-3'>WikiPedia</h3>
                <p className="project-description">
                    Developed a compreh ensive Wikipedia-like web application that tackles issues related to text size, color, and font styling. The project features a responsive design, allowing for a user-friendly experience on both desktop and mobile devices. It demonstrates my ability to create well-structured, accessible, and visually appealing web content.
                </p>
                <h6>Demo: <a href="https://wikieditedbysai.netlify.app/" target="_blank" rel="noopener noreferrer">View Live Demo</a></h6>
            </div>  </div>
                <div className="col-6"><div className="pjbox">
                    <img src="/app.png" alt="app image" style={{height:"200px",width:"50%",borderRadius:"20px"}} />
                <h3 style={{color:"#fff"}} className='mt-3'>Weather App</h3>
                <p className="project-description">
                    React-based Weather App providing real-time weather details such as temperature, humidity, and more. Built with Material UI, the app allows users to search for any city and receive up-to-date weather information. Technologies include React, JavaScript, HTML, CSS, and Node.js.
                </p>
                <h6>Link: <a href="https://github.com/SAICSP/WeatherApp" target="_blank" rel="noopener noreferrer">View Code</a></h6>
            </div>  </div>
            
            </div>
            
        </div>
    );
}

export default Projects;
