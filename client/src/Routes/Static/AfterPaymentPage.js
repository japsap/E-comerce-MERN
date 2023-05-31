import React, { useRef } from "react";

const AfterPaymentPage = ({ user }) => {

    const ref = useRef();


  for (let i = 0; i < 200; i++) {
    // Random rotation
    var randomRotation = Math.floor(Math.random() * 360);
    // Random width & height between 0 and viewport
    var randomWidth = Math.floor(
      Math.random() *
        Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    );
    var randomHeight = Math.floor(
      Math.random() *
        Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0,
        ),
    );

    // Random animation-delay
    var randomAnimationDelay = Math.floor(Math.random() * 10);

    // Random colors
    var colors = [
      "#0CD977",
      "#FF1C1C",
      "#FF93DE",
      "#5767ED",
      "#FFC61C",
      "#8497B0",
    ];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Create confetti piece
    var confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.top = randomHeight + "px";
    confetti.style.left = randomWidth + "px";
    confetti.style.backgroundColor = randomColor;
    confetti.style.transform = "skew(15deg) rotate(" + randomRotation + "deg)";
    confetti.style.animationDelay = randomAnimationDelay + "s";

    ref.current?.appendChild(confetti);
  }
  return (
    <div className="successful-container">
      <div className="wrapper">
        <div className="modal">
          <span className="emoji">👏</span>
          <h1>Good job, {user.username}</h1>
          <p>You have succesfully made a purchase 🎉</p>
          <a href="#" className="modal-btn">
            Great, now take me to my purchase status
          </a>
        </div>
        <div id="confetti-wrapper" ref={ref}/>
      </div>
    </div>
  );
};

export default AfterPaymentPage;
