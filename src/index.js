import loadHome from './modules/home';
import './styles.css';


const clearContent = () => document.getElementById("content").innerHTML = ""; 

const switchTab = (thisTab) => {
    clearContent();
    thisTab();
}

document.getElementById("homeBtn").addEventListener('click', () => switchTab(loadHome));


// Default Module
// switchTab(loadHome);