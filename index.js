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
    qs("button").addEventListener("click", convert);
  }

  /**
   * Keeping track of the client's input, add it to the To Do List,
   * clear the input tracked to make the input box avaible and focused for typing.
   */
  function convert() {
    let input1 = id("item1");
    let input2 = id("item2");
    let input3 = id("item3");
    let li = gen("li");
    let button = gen("button");
    /*some game function pass in parameter of three input.value
    and output a number */
    li.textContent = // that number
    qs("#todo ul").appendChild(li);
    input1.value = "";
    input2.value = "";
    input3.value = "";
    li.select();
    document.execCommand("copy");
    input1.focus();
  }

  /**
   * Make the current target to be crossed out with a color of gray.
   */
  function something() {
    // do something
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