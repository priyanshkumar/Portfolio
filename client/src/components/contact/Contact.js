import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="row contact m-0 py-5 contact-background">
      <div className="container py-lg-5">
        <div className="row">
          <div className="col-lg-5 col-sm-12 d-flex flex-column justify-content-center align-items-center">
            <div className="row">
              <div className="col-12">
                <h2 className="text-center">
                  <span className="heading-border"> Get in touch</span>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center align-items-center mt-4 my-lg-4">
                <ul className="contact-details text-center p-0">
                  <li>28 Fandor Way</li>
                  <li>Brampton, Canada</li>
                  <li>+1 (705) 7337875</li>
                  <li>pradadiya667@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-12">
            <form className="contact-form">
              <div className="form-row my-3">
                <div className="col-lg-6 col-12">
                  <input
                    type="text"
                    className="form-control py-2 mb-3 mb-lg-0"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <input
                    type="Email"
                    className="form-control py-2"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control py-2"
                    placeholder="Subject"
                    required
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="col-12">
                  <textarea
                    className="form-control py-2"
                    aria-label="With textarea"
                    placeholder="Message"
                  />
                </div>
              </div>
              <div className="form-row mt-3">
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-secondary btn-block py-2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
