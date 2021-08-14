import React from "react";

const Contact = () => {
  return (
    <section className="contact-section bg-black" id="contact">
      <div className="container">
        <div className="row"></div>
        <div className="social d-flex justify-content-center">
          <a
            className="mx-2"
            target="_blank"
            href="https://www.reddit.com/user/lakmal007"
          >
            <i className="fab fa-reddit"></i>
          </a>
          <a
            className="mx-2"
            target="_blank"
            href="https://www.linkedin.com/in/supun-lakmal/"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            className="mx-2"
            target="_blank"
            href="https://github.com/supunlakmal"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="mx-2"
            target="_blank"
            href="https://www.youtube.com/channel/UC48UuOQIHZ3wNm4qA832u8Q"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
