import loadHome from './modules/home';
import loadMenu from './modules/menu';
import './styles.css';


const clearContent = () => document.getElementById("content").innerHTML = ""; 

const switchTab = (thisTab) => {
    clearContent();
    thisTab();
}

document.getElementById("homeBtn").addEventListener('click', () => switchTab(loadHome));
document.getElementById("menuBtn").addEventListener('click', () => switchTab(loadMenu));


// Default Module
// switchTab(loadHome);