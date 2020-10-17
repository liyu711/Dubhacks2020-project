/**
 * Ran Liao
 * 10/15/2020
 * AF Wilson Tang
 *
 * This is the index.js file to implement the UI for my index.html and resume.html files,
 * and generate different types of ciphers from user input including opening a mystery box,
 * adding items to a list, crossing out list items.
 */
"use strict";

(function() {

  // MODULE GLOBAL VARIABLES, CONSTANTS, AND HELPER FUNCTIONS CAN BE PLACED HERE

  /**
   * Add a function that will be called when the window is loaded.
   */
  window.addEventListener("load", init);

  /**
   * Specify needed element and function for changing images, updating a list,
   * and making changes to list items
   */
  function init() {
    // THIS IS THE CODE THAT WILL BE EXECUTED ONCE THE WEBPAGE LOADS
    qs("button").addEventListener("click", planAdd);

    let list = qsa("#plan li");
    for (let i = 0; i < list.length; i++) {
      // do we need to save expensive function in this case?
      if (!list[i].classList.contains("finished")) {
        list[i].addEventListener("click", finishList);
      }
    }

    id("box1").addEventListener("click", unveil);
    id("box2").addEventListener("click", unveilBox2);
    id("box3").addEventListener("click", unveilBox3);
    id("box4").addEventListener("click", unveilBox4);
    id("box5").addEventListener("click", unveilBox5);
    id("box6").addEventListener("click", unveilBox6);
  }

  /**
   * Keeping track of the client's input, add it to the To Do List,
   * clear the input tracked to make the input box avaible and focused for typing.
   */
  function planAdd() {
    let input = qs("input");
    let li = gen("li");
    li.textContent = input.value;
    qs("#todo ul").appendChild(li);
    input.value = "";
    li.addEventListener("click", finishList);
    input.focus();
  }

  /**
   * Make the current target to be crossed out with a color of gray.
   */
  function finishList() {
    this.classList.add("finished");
  }

  /**
   * Turn the client's specified picture as question to the corresponding image as answer.
   */
  function unveil() {
    // I got the image of mysterbox from https://phys.org/news/2020-04-video-wolves-night.html
    this.src = "img/wolf.jpg";
    this.alt = "A Wolf!";
  }

  /**
   * Turn the client's specified picture as question to the corresponding image as answer
   */
  function unveilBox2() {
    /*
    * I got the image of mysterbox from
    * https://www.theguardian.com/lifeandstyle/2020/jun/08/in-18-months-weve-had-30-cats-and-its-been-wonderful
    */
    this.src = "img/cat.jpg";
    this.alt = "A Cat";
  }

  /**
   * Turn the client's specified picture as question to the corresponding image as answer.
   */
  function unveilBox3() {
    /*
     * I got the image of mysterbox from
     * https://www.travelandleisure.com/animals/most-popular-dog-names-2019
     */
    this.src = "img/dog.jpg";
    this.alt = "A Dog";
  }

  /**
   * Turn the client's specified picture as question to the corresponding image as answer.
   */
  function unveilBox4() {
    this.src = "img/hotpot.jpg";
    this.alt = "Chinese Hotpot";
  }

  /**
   * Turn the client's specified picture as question to the corresponding image as answer.
   */
  function unveilBox5() {
    this.src = "img/seafood.jpg";
    this.alt = "Oysters";
  }

  /**
   * Turn the client's specified picture as question to the corresponding image as answer.
   */
  function unveilBox6() {
    this.src = "img/sushi.jpg";
    this.alt = "Some Sushi";
  }

  /** ------------------------------ Helper Functions  ------------------------------ */
  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} The first DOM object matching the query.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} selector - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * Returns a new element with the given tag name.
   * @param {string} tagName - HTML tag name for new DOM element.
   * @returns {object} New DOM object for given HTML tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }

})();