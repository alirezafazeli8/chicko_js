"use strict";

// start make new thing

// simple insertAdjucentHtml
function adjucentHtml(insertNameOfElement, position, htmlCode) {
  document
    .querySelector(insertNameOfElement)
    .insertAdjacentHTML(position, htmlCode);
}

// key iterate
function kIterate(variable) {
  variable.forEach(function (undefined, key) {
    console.log(key);
  });
}

// value iterate
function vIterate(variable) {
  variable.forEach(function (value) {
    console.log(value);
  });
}

// return value
function returnValue(elementName, equalValue) {
  document.querySelector(elementName).value = equalValue;
}

// return context
function returnTContent(elementName, equalValue) {
  document.querySelector(elementName).textContent = equalValue;
}
