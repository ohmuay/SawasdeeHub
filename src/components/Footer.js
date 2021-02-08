import React from "react";

const Footer = () => (
  <footer className="footer bg-grey text-light">
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h4>
            Developed by <cite>Thana Wisutphusi</cite>
          </h4>
          <a href="https://jsonplaceholder.typicode.com/photos" className="btn btn-link">API Data source</a>
          </div>
          <div>
          <div className="social-contact d-flex justify-content-between align-items-center">
          <a href="https://www.facebook.com/A.trbcp/" className="text-primary" target="_blank">
          <i class="fab fa-facebook-square fa-4x mr-4"></i>
            </a>
            <a href="https://github.com/ohmuay" className="text-light" target="_blank">
              <i class="fab fa-github fa-4x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
