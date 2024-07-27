/*Zadanie 2. Kompozycja tablic*/

function makeArray(firstArray, secondArray, maxLength) {
  
    const newArray = [...firstArray, ...secondArray];
  
    if (newArray.length >= maxLength) {
      return newArray.slice(0, maxLength);
    }
    
    return newArray;
  }
  
  console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 5)); 
  console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); 
  console.log(makeArray(["Mango"], ["Ajax", "Chelsea"], 2)); 
  console.log(makeArray(["A"], ["B", "C", "D", "E","F","G"], 6)); 


//          (4) ['Mango', 'Poly', 'Ajax', 'Chelsea']
// VM317:14 (3) ['Mango', 'Poly', 'Ajax']
// VM317:15 (2) ['Mango', 'Ajax']
// VM317:16 (6) ['A', 'B', 'C', 'D', 'E', 'F']
