const InstrumentFamilies = require('./models/instrument_families.js');
const MenuView = require('./views/menu_view.js');
const InfoView = require('./views/info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const infoArea = document.querySelector('#info-view')
  const infoDisplay = new InfoView(infoArea);
  infoDisplay.bindEvents();

  const menuArea = document.querySelector('#instrument-families')
  const pulldownMenu = new MenuView(menuArea);
  pulldownMenu.bindEvents();

  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();
});
