import React, { Component } from 'react';
import PortCard from './card/PortCard';
import './Portfolis.css';
import image2 from './images/card2.jpg';
import image3 from './images/card3.jpg';
import image4 from './images/cardauto.jpeg';

class Portfolis extends Component {
  Pcard = [
    {
      id: 1,
      front: {
        img: image4,
        title: 'ParkEZ',
        content:
          'ParkEZ allows trucking companies to reserve parking spaces for heavy equipment eg., trucks, trailers, and construction vehicles at a safe location.'
      },
      back: {
        content:
          'By using this application that same driver can worry less about their equipment and spend more time with their families by quickly booking their spot ahead of their arrival.',
        build:
          'React.js, JavaScript, MySQL, Sequelize, Node.js, Express.js, Passport.js, rest API, Axios, Bootstrap.',
        github: 'https://github.com/priyanshkumar/Parking_Lot_Manager',
        heroku: 'https://parking-lot-manage.herokuapp.com/'
      }
    },
    {
      id: 2,
      front: {
        img: image2,
        title: 'Bargane',
        content:
          'Bargane is a Market Place app where people can feature their personal belongings for their desired price.'
      },
      back: {
        build:
          "JavaScript, jQuery, Node.js, Express.js, Sequelize, MySQL, Ajax, Rest API's, Passport.js, HTML5, CSS3, Bootstrap.",
        content:
          'Bargane gives you list of category for which you can feature you product.',
        github: 'https://github.com/priyanshkumar/Bargane-MarketPlace',
        heroku: 'https://bargane.herokuapp.com/'
      }
    },
    {
      id: 3,
      front: {
        img: image3,
        title: 'Mongo Scrapper',
        content:
          'Mongo Scrape is an app which scrapes articles from the NewYorkTimes web site and displays news items based on the search given by the user.'
      },
      back: {
        build:
          'JavaScript, HTML5, CSS3, Bootstrap, Node.js, Express.js, MongoDB, Handlebars.js, Cheerio.',
        content:
          'You can save your choice of scraped sport article and add a note to it for your reference.',
        github: 'https://github.com/priyanshkumar/Bloggit',
        heroku: 'https://priyanshkumar.github.io/Bloggit/login.html'
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
      <section className="pb-5 container">
        <div className="text-center heading">
          <h2>
            <span>Portfolio</span>
          </h2>
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
