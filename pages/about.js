import React, { Component } from "react";
import "../css/about.css";
import Nav from '../components/navbar/nav'

class About extends Component {
  constructor(props) {
    super(props);
    let width = 2048;
    let height = 1364;

    this.state = {
      imageWidth: width,
      imageHeight: height,
      imageAspectRatio: width / height,
      hotSpots: [
        {
          title: "Mouth",
          description: "scream.",
          x: -600,
          y: -180
        },
        {
          title: "Body",
          description: "Look at it.",
          x: 108,
          y: 20
        },
        {
          title: "Antlers",
          description: "They crazy.",
          x: 40,
          y: -170
        },
        {
          title: "This Ear",
          description: "It can hear things.",
          x: -265,
          y: -145
        }
      ]
    };
  }

  appendHotSpots() {
    for (var i = 0; i < this.state.hotSpots.length; i++) {
      var $hotSpot = $("<div>").addClass("hot-spot");
      $(".img-container").append($hotSpot);
    }
    this.positionHotSpots();
  }

  appendSpeechBubble() {
    var $speechBubble = $("<div>").addClass("speech-bubble");
    $(".img-container").append($speechBubble);
  }

  handleHotSpotMouseover(e) {
    
    var $currentHotSpot = $(e.currentTarget),
      currentIndex = $currentHotSpot.index(),
      $speechBubble = $(".speech-bubble"),
      title = this.state.hotSpots[currentIndex]["title"],
      description = this.state.hotSpots[currentIndex]["description"],
      hotSpotTop = $currentHotSpot.offset().top,
      hotSpotLeft = $currentHotSpot.offset().left,
      hotSpotHalfSize = $currentHotSpot.width() / 2,
      speechBubbleHalfSize = $speechBubble.width() / 2,
      topTarget = hotSpotTop - $speechBubble.height(),
      leftTarget = hotSpotLeft - speechBubbleHalfSize + hotSpotHalfSize;

    $speechBubble.empty();
    $speechBubble.append($("<h1>").text(title));
    $speechBubble.append($("<p>").text(description));   

    $speechBubble
      .css({
        top: topTarget - 20,
        left: leftTarget,
        display: "block"
      })
  }

  handleHotSpotMouseout() {
    var $speechBubble = $(".speech-bubble");
    $speechBubble.hide();
  }

  positionHotSpots() {
    var $window = $(window);
    var windowWidth = $window.width(),
      windowHeight = $window.height(),
      windowAspectRatio = windowWidth / windowHeight,
      $hotSpot = $(".hot-spot");
      let hotSpots = this.state.hotSpots;
      let imageAspectRatio = this.state.imageAspectRatio;
      let imageHeight = this.state.imageHeight;
      let imageWidth = this.state.imageWidth;
    $hotSpot.each(function(index) {
      var xPos = hotSpots[index]["x"],
        yPos = hotSpots[index]["y"],
        desiredLeft = 0,
        desiredTop = 0;

      if (windowAspectRatio > imageAspectRatio) {
        yPos = (yPos / imageHeight) * 100;
        xPos = (xPos / imageWidth) * 100;
      } else {
        yPos =
          (yPos /
            (windowAspectRatio / imageAspectRatio) /
            imageHeight) *
          100;
        xPos =
          (xPos /
            (windowAspectRatio / imageAspectRatio) /
            imageWidth) *
          100;
      }

      $(this).css({
        "margin-top": yPos + "%",
        "margin-left": xPos + "%"
      });
    });
  }

  componentDidMount() {
    this.appendHotSpots();
    this.appendSpeechBubble();
    $(window).resize(()=> this.positionHotSpots());
    $(".hot-spot").on("mouseover", (e) => this.handleHotSpotMouseover(e));
    $(".hot-spot").on("mouseout", (e) => this.handleHotSpotMouseout(e));
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="img-container" />
      </div>
    );
  }
}

export default About;