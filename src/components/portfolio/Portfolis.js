import React, { Component } from "react";
import PortCard from "./card/PortCard";
import "./Portfolis.css";
import image1 from "./card/images/card1.jpeg";

class Portfolis extends Component {
  Pcard = [
    {
      id: 1,
      front: {
        img: image1,
        title: "Hello World",
        content: "loremokdfvk fLSJ KNSDKna kksndn,l, klsnlks"
      },
      back: {
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        Built:
          "Built with: JavaScript, Firebase, Ajax, jQuery, HTML 5, CSS 3, Bootstrap, Google Fonts , moment.js.",
        github: "https://github.com/priyanshkumar/Burger-FullStackApp",
        heroku: "https://burger-fullstackapp.herokuapp.com/"
      }
    },
    {
      id: 2,
      front: {
        img: image1,
        title: "Hello World",
        content: "loremokdfvk fLSJ KNSDKna kksndn,l, klsnlks"
      },
      back: {
        Built:
          "Built with: JavaScript, Firebase, Ajax, jQuery, HTML 5, CSS 3, Bootstrap, Google Fonts , moment.js.",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        github: "https://github.com/priyanshkumar/Burger-FullStackApp",
        heroku: "https://burger-fullstackapp.herokuapp.com/"
      }
    },
    {
      id: 3,
      front: {
        img: image1,
        title: "Hello World",
        content: "loremokdfvk fLSJ KNSDKna kksndn,l, klsnlks"
      },
      back: {
        Built:
          "Built with: JavaScript, Firebase, Ajax, jQuery, HTML 5, CSS 3, Bootstrap, Google Fonts , moment.js.",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        github: "https://github.com/priyanshkumar/Burger-FullStackApp",
        heroku: "https://burger-fullstackapp.herokuapp.com/"
      }
    },
    {
      id: 4,
      front: {
        img: image1,
        title: "Hello World",
        content: "loremokdfvk fLSJ KNSDKna kksndn,l, klsnlks"
      },
      back: {
        Built:
          "Built with: JavaScript, Firebase, Ajax, jQuery, HTML 5, CSS 3, Bootstrap, Google Fonts , moment.js.",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        github: "https://github.com/priyanshkumar/Burger-FullStackApp",
        heroku: "https://burger-fullstackapp.herokuapp.com/"
      }
    },
    {
      id: 5,
      front: {
        img: image1,
        title: "Hello World",
        content: "loremokdfvk fLSJ KNSDKna kksndn,l, klsnlks"
      },
      back: {
        Built:
          "Built with: JavaScript, Firebase, Ajax, jQuery, HTML 5, CSS 3, Bootstrap, Google Fonts , moment.js.",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
        github: "https://github.com/priyanshkumar/Burger-FullStackApp",
        heroku: "https://burger-fullstackapp.herokuapp.com/"
      }
    },
    {
      id: 6,
      front: {
        img: image1,
        title: "Hello World",
        content: "loremokdfvk fLSJ KNSDKna kksndn,l, klsnlks"
      },
      back: {
        Built:
          "Built with: JavaScript, Firebase, Ajax, jQuery, HTML 5, CSS 3, Bootstrap, Google Fonts , moment.js.",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        github: "https://github.com/priyanshkumar/Burger-FullStackApp",
        heroku: "https://burger-fullstackapp.herokuapp.com/"
      }
    }
  ];
  render() {
    return (
      <section className="py-5 container">
        <div className="text-center">
          <div className="heading">
            <span className="p-5">PORTFOLIO</span>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          {this.Pcard.map(card => {
            return <PortCard card={card} key={card.id} />;
          })}
        </div>
      </section>
    );
  }
}

export default Portfolis;
