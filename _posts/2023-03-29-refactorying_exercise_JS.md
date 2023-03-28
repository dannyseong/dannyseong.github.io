---
layout: post
title: "Exercise of Refactorying 1, JavaScript"
date: 2023-03-26
categories: jekyll update
author: Daehoon Seong
tags: Refactory JavaScript
---

The objective of this contents is for reviewing my personnel study through the content in YouTube. The Youtuber, 프롱트, make this contents and the reference link is described at the bottom of this post.

### Before

```javascript
// Define function for ordering coffee
function orderCoffe(el, orderList) {
  if (el) {
    if (Array.isArray(orderList)) {
      el.addEventListener("click", function () {
        setTimeout(function () {
          for (let i = 0; i < orderList.length; i++) {
            document.querySelector(
              "#log"
            ).innerHTML += `${orderList[i]}가 완료되었습니다<br />`;
          }
        }, 2000);
      });
    }
  }
}
// Call orderCoffee function
orderCoffee(document.querySelector("button"), ["americano", "cafeLatte"]);
```

### After

```javascript
// Assign Global variables and functions to be used
const logEL = document.querySelector("#log");
const delay = (time) =>
  new Promise((resolve) => setTimeout(() => resolve(), time));
const insertMsg = (order) => {
  logEL.innerHTML += `${orderList[i]}가 완료되었습니다<br />`;
};

// Define buttonClickHandelr Function
async function buttonClickHandler(orderList) {
  const delayTime = 2000;
  await delay(delayTime);
  orderList.forEach(insertMsg);
}

// Define orderCoffee Function
function orderCoffee(el, orderList) {
  if (!el || !Array.isArray(orderList)) return;
  el.addEventListener("click", () => buttonClickHandler(orderList));
}

// Call orderCoffee function
orderCoffee(document.querySelector("button"), ["americano", "cafeLatte"]);
```

### Refactory Point of View

1. If multiple `if` statement are used consecutively, they should be consolidated into one.

```javascript
// Before
if (el) {
  if (Array.isArray(orderList)) {
    // Inner Codes...
  }
}

// After
if (!el || !Array.isArray(orderList)) return;
```

2. In case of callback function, it should be assgined to a separated variable, and use this variable as a parameter. This will increase the readability of the code.
3. Getting used to using the `Promise` object for asynchornous operation

```javascript
//Before
el.addEventListener("click", function () {
  setTimeout(function () {
    for (let i = 0; i < orderList.length; i++) {
      document.querySelector(
        "#log"
      ).innerHTML += `${orderList[i]}가 완료되었습니다<br />`;
    }
  }, 2000);
});

//After
const logEL = document.querySelector("#log");
const delay = (time) =>
  new Promise((resolve) => setTimeout(() => resolve(), time));
const insertMsg = (order) => {
  logEL.innerHTML += `${orderList[i]}가 완료되었습니다<br />`;
};
```

4. Getting used to the use of the high-order function like forEach() in JavaScript.

```javascript
// Before
for (let i = 0; i < orderList.length; i++) {
  // Inner Codes
}
// After
orderList.forEach(insertMsg);
```

5. The constant number should be assigned to a separated variable to improve the readability of the code.

```javascript
const delayTime = 2000;
```

### References

1. [코드리뷰에서 칭찬받은 코드의 비밀, 프롱트](https://www.youtube.com/watch?v=BfpTtsWTWEM)
