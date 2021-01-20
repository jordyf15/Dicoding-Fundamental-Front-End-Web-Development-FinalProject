import $ from 'jquery';
import renderHome from './renderHome.js';
import renderContact from './renderContact.js';
import renderAbout from './renderAbout.js';
import renderRecipe from './renderRecipe.js';

const main=()=>{
  $('#home span').click(()=>{
    renderHome();
  });
  $('#recipe span').click(()=>{
      renderRecipe();
  });
  $('#about span').click(()=>{
      renderAbout();
  });
  $('#contact span').click(()=>{
      renderContact();
  });
  renderRecipe();//default nya di recipe tab aja


};
export default main;