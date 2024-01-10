import './index.css';

import { Background } from './bg';
import { init as init_cat, observe_animate as observe_cat } from './features/cat';

window.Webflow ||= [];
window.Webflow.push(() => {
  new Background();

  const cloak = document.querySelector<HTMLDivElement>('.page-wrapper');
  //   cloak?.removeAttribute('data-cloak');
  cloak?.classList.remove('bg-black');

  const animatedPath = document.getElementById('animatedPath');
  if (animatedPath) {
    window.addEventListener('scroll', onScroll(animatedPath));
  }

  init_cat();
  observe_cat();
});

function isElementInViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function onScroll(animatedPath: HTMLElement) {
  return function () {
    if (isElementInViewport(animatedPath) && !animatedPath.classList.contains('animated-path')) {
      animatedPath.classList.add('animated-path');
    }

    // 如果元素不在视口中且有动画类，则重置动画
    if (!isElementInViewport(animatedPath) && animatedPath.classList.contains('animated-path')) {
      resetAnimation(animatedPath);
    }
  };
}

function resetAnimation(el: HTMLElement) {
  // 移除动画类
  el.classList.remove('animated-path');
  // 强制重排来重置动画
  void el.offsetWidth;
}
