const PubSub = require('../helpers/pub_sub.js');

const MenuView = function(element) {
  this.element = element;
}

MenuView.prototype.bindEvents = function () {
  PubSub.subscribe("MenuView:AddInstrumentFamilies", (event) => {
    const instrumentFamilyArray = event.detail;
    this.fillMenu(instrumentFamilyArray);
  })
};

MenuView.prototype.fillMenu = function (instrumentFamilyArray) {
  instrumentFamilyArray.forEach((instrumentFamily, index) => {
    menuOption = document.createElement('option');
    menuOption.value = index;
    menuOption.textContent = instrumentFamily.name;
    this.element.appendChild(menuOption);
  })

};

module.exports = MenuView;
