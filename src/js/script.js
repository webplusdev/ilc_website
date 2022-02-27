//Formated numbers
//import './libs/wNumb.min.js';

//Dynamic adaptivity
import "./libs/dynamic_adapt.js"
//Pop-up
//import "./libs/popup.js";
//import "./libs/tippy.js";
//import "./libs/slider.js";

import * as scriptFunc from "./modules/functions.js";
//Add webp format
scriptFunc.isWebp();
//Spoilers
//scriptFunc.spoilers();
//Add touch class
//scriptFunc.addTouchClass();
//Add loaded for HTML
//scriptFunc.addLoadedClass();
//Tabs
//scriptFunc.tabs();
//Show more
//scriptFunc.showMore();
//Burger
scriptFunc.menuInit();
//float panel
//scriptFunc.fullVHfix();


function main() {

    document.addEventListener("click", documentActions);

    // const menuBlocks = document.querySelectorAll('.sub-menu-catalog__block');
    // if (menuBlocks.length) {
    //     menuBlocks.forEach(menuBlock => {
    //         const menuBlockItems = menuBlock.querySelectorAll('.sub-menu-catalog__category').length;
    //         menuBlock.classList.add(`sub-menu-catalog__block_${menuBlockItems}`);
    //     });
    // }

    function documentActions(e) {
        const targetEl = e.target;

        if (targetEl.closest('.icon-menu')) {
            scriptFunc.menuInit();
        }


        e.preventDefault();
    }

    //     if (targetEl.closest('.menu-top-header__link_catalog')) {
    //         //const catalogLink = targetEl.closest('.menu-top-header__link_catalog');
    //         document.documentElement.classList.add('catalog-open');
    //         e.preventDefault();
    //     }

    //     if (targetEl.closest('.menu-catalog__back')) {
    //         //const catalogLink = targetEl.closest('.menu-top-header__link_catalog');
    //         document.documentElement.classList.remove('catalog-open');

    //         document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active') : null;
    //         document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;
    //         e.preventDefault();
    //     }
    //     if (targetEl.closest('.sub-menu-catalog__back')) {
    //         document.documentElement.classList.remove('sub-menu-open');
    //         document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active') : null;
    //         document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open') : null;
    //         e.preventDefault();
    //     }
    // }
}

window.onload = main;