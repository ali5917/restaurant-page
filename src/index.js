import { switchTab, loadHome, loadMenu, loadReserve } from './tabController';
import './styles.css';

switchTab(loadHome);

document.getElementById("homeBtn").addEventListener('click', () => switchTab(loadHome));
document.getElementById("menuBtn").addEventListener('click', () => switchTab(loadMenu));
document.getElementById("reserveBtn").addEventListener('click', () => switchTab(loadReserve));
document.querySelector(".logo").addEventListener('click', () => switchTab(loadHome));