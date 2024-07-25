/*Zadanie 1. Generator slug*/

function slugify(title) {
    return title
      .toLowerCase()
      .trim() 
      .replace(/\s+/g, '-'); 
  }
  
  console.log(slugify("Arrays for begginers")); 
  console.log(slugify("English for developer"));
  console.log(slugify("Ten secrets of JavaScript"));
  console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

//          arrays-for-begginers
// VM182:12 english-for-developer
// VM182:13 ten-secrets-of-javascript
// VM182:14 how-to-become-a-junior-developer-in-two-weeks