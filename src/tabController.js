import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadReserve from './modules/reserve';

const clearContent = () => (document.getElementById("content").innerHTML = "");

const switchTab = (tabFunction) => {
  clearContent();
  window.scrollTo(0, 0);
  tabFunction();
};

export { switchTab, loadHome, loadMenu, loadReserve };