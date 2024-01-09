import { Background } from './bg';

window.Webflow ||= [];
window.Webflow.push(() => {
  new Background();

  const cloak = document.querySelector<HTMLDivElement>('.page-wrapper');
  console.log(cloak);
  //   cloak?.removeAttribute('data-cloak');
  cloak?.classList.remove('bg-black');
});
