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

  const instrumentsLabel = document.createElement('h3');
  instrumentsLabel.textContent = "Instruments include:";

  const instrumentsArray = instrumentFamily.instruments;
  const instrumentsList = this.createInstrumentList(instrumentsArray);

  this.container.appendChild(heading);
  this.container.appendChild(bodyText);
  this.container.appendChild(instrumentsLabel);
  this.container.appendChild(instrumentsList);
}

InfoView.prototype.createInstrumentList = function (instrumentsArray) {
  const unorderedList = document.createElement('ul');

  instrumentsArray.forEach((instrument) => {
    const listElement = document.createElement('li');
    listElement.textContent = instrument;
    unorderedList.appendChild(listElement);
  })

  return unorderedList;
};

module.exports = InfoView;
