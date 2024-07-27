/*Zadanie 3. Filtrowanie tablicy liczb*/

    function filterArray(numbers, value){

    const newArray = [];

        for ( let i = 0 ; i < numbers.length; i ++) {
            if (numbers[i] > value) {
                newArray.push(numbers[i]);
            }
        }

    return newArray;
    }

    console.log (filterArray([1, 2, 3, 4, 5], 3));
    console.log(filterArray([1, 2, 3, 4, 5], 3)); 
    console.log(filterArray([1, 2, 3, 4, 5], 4)); 
    console.log(filterArray([1, 2, 3, 4, 5], 5)); 
    console.log(filterArray([12, 24, 8, 41, 76], 38)); 
    console.log(filterArray([12, 24, 8, 41, 76], 20)); 



// VM161:16 (2) [4, 5]0: 41: 5length: 2[[Prototype]]: Array(0)
// VM161:17 (2) [4, 5]
// VM161:18 [5]
// VM161:19 []
// VM161:20 (2) [41, 76]
// VM161:21 (3) [24, 41, 76]