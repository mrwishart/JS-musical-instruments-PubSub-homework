const InstrumentFamilies = require('./models/instrument_families.js');
const MenuView = require('./views/menu_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');


  const menuArea = document.querySelector('#instrument-families')
  const pulldownMenu = new MenuView(menuArea);
  pulldownMenu.bindEvents();

  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();
});
