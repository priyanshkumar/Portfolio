import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" class="row m-0 py-5 contact-background">
      <div class="container py-lg-5">
        <div class="row">
          <div class="col-lg-5 col-sm-12 d-flex flex-column justify-content-center align-items-center">
            <div class="row">
              <div class="col-12">
                <h2 class="text-center">
                  <span class="heading-border"> Get in touch</span>
                </h2>
              </div>
            </div>
            <div class="row">
              <div class="col-12 d-flex justify-content-center align-items-center mt-4 my-lg-4">
                <ul class="contact-details text-center p-0">
                  <li>28 Fandor Way</li>
                  <li>Brampton, Canada</li>
                  <li>+1 (705) 7337875</li>
                  <li>pradadiya667@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-12">
            <form class="contact-form">
              <div class="form-row my-3">
                <div class="col-lg-6 col-12">
                  <input
                    type="text"
                    class="form-control py-2 mb-3 mb-lg-0"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div class="col-lg-6 col-12">
                  <input
                    type="Email"
                    class="form-control py-2"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div class="form-row my-3">
                <div class="col-12">
                  <input
                    type="text"
                    class="form-control py-2"
                    placeholder="Subject"
                    required
                  />
                </div>
              </div>
              <div class="form-row my-3">
                <div class="col-12">
                  <textarea
                    class="form-control py-2"
                    aria-label="With textarea"
                    placeholder="Message"
                  />
                </div>
              </div>
              <div class="form-row mt-3">
                <div class="col-12">
                  <button
                    type="button"
                    class="btn btn-secondary btn-block py-2"
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
