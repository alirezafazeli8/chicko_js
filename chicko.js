"use strict";

// start make new thing

// simple insertAdjacentHtml
function adjacentHtml(insertNameOfElement, position, htmlCode) {
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

// css style Changer
function cssStyleChanger(element, propertyName, value) {
  document.querySelector(element).style[propertyName] = value;
}

// child style changer
function childStyle(containerName, propertyName, value) {
  const containerChild = document.querySelector(containerName).children;
  for (let child of containerChild) {
    child.style[propertyName] = value;
  }
}

// find in key object
/**
 *
 * @param {Object} objectName
 * @param {string} key
 */
function findInKeyObj(objectName, key) {
  let objKey = objectName;
  for (let k of Object.keys(objKey)) {
    if (k == key) {
      return true;
    }
  }
}

// find in value object
/**
 *
 * @param {Object} objectName
 * @param {string} key
 */
function findInValueObj(objectName, value) {
  let objKey = objectName;
  for (let k of Object.values(objKey)) {
    if (k == value) {
      return true;
    }
  }
}

// find in key and value obj
/**
 *
 * @param {Object} objectName
 * @param {String} key
 * @param {String} value
 */
function findInKeyAndValeObj(objectName, key, value) {
  let objArr = [objectName];
  for (let item of objArr) {
    return item[key] == value ? true : false;
  }
}

// window size alert
/**
 *
 * @param {Number} size
 * @param {String} message
 */
function windowSizeAlert(size, message) {
  window.addEventListener("resize", (e) => {
    const current = e.target.innerWidth;
    if (current > size) {
      alert(message);
    }
  });
}

// title case converter
function titleCaseConverter(text) {
  // convert text to array
  let arrayText = text.split(" ");
  // map the array
  arrayText = arrayText.map(function (mWord) {
    // condition
    if (
      mWord != "and" &&
      mWord != "or" &&
      mWord != "then" &&
      mWord != "at" &&
      mWord != "a" &&
      mWord != "in" &&
      mWord != "on" &&
      mWord != "to"
    ) {
      // capitalize the word
      return mWord[0].toUpperCase() + mWord.slice(1);
    } else {
      return mWord;
    }
  });
  // capitalize the first word of the array
  arrayText = [
    arrayText[0][0].toUpperCase() + arrayText[0].slice(1),
    ...arrayText.slice(1),
  ];
  // make string with array
  return arrayText.join(" ");
}

// input Clear Function
function InputClear(input) {
  document.querySelector(input).value = "";
}

// return dates With region
function datesRegion(region, dates) {
  let myDate;
  if (dates == "now") {
    myDate = new Date();
    return new Intl.DateTimeFormat(region).format(myDate);
  } else {
    myDate = new Date(dates);
    return new Intl.DateTimeFormat(region).format(myDate);
  }
}

// log your now system clock on console
function clockConsole(symbol = ":") {
  setInterval(function () {
    console.log(`
     ${new Date().getHours()}${symbol}${new Date().getMinutes()}${symbol}${new Date().getSeconds()}
   `);
  }, 1000);
}
