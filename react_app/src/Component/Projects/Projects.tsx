import React from "react";
import openPose from "../../assets/img/1.jpg";
import ceylon from "../../assets/img/2.jpg";
import colourised from "../../assets/img/3.jpg";

const Projects = () => {
  return (
    <section className="projects-section bg-black" id="projects">
      <div className="container">
        <a target="_blank" href="https://www.youtube.com/watch?v=QJETULLd_Jo">
          <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div className="col-lg-6">
              <img className="img-fluid" src={openPose} alt="" />
            </div>
            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-left">
                    <h4 className="text-white">
                      Human pose tracking using open pose
                    </h4>
                    <p className="mb-0 text-white-50">
                      Pose Tracking is the task of estimating multi-person human
                      poses in videos and assigning unique instance IDs for each
                      keypoint across frames. Accurate estimation of human
                      keypoint-trajectories is useful for human action
                      recognition, human interaction understanding, motion
                      capture, and animation.
                    </p>
                    <hr className="d-none d-lg-block mb-0 ml-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>

        <a target="_blank" href="https://www.youtube.com/watch?v=-J7yrbyAFUs">
          <div className="row justify-content-center no-gutters">
            <div className="col-lg-6">
              <img className="img-fluid" src={ceylon} alt="" />
            </div>
            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-right">
                    <h4 className="text-white">
                      Black and White Ceylon Gains Colour
                    </h4>
                    <p className="mb-0 text-white-50">
                      Timeless black and white imagery have given new life by
                      Software Engineer Supun Abeysekara, who painstakingly
                      colourises the images, believing that it will make them
                      more impactful.
                    </p>
                    <hr className="d-none d-lg-block mb-0 mr-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a
          target="_blank"
          href="https://www.themorning.lk/colourised-by-me-a-software-engineers-love-for-colourisation-of-old-black-and-white-imagery/"
        >
          <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div className="col-lg-6">
              <img className="img-fluid" src={colourised} alt="" />
            </div>
            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-left">
                    <h4 className="text-white">
                      Colourised by me: A software engineer’s love for
                      colourisation of old black and white imagery
                    </h4>

                    <hr className="d-none d-lg-block mb-0 ml-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
