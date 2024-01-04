import './index.css';
import './features/magic';
import './features/popupVideoControl';

import $ from 'jquery';

import { init as init_cat, observe_animate as observe_cat } from './features/cat';
import { init as init_hint_cursor } from './features/hintCursor.js';
import { init as page_progress } from './features/pageProgress';
import { init as init_banner, observe_animate as observe_banner } from './features/particles.js';

window.Webflow ||= [];
window.Webflow.push(() => {
  $('#enter-button').on('click', playAllVideos);

  init_hint_cursor();
  page_progress();
  init_cat();
  observe_cat();
  init_banner();
  observe_banner();
});

function playAllVideos() {
  const videoElement = $('#bg-video').get(0)?.firstChild;
  if (videoElement instanceof HTMLVideoElement) {
    videoElement.play();
  }
}
