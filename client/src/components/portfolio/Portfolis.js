import React, { Component } from "react";
import PortCard from "./card/PortCard";
import "./Portfolis.css";
import image1 from "./images/card1.jpeg";

class Portfolis extends Component {
  Pcard = [
    {
      id: 1,
      front: {
        img: image1,
        title: "ParkEZ",
        content:
          "ParkEZ allows truckers and trucking companies to reserve parking spaces for heavy equipment eg., trucks, trailers, and construction vehicles at a safe location."
      },
      back: {
        content:
          "By using this application that same driver can worry less about their equipment and spend more time with their families by quickly booking their spot ahead of their arrival.",
        Built:
          "Built with: react.js, JavaScript, MySQL, Sequelize, node.js, express.js, passport.js, rest API, axios, Bootstrap",
        github: "https://github.com/priyanshkumar/Parking_Lot_Manager",
        heroku: "https://parking-lot-manage.herokuapp.com/"
      }
    },
    {
      id: 2,
      front: {
        img: image1,
        title: "Bargane",
        content:
          "Bargane is a Market Place app where people can feature their personal belongings for their desired price."
      },
      back: {
        Built:
          "Built with: JavaScript, jQuery, Node, Express, Sequelize, MySQL, Ajax, Rest API's, Passport, HTML5, CSS3, Bootstrap.",
        content:
          "Bargane gives you list of category for which you can feature you product.",
        github: "https://github.com/priyanshkumar/Bargane-MarketPlace",
        heroku: "https://bargane.herokuapp.com/"
      }
    },
    {
      id: 3,
      front: {
        img: image1,
        title: "Bloggit",
        content:
          "Bloggit gives you a chance to share your ideas to the world. Get creative and showcase your interest..."
      },
      back: {
        Built:
          "Built with: JavaScript, Firebase, Ajax, jQuery, HTML 5, CSS 3, Bootstrap, Google Fonts , moment.js.",
        content: "",
        github: "https://github.com/priyanshkumar/Bloggit",
        heroku: "https://priyanshkumar.github.io/Bloggit/login.html"
      }
    }
    // {
    //   id: 4,
    //   front: {
    //     img: image1,
    //     title: "React Clicky Game",
    //     content:
    //       "Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    //   },
    //   back: {
    //     Built:
    //       "Built with: JavaScript, Firebase, Ajax, jQuery, HTML 5, CSS 3, Bootstrap, Google Fonts , moment.js.",
    //     content:
    //       "Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    //     github: "https://github.com/priyanshkumar/Burger-FullStackApp",
    //     heroku: "https://burger-fullstackapp.herokuapp.com/"
    //   }
    // },
    // {
    //   id: 5,
    //   front: {
    //     img: image1,
    //     title: "Hello World",
    //     content:
    //       "Lorem Ipsum is simply dummy printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    //   },
    //   back: {
    //     Built:
    //       "Built with: JavaScript, Firebase, Ajax, jQuery, HTML 5, CSS 3, Bootstrap, Google Fonts , moment.js.",
    //     content:
    //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    //     github: "https://github.com/priyanshkumar/Burger-FullStackApp",
    //     heroku: "https://burger-fullstackapp.herokuapp.com/"
    //   }
    // },
    // {
    //   id: 6,
    //   front: {
    //     img: image1,
    //     title: "Hello World",
    //     content:
    //       "Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    //   },
    //   back: {
    //     Built:
    //       "Built with: JavaScript, Firebase, Ajax, jQuery, HTML 5, CSS 3, Bootstrap, Google Fonts , moment.js.",
    //     content:
    //       "Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    //     github: "https://github.com/priyanshkumar/Burger-FullStackApp",
    //     heroku: "https://burger-fullstackapp.herokuapp.com/"
    //   }
    // }
  ];
  render() {
    return (
      <section className="py-5 container">
        <div className="text-center heading">
          <h2>PORTFOLIO</h2>
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
