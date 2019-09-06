import React from 'react';
import ReactTimeout from 'react-timeout';
import './Contact.css';
import axios from 'axios';

class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    error: '',
    sent: ''
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
      error: ''
    });
  };

  handleSubmit = () => {
    axios
      .post('/api/contact', this.state)
      .then(response => {
        if (response.data.error) {
          this.setState({
            error: response.data.error
          });
        }
        if (response.data.err) {
          console.log(response.data.err);
        }

        if (response.data.sent) {
          this.setState({
            sent: response.data.sent,
            email: '',
            name: '',
            message: '',
            subject: ''
          });
          this.props.setTimeout(() => {
            this.setState({
              sent: ''
            });
          }, 15000);
        }
      })
      .then(() => {
        this.setState({
          email: '',
          name: '',
          message: '',
          subject: ''
        });
      });
  };
  render() {
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
                    <li>Brampton, Canada</li>
                    <li>+1 (705) 7337875</li>
                    <li>radadiyapriyansh@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-12">
              <form className="contact-form">
                {this.state.error && (
                  <div className="d-flex">
                    <div className="py-1 m-0 alert alert-danger">
                      {this.state.error}
                    </div>
                  </div>
                )}
                {this.state.sent && (
                  <div className="d-flex">
                    <div className="py-1 m-0 alert alert-success">
                      {this.state.sent}
                    </div>
                  </div>
                )}
                <div className="form-row my-3">
                  <div className="col-lg-6 col-12">
                    <input
                      type="text"
                      className="form-control py-2 mb-3 mb-lg-0"
                      placeholder="Your Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-12">
                    <input
                      type="Email"
                      className="form-control py-2"
                      placeholder="Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
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
                      name="subject"
                      value={this.state.subject}
                      onChange={this.handleChange}
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
                      name="message"
                      value={this.state.message}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-row mt-3">
                  <div className="col-12">
                    <button
                      type="button"
                      className="btn btn-secondary btn-block py-2"
                      onClick={() => {
                        this.handleSubmit();
                      }}
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
}
export default ReactTimeout(Contact);
