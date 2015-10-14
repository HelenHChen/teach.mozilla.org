var React = require('react');
var Illustration = require('../components/illustration.jsx');
var ActivitySection = require('../components/activity-section.jsx');
var Router = require('react-router');
var Link = Router.Link;

var CurriculumIntro = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Back-to-School Write the Web Kit</h1>
        <section className="intro">
          <Illustration
          height={204} width={204}
          src1x="/img/pages/back-to-school-write-the-web/img-main.jpg"
          src2x="/img/pages/back-to-school-write-the-web/img-main@2x.jpg"
          alt="Graph paper wad"
          className="illustration-img-circle">
            <h2>Learn how to remix and write basic HTML, CSS, and JavaScript with these Back-to-School Thimble activities and lesson plans.</h2>
          </Illustration>
        </section>
      </div>
    );
  }
});

var BackToSchoolWrite = React.createClass({
  render: function () { 
    return (
      <section className="row back-to-school-write-the-web">
        <div className="col-sm-12">
          <h2>Learning Objectives</h2>
          <p>
            Learners will understand navigation, search, composing, remix, coding/scripting as they learn to write the Web.
          </p>
        </div>
      </section>
    );
  }
});

var ClubsCurriculum = React.createClass({
  statics: {
    pageTitle: 'Back-to-School Write the Web Kit',
    pageClassName: 'back-to-school-write-the-web'
  },
  curriculum: [
    {
      title: "Reading the Web",
      activities: [
        {
          title: "School Around the World Teaching Kit",
          image1x: "/img/pages/back-to-school-write-the-web/img-valenciano.jpg",
          image2x: "/img/pages/back-to-school-write-the-web/img-valenciano@2x.jpg",
          subtitle: "Understanding Search",
          description: "Students explore classrooms around the world and learn how to search for images and information to create a basic webpage.",
          link: "https://www.flickr.com/photos/jamorcillov/6108526728/sizes/l/"
        }
      ]
    },
    {
      title: "Writing the Web",
      activities: [
        {
          title: "Hack the News",
          image1x: "/img/pages/web-lit-basics/img-hack-news.jpg",
          image2x: "/img/pages/web-lit-basics/img-hack-news@2x.jpg",
          subtitle: "Understanding remixing",
          description: "Learners use X-Ray Goggles to remix a news website, learning about openly-licensed resources, different forms of media, and how to create something new on the Web through remixing.",
          link: "http://mozilla.github.io/webmaker-curriculum/WebLiteracyBasics-I/session02-hackthenews.html"
        },
        {
          title: "HTML Puzzle Boxes",
          image1x: "/img/pages/web-lit-basics/img-puzzle-boxes.jpg",
          image2x: "/img/pages/web-lit-basics/img-puzzle-boxes@2x.jpg",
          subtitle: "Understanding composing for the web",
          description: "Learners race to sequence the paper boxes labeled with HTML tags, becoming familiar with the most common HTML tags and how to structure a web page.",
          link: "http://mozilla.github.io/webmaker-curriculum/WebLiteracyBasics-I/session02-puzzlebox.html"
        }
      ]
    }
  ],
  render: function () {
    return (
      <div className="inner-container">
        <CurriculumIntro/>
        <BackToSchoolWrite/>
        {this.curriculum.map(function (section, key) {
          return (
            <ActivitySection title={section.title} key={key} activities={section.activities} />
          );
        })}
      </div>
    );
  }
});

module.exports = ClubsCurriculum;