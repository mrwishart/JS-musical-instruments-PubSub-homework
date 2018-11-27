const PubSub = require('../helpers/pub_sub.js');

const InfoView = function (container) {
  this.container = container;
}

InfoView.prototype.bindEvents = function () {
  PubSub.subscribe("InfoView:InstrumentFamilyFound", (event) => {
    const instrumentFamily = event.detail;
    this.renderDisplay(instrumentFamily);
  });
};

InfoView.prototype.renderDisplay = function (instrumentFamily) {
  
  this.container.innerHTML = '';

  const heading = document.createElement('h2');
  heading.textContent = instrumentFamily.name;

  const bodyText = document.createElement('p');
  bodyText.textContent = instrumentFamily.description;

  this.container.appendChild(heading);
  this.container.appendChild(bodyText);
}

module.exports = InfoView;
