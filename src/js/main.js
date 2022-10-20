  import "./slider";
  import modals from './modules/modals';
  import tabs from './modules/tabs';
  import timer from './modules/timer';
  import forms from './modules/forms';
  import changeModalState from "./modules/changeModalState";

  window.addEventListener('DOMContentLoaded', () => {
      "use strict";
      
      let modalState = {};

      changeModalState(modalState);
      modals();
      tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
      tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
      tabs('.balconw_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
      timer('#timer', '2022-12-05');
      forms(modalState);
  });